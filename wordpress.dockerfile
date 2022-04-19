FROM wordpress:latest

WORKDIR /var/www/html

COPY .htaccess ./
