FROM arm64v8/node:18-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install
RUN npx prisma generate
RUN npm run build

CMD [ "npm", "run", "start:prod" ]

EXPOSE 3000
