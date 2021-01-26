FROM node:12.18 as build
RUN apt-get update

WORKDIR /usr/src/app

COPY . .
RUN npm ci
RUN npm run build

FROM node:12.18

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/.next /usr/src/app/.next
COPY --from=build /usr/src/app/package.json /usr/src/app/package.json
COPY --from=build /usr/src/app/package-lock.json /usr/src/app/package-lock.json
COPY --from=build /usr/src/app/next.config.js /usr/src/app/next.config.js
COPY --from=build /usr/src/app/locales /usr/src/app/locales

EXPOSE 3000

RUN npm ci --production --cache .npm --prefer-offline --no-audit --no-fund

CMD npm run start
