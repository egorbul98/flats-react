FROM node:12-alpine
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
RUN npm run build
CMD npm run start-react