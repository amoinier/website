# Build from other image
FROM node:22-alpine AS builder
ADD . /data
WORKDIR /data
RUN npm ci && npm run build

FROM nginx:stable-alpine

# Copy site file
COPY --from=builder /data/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
