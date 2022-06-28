FROM node:16-alpine as front_development

WORKDIR /front

COPY package*.json ./

RUN npm install 

COPY . .