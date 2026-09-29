FROM node:22-alpine AS base

# -------------------------
# Dependencies
# -------------------------
FROM base AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --legacy-peer-deps


# -------------------------
# Build
# -------------------------
FROM base AS builder

WORKDIR /app

ARG API_DOMAIN_NAME
ENV API_DOMAIN_NAME=$API_DOMAIN_NAME

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN rm -rf .next

RUN npm run build

# -------------------------
# Production
# -------------------------
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8000

COPY --from=builder /app/public ./public
COPY --from=builder --chown=node:node /app/.next ./.next
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

USER node

EXPOSE 8000

CMD ["node", "server.js"]