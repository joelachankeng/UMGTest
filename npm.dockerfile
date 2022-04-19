FROM node:14.17.0-alpine3.13

# install python

# RUN apt-get update || : && apt-get install python -y

# RUN apt-get install python3-pip -y

# RUN apt update && apt install build-essential && apt install python

RUN npm install --global gulp && npm link gulp

COPY ./npm-entrypoint.sh /

WORKDIR /app/npm

CMD /npm-entrypoint.sh 

