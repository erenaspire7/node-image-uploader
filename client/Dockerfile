FROM node:16.5.0-alpine

WORKDIR /usr/src/client

ARG REACT_PORT

ENV REACT_PORT $REACT_PORT

COPY package*.json ./

RUN npm cache verify
RUN npm install --silent

COPY . .

EXPOSE $REACT_PORT

CMD ["npm", "run", "server"]