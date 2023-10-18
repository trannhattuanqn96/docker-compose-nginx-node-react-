FROM node:14.14.0-alpine
WORKDIR /app
COPY ./package.json ./
RUN npm i
# COPY . .
CMD ["npm", "start"]

FROM nginx:stable-alpine
WORKDIR /app
COPY /build /usr/share/nginx/html
COPY /nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000