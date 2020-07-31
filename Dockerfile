FROM node:12
WORKDIR /usr/src/app
RUN npm install express
ADD dist .
EXPOSE 3000
CMD [ "node", "server.js" ]
