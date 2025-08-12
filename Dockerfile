# syntax=docker/dockerfile:1

ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-slim AS base
ENV NODE_ENV=production
WORKDIR /app

# 1) Install prod+dev dependencies (for build only)
FROM base AS deps
ENV NODE_ENV=development
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# 2) Build the app
FROM base AS builder
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 3) Runtime: copy only what is needed to run the server
FROM node:${NODE_VERSION}-slim AS runner
ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0 \
    NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

# Create non-root user
RUN groupadd -r nextjs && useradd -r -g nextjs nextjs

# Copy the standalone server and static assets produced by Next.js
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Copy any runtime data files your app imports at runtime
COPY --from=builder /app/i18n ./i18n
COPY --from=builder /app/messages ./messages

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]



