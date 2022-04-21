const redirectUri = "http://localhost:3000/";


// Get the hash of the url
const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function (initial, item) {
        if (item) {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
    }, {});
window.location.hash = "";

// Set token
let _token = hash.access_token;

const authEndpoint = "https://accounts.spotify.com/authorize";


const clientId = "99b167a9026d4b2b81a5b9ad1e19d0e6";
const scopes = [
    "streaming",
    "user-modify-playback-state",
    "user-library-modify"
];

// If there is no token, redirect to Spotify authorization

if (!_token) {
  window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token`;
}
// Set up the Web Playback SDK
console.log(`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token`);

let deviceId;
let discographyOffset = 0;

window.onSpotifyPlayerAPIReady = () => {
    const player = new Spotify.Player({
        name: "Just a Random Song",
        getOAuthToken: cb => {
            cb(_token);
        }
    });

    // Error handling
    player.on("initialization_error", e => console.error(e));
    player.on("authentication_error", e => console.error(e));
    player.on("account_error", e => console.error(e));
    player.on("playback_error", e => console.error(e));

    // Playback status updates
    player.on("player_state_changed", state => {
        if (
            state.paused &&
            state.position === 0 &&
            state.restrictions.disallow_resuming_reasons &&
            state.restrictions.disallow_resuming_reasons[0] === "not_paused"
        ) {
            console.log("finished");

        }
    });

    // Ready
    player.on("ready", data => {
        console.log("Ready with Device ID", data.device_id);
        deviceId = data.device_id;
        getASong();

        if($('.block-discography').length) {


            // Load albums and add to the page
            async function addAlbumToPage(element, limit, offset) {
                let $artistID = $(element).attr('data-artist-id');
                if (typeof $artistID !== typeof undefined && $artistID !== false) {        
                    let queryAlbums =  await getAlbums($artistID, limit, offset);
                    // console.log(queryAlbums);        
                    if(queryAlbums) {
                        queryAlbums.items.forEach(function(index, item) {
                            let $artistsString = "";
                            let $artists = queryAlbums.items[0].artists;
                            $artists.forEach(function (value) {
                                $artistsString += "<span>" + value.name + "</span>";
                            });
                            let info = {
                                'url': queryAlbums.items[0].external_urls.spotify,
                                'image': queryAlbums.items[0].images[0].url,
                                'album': queryAlbums.items[0].name,
                                'artist': $artistsString,
                            }
                            
                            $(element).find(".albums").append(`
                                <li class='album'>
                                    <a href='${info.url}' class='album-cta'>
                                        <div style='background-image: url(`+info.image+`')' 
                                            class='album-cover'>
                                        </div>
                                        <p class='album-title'>${info.album}</p>
                                        <p class='album-artist'>${info.artist}</p>
                                        <p>Play</p>
                                    </a>
                                </li>
                            `);
                            // console.log(info);
                        });
                        $(element).trigger('discographyUpdated');
                        $(element).find('.view-more').removeClass('hidden');
                    }
                    
                }
            }
            $('.block-discography').each(async function() {    
                addAlbumToPage($(this),  3, 0);
            });

            $('.block-discography .view-more').click(async function(e) {
                e.preventDefault();
                let $albums = $(this).closest('.block-discography').find('.album');
                // console.log($albums);
                addAlbumToPage($(this).closest('.block-discography'),  3, $albums.length);
            }); 
        }

        $('.block-music-bar button.song-play').click(function() {
            player.togglePlay();
        }); 

        // change song
        $('.block-music-bar button.song-prev, .block-music-bar button.song-next').click(function() {
            getASong();
        }); 

        //set volume level
        $('.block-music-bar .volume-bar-progress').bind('volumeChanged', function(){
            let volumePercentage = $(this).width()* 100 / $('.volume-bar').width();
            console.log($(this).width(), $('.volume-bar').width());
            console.log( volumePercentage + '%');
            player.setVolume(volumePercentage / 100).then(() => {
                console.log('Volume updated!');
            });
        });

        // Check if player is playing music
        setInterval(function(){ 
            // console.log('checking player');
            player.getCurrentState().then(state => {
                // console.log(state);
                if (!state) {
                    $('.block-music-bar img').removeClass('rotating');
                    $('.block-music-bar .song-play').removeClass('pause');
                    console.error('User is not playing music through the Web Playback SDK');
                    
                } else {
                    if(state.paused) {
                        $('.block-music-bar img').removeClass('rotating');
                        $('.block-music-bar .song-play').removeClass('pause');
                    } else {
                        
                        $('.block-music-bar img').addClass('rotating');
                        $('.block-music-bar .song-play').addClass('pause');
                    }
                }
            });
        }, 500);
    });

    // Connect to the player!
    player.connect();

    
   
};

// Play a specified track on the Web Playback SDK's device ID
export function play(device_id, track) {
    $.ajax({
        url: "https://api.spotify.com/v1/me/player/play?device_id=" + device_id,
        type: "PUT",
        data: `{"uris": ["${track}"]}`,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + _token);
        },
        success: function (data) {
            console.log(data);
           
        }
    });
}

export function generateQuery(length) {
    var result = "";
    var characters =
        "abcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function getASong() {
    let random_seed = generateQuery(2);
    let random_offset = Math.floor(Math.random() * 500); // returns a random integer from 0 to 500

    $.ajax({
        url: "https://api.spotify.com/v1/search?type=track&offset=" +
            random_offset +
            "&limit=1&q=" +
            random_seed,
        type: "GET",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + _token);
        },
        success: function (data) {
            $('.block-music-bar img').removeClass('rotating');
            let album = {
                "image": data.tracks.items[0].album.images[0].url,
                "artist": data.tracks.items[0].album.artists[0].name,
                "name": data.tracks.items[0].name,
                "url": data.tracks.items[0].external_urls.spotify,
            }

            $('.block-music-bar img').attr('src', album.image);
            $('.block-music-bar .song-title').text(album.name);
            $('.block-music-bar .album-title').text(album.artist);
            $('.block-music-bar .song-title, .block-music-bar .album-title, .block-music-bar .song-play')
                .attr('href', album.url);
           
            console.log(data);
            console.log(album);
            let trackUri = data.tracks.items[0].uri;

            play(deviceId, trackUri);
            
        }
    });
}

export function saveTrack(tid) {
    var track = $("#" + tid)
        .attr("data-song")
        .split(":")
        .pop();

    $.ajax({
        url: "https://api.spotify.com/v1/me/tracks?ids=" + track,
        type: "PUT",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + _token);
        },
        success: function (data) {
            console.log(data);
        }
    });
}


export async function getAlbums(artistID, limit, offset) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://api.spotify.com/v1/artists/" + artistID + "/albums?include_groups=single%2Cappears_on&market=ES&limit=" + limit + "&offset=" + offset,
            type: "GET",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Bearer " + _token);
            },
            success: function (data) {
                
                // return data;
                resolve(data);
            },
            error : function(request,error)
            {
                // return false;
                reject(error);
            }
            
        });
    });
}

