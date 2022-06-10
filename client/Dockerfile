# Stage 1
FROM node:alpine as build-stage

RUN mkdir -p /usr/src/app/client && chown -R node:node /usr/src/app/client

WORKDIR /usr/src/app/client 

COPY package.json yarn.lock ./

USER node

RUN yarn install --pure-lockfile

COPY --chown=node:node . .

ARG REACT_APP_API_BASE_URL

ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

RUN yarn build

# Stage 2
FROM nginx:alpine

COPY --from=build-stage /usr/src/app/client/build /usr/share/nginx/html

EXPOSE 80 443
