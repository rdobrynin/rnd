FROM node:20.9.0

WORKDIR /usr/src/app

COPY yarn.lock package.json ./

COPY . /usr/src/app

EXPOSE 5173

CMD [ "sh", "-c", "yarn install && yarn dev" ]
