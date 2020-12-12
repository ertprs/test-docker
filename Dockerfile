FROM node:12.20.0-buster-slim

WORKDIR /app

ADD . .

RUN npm install

CMD npm start