# Build from other image
FROM node:14-alpine as BUILDER
ADD . /data
WORKDIR /data
RUN yarn && yarn build

FROM nginx:1.15-alpine

# Copy site file
COPY --from=BUILDER /data/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]