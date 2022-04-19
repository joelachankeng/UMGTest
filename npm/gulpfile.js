
// constant requirements
const gulp = require('gulp'),
fs = require('fs'),
cleanCSS = require('gulp-clean-css'),
concat = require('gulp-concat'),
mode = require('gulp-mode')();
sass = require('gulp-sass'),
postcss = require('gulp-postcss'),
rename = require('gulp-rename'),
combine = require('gulp-scss-combine'),
sourcemaps = require('gulp-sourcemaps'),
uglify = require('gulp-uglify'),
autoprefixer = require('autoprefixer'),
babel = require('gulp-babel'),
cssnano = require('cssnano'),
browserify = require('browserify'),
browserSync = require('browser-sync').create(),
babelify = require('babelify'),
buffer = require('vinyl-buffer'),
source = require('vinyl-source-stream'),
path = require('path'),
scssConcat = require('scss-concat'),
tailwindcss = require('tailwindcss'),
prompt = require('gulp-prompt'),
imagemin = require('gulp-imagemin'),
phplint = require('gulp-phplint'),
postCssOpts = [
  autoprefixer({
    // browsers: ['last 2 versions', '> 2%']
  }),
  cssnano,
  tailwindcss('./tailwind.config.js'),
];

// define shorthand path variable references
let paths = {
  siteName: "UMGTEST",
  src: {
    style: "./src/scss/main.scss",
    script: "./src/js/main.js",
    // tailwind: "./src/scss/vendor/tailwind.scss",
  },
  dist: {
    style: "../wordpress/wp-content/UMGTEST/dist/main.css",
    script: "../wordpress/wp-content/UMGTEST/dist/main.js",
  },
  dest: "../wordpress/wp-content/themes/UMGTEST/dist/",
  watch: {
    php: "../wordpress/wp-content/themes/**/*.php",
    styles: "./src/scss/**/*.scss",
    scripts: "./src/js/**/*.js*",
    images: "../wordpress/wp-content/uploads/**/*",
  }
};


/* ==========================================
Gulp Tasks 
=============================================*/
let sync = (cb) => {
  //start browsersync
  browserSync.init({
    proxy: "http://wordpress/",
    notify: false,
    // Do not open browser on start
    open: false
  });
  compileStyles(paths.src.style);
  compileScripts(paths.src.script);
  cb();
}

let defaultTask = (cb) => {
  // place code for your default task here
  run();
  cb();
}

let run = () => {
  watches();
};

let watches = () => {

  // gulp.watch([
  //   paths.watch.php,
  // ],{ usePolling: true }).on('change', function(file) {
  //   // console.log(file);
  //   // compilePHP(paths.watch.php);
  //   // compileStyles(paths.src.style);
    
  // });

  gulp.watch([
    paths.watch.styles,
  ],{ usePolling: true }).on('change', function (cb) {
    compileStyles(paths.src.style);
    // saveWPSass(paths.src.style);
  });

  gulp.watch([
    paths.watch.scripts,
  ],{ usePolling: true }).on('change', function (cb) {
    compileScripts(paths.src.script);
  });

  // gulp.watch([
  //   paths.watch.images,
  // ],{ usePolling: true }).on('change', function (file) {
  //   compressImages(paths.watch.images);
  // });

};

/* ==========================================
Functions 
=============================================*/

function compileStyles(file) {
  console.log("Compiling SASS for " + paths.siteName);
  return new Promise((resolve) => {
    gulp.src(`${file}`)
      .pipe(sourcemaps.init())  
      .pipe(sass({
        includePaths: [''] //add relative paths
      }).on('error', sass.logError))
      .pipe(postcss(postCssOpts))
      .pipe(mode.development((cleanCSS({ 
        compatibility: '*',
        format: 'beautify',
      }))))
      .pipe(rename(`main.min.css`))
      .pipe(mode.development((sourcemaps.write('.'))))
      .pipe(gulp.dest(`${paths.dest}`))
      .pipe(browserSync.stream())
      .on('finish', function () {
        console.log("Done Compiling SASS for " + paths.siteName);
        if(mode.production()) {
          // compressImages(paths.watch.images);
        }
        resolve();
      });
  });
}


function compileScripts(file) {
  console.log("Compiling Scripts for " + paths.siteName);
  return new Promise((resolve) => {
    browserify({
        entries: paths.src.script,
        debug: true,
        paths: ['./node_modules']
      })
      .transform(
        "babelify", {
          presets: ["@babel/preset-env"],
          sourceMaps: true,
          global: true
        }
      )
      .transform({
        global: true
      }, 'browserify-shim')
      .bundle()
      .on('error', function (error) {
        console.error(error.toString())
        this.emit('end')
      })
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(babel({
        presets: [
          ['@babel/env', {
            modules: false
          }]
        ]
      }))
      .pipe(rename(`main.min.js`))
      // .pipe(gulp.dest("./"))
      .pipe(mode.production(
        uglify().on('error', function (e) {
        console.log(e);
      })))
      .pipe(gulp.dest(paths.dest))
      .pipe(browserSync.stream())
      .on('finish', function () {
        console.log("Done Compiling Scripts for " + paths.siteName);
        if(mode.production()) {
          // compressImages(paths.watch.images);
        }
        resolve();
      });
  });
}


async function compressImages(filepath) {
  gulp.src(filepath)
  .pipe(prompt.confirm('Do you want to compress images in upload folder?'))
  .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
          plugins: [
              {removeViewBox: true},
              {cleanupIDs: false}
          ]
      }),
  ], {
    verbose: true
  }))
  .pipe(gulp.dest('./compress-images/uploads/'))
}

exports.default = gulp.parallel(defaultTask); 