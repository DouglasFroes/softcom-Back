FROM node:lts-alpine

RUN mkdir -p /home/node/api

WORKDIR /home/node/api

COPY package*.json  ./

RUN yarn

COPY . .

EXPOSE 3000

CMD [ "yarn", "dev" ]
