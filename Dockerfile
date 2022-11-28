#steps before building angular app(node js)
FROM node:alpine3.14 as build
RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app/
RUN npm run build --prod
#angular app
FROM nginx:alpine
COPY --from=build /app/dist/projet /usr/share/nginx/html