FROM node:12.18 as build
RUN apt-get update

WORKDIR /src

COPY . .
RUN npm ci
RUN npm run build

FROM node:12.18

WORKDIR /usr/src/app

COPY --from=build /src/.next /usr/src/app/.next
COPY --from=build /src/locales /usr/src/app/locales
COPY --from=build /src/package.json /usr/src/app/package.json
COPY --from=build /src/next.config.js /usr/src/app/next.config.js
COPY --from=build /src/package-lock.json /usr/src/app/package-lock.json
COPY --from=build /src/Dockerrun.aws.json /usr/src/app/Dockerrun.aws.json

EXPOSE 3000

RUN npm ci --production --cache .npm --prefer-offline --no-audit --no-fund

CMD npm run start

