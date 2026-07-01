FROM node:latest

WORKDIR /service-marketplace-api

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

CMD ["npm", "run", "dev"]

EXPOSE 8080