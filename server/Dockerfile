FROM node:alpine
# Khái báo workdir trong node.
WORKDIR /app
COPY ./package.json ./
COPY ./ ./
# Cài đặt các thư viện node liên quan.
# COPY ./package.json /app
RUN npm install

# Chạy lệnh build.
# RUN npm run build
CMD ["npm", "run", "dev"]