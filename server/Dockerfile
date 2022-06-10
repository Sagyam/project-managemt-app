FROM node:alpine

RUN mkdir -p /usr/src/app/server && chown -R node:node /usr/src/app/server

WORKDIR /usr/src/app/server

COPY package.json yarn.lock ./

USER node

RUN yarn install --pure-lockfile

COPY --chown=node:node . .

EXPOSE $NODE_PORT

