FROM node:22 AS builder

RUN mkdir -p /home/client

WORKDIR /home/client

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.27

COPY --from=builder /home/client/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]