FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install 
COPY --chown=node:node . .
EXPOSE 8080

CMD ["npm","start"]