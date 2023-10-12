# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /frontend
COPY . .
RUN npm ci && npm i --save-dev @types/google-protobuf
CMD ["npm", "start"]
EXPOSE 3000
EXPOSE 10000