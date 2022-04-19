FROM php:7.4-fpm-alpine

# ADD ./php/www.conf /usr/local/etc/php-fpm.d/www.conf

# RUN addgroup -g 1000 wp && adduser -G wp -g wp -s /bin/sh -D wp

RUN mkdir -p /var/www/html

# RUN chown wp:wp /var/www/html

WORKDIR /var/www/html

RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable pdo_mysql

# WORKDIR /app

#COPY ./wp-deventrypoint.sh /

#CMD [""] 

#WORKDIR /app/wordpress/
