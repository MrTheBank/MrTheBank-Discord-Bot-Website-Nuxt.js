ARG BASE_URL="https://mrthebank.maxnus.com"

FROM node:14.17.6-alpine as builder

ENV HOST=0.0.0.0
ENV PORT=80
ENV BASE_URL=${BASE_URL}

WORKDIR /usr/src/app
RUN apk add g++ make python

ADD package.json package-lock.json ./

RUN npm install

ADD . ./
RUN npm run build

FROM node:14.17.6-alpine
WORKDIR /usr/src/app
ADD package.json ./
ADD nuxt.config.js ./
COPY --from=builder ./usr/src/app/node_modules ./node_modules/
COPY --from=builder ./usr/src/app/.nuxt ./.nuxt/
COPY --from=builder ./usr/src/app/static ./static/

EXPOSE 80
CMD [ "npm", "run", "start" ]
