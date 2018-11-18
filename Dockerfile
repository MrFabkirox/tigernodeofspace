FROM node:11
WORKDIR /usr/src/app
COPY package.json ./
RUN npm i
COPY . .
EXPOSE 3000 5000 80
CMD ["npm", "start"]
