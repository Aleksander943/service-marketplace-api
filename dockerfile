FROM node:latest

WORKDIR /service-marketplace-api

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]

EXPOSE 8080