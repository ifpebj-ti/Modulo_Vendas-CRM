FROM arm64v8/node:18-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npx prisma generate
RUN npm run build 

CMD [ "npm", "run", "start:prod" ]

EXPOSE 3000
