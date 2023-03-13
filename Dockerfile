FROM node:18-alpine

EXPOSE 80

WORKDIR /app

COPY package*.json main.js ./

RUN npm i

CMD [ "node", "main.js" ]