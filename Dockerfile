FROM node:18-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build 

EXPOSE 3000

ENV DATABASE_URL_TEST="file:./dev.db"
ENV DATABASE_URL="postgresql://postgres:admin@150.136.54.24:5434/salesdb"

CMD [ "npm", "run", "start:prod" ]