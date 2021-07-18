FROM node:16.5.0-alpine

WORKDIR /usr/src/api

ENV API_PORT API_PORT

COPY package*.json ./

RUN npm cache verify
RUN npm install --silent

COPY . .

EXPOSE $API_PORT

CMD ["npm", "start"]