FROM node:12.18.0
WORKDIR /api
VOLUME /api
CMD yarn start
COPY ./package.json package.json
COPY ./yarn.lock yarn.lock
RUN yarn