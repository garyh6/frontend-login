FROM node:10
WORKDIR /usr/src/test-app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 5000
CMD serve -s build
