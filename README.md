# UMGTest

You can view the live site here:


I did not have enough time to fixed the responsive issues across all browsers.
Also wasn't able fix all the ADA issues. I kept the minimum font to 16px of ADA regulations.

## How to run locally

1. CD into project root folder

```sh
cd C:\Repo\UMGTest
```

2. Run Docker-compose 

```sh
docker-compose up --force-recreate --build -d
```

3. You should be able to access the site by going to http://localhost/ on the browser

4. Goto PHPMYAdmin on the browser: http://localhost:8080/

5. Select the wp database

6. Select the Import tab on the menu

7. Import the latestDB.sql file from this repository.


## How to run NPM

1. CD to npm folder

```sh
cd C:\Repo\UMGTest\npm
```

2. Install NPM

```sh
npm i
```

3. Run Gulp

```sh
gulp
```

4. All the SASS and jQuery files are in the npm\src folder