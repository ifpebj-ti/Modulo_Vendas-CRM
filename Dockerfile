FROM arm64v8/node:18-alpine

RUN addgroup -S nonroot \
    && adduser -S nonroot -G nonroot
USER nonroot

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./src /usr/src/app
COPY ./prisma /usr/src/app
COPY ./nest-cli.json /usr/src/app
COPY ./package.json /usr/src/app
COPY ./tsconfig.build.json /usr/src/app
COPY ./tsconfig.json /usr/src/app

RUN npm install --ignore-scripts
RUN npx prisma generate
RUN npm run build 

CMD [ "npm", "run", "start:prod" ]

EXPOSE 3000
