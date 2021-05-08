FROM node:14

RUN mkdir -p /home/node/api

WORKDIR /home/node/api

COPY package*.json  ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

ENTRYPOINT [ "./init.sh" ] 


