FROM composer AS composer

FROM php:7.4-fpm-alpine

COPY --from=composer /usr/bin/composer /usr/bin/composer

COPY ./composer-entrypoint.sh /

WORKDIR /app

CMD /composer-entrypoint.sh 