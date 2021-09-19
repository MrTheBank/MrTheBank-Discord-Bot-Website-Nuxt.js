FROM 14.17.6-alpine

RUN apk add g++ make python

WORKDIR /usr/src/app

COPY . ./
RUN npm install

ENV HOST=0.0.0.0
ENV PORT=80
ENV BASE_URL=https://mrthebank.maxnus.com

RUN npm run build

EXPOSE 80

CMD [ "npm", "run", "start" ]
