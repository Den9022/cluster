FROM mhart/alpine-node:8.11.4
WORKDIR /api
COPY package*.json /api/
COPY . /api/
EXPOSE 80
CMD ["npm", "start"]