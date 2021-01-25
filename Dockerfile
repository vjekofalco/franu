FROM node:12.18
RUN apt-get update

EXPOSE 3000

WORKDIR /usr/src/app

COPY package* ./
COPY prisma ./prisma/
RUN npm ci --production --cache .npm --prefer-offline --no-audit --no-fund

RUN npx prisma generate

COPY . .

RUN npm run build

CMD npm run start
