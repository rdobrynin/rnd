FROM node:20.9.0

WORKDIR /usr/src/app

COPY yarn.lock package.json ./

RUN npm install --legacy-peer-deps

RUN npm i -g typeorm ts-node

RUN yarn install

RUN yarn add bcrypt @types/bcrypt

COPY . /usr/src/app

EXPOSE 3002

CMD [ "node", "dist/src/main" ]
