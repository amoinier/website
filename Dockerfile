# syntax=docker/dockerfile:1

# ---------- build stage ----------
FROM node:22.23-alpine AS builder

WORKDIR /app

# Install dependencies first so this layer is cached until the lockfile changes
COPY package.json package-lock.json .npmrc ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --no-fund

COPY . .

# Optional GitHub token to raise the API rate limit while fetching project
# metadata at build time:
#   docker build --secret id=github_token,src=/path/to/token .
RUN --mount=type=secret,id=github_token \
    GITHUB_TOKEN="$(cat /run/secrets/github_token 2>/dev/null || true)" \
    npm run build

# ---------- runtime stage ----------
FROM nginx:1.30-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -qO /dev/null http://127.0.0.1/ || exit 1
