# Build from other image
FROM node:20-alpine3.19 AS builder
ADD . /data
WORKDIR /data
ENV DISABLE_ESLINT_PLUGIN=true
RUN yarn && yarn build

FROM nginx:1.15-alpine

# Copy site file
COPY --from=builder /data/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
