# Install dependencies only when needed
FROM node:lts-alpine AS deps

WORKDIR /app

COPY package*.json ./

RUN npm i --production --ignore scripts

COPY . .

RUN npm run build

CMD ["npm", "run", "dev"]
