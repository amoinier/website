# Build from other image
FROM node:22-alpine AS builder
ADD . /data
WORKDIR /data
# Optional GitHub token to raise the API rate limit while fetching project
# metadata at build time:
#   docker build --secret id=github_token,src=/path/to/token .
RUN --mount=type=secret,id=github_token \
    npm ci && \
    GITHUB_TOKEN="$(cat /run/secrets/github_token 2>/dev/null || true)" npm run build

FROM nginx:stable-alpine

# Copy site file
COPY --from=builder /data/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
