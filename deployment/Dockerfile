# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# production stage
# this ensures that only the relevant files are copied over
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/out /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK CMD curl --fail http://localhost || exit 1
CMD ["nginx", "-g", "daemon off;"]