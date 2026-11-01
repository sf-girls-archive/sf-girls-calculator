FROM node:26-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
COPY packages/calculator/package.json packages/calculator/package.json
COPY packages/frontend/package.json packages/frontend/package.json
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine AS prod
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/packages/frontend/dist .
COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
