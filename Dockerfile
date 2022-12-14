FROM node:16.16.0-alpine3.16

WORKDIR /gif-world

COPY . .

RUN yarn install

RUN yarn run build

FROM nginx:1.16.0-alpine

COPY --from=builder /gif-world/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY deploy/nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]