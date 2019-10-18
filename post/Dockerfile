FROM node:10
WORKDIR /usr/src/app

COPY package.json .
RUN npm cache verify

RUN npm install
RUN npm rebuild
COPY . .
EXPOSE 8080
RUN npm install firebase-admin --save
CMD ["npm","start"]
