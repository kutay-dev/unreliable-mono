FROM node:24-alpine AS base
RUN corepack enable
WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.json nest-cli.json ./

FROM base AS development
COPY . .
RUN pnpm install
CMD ["pnpm", "nest", "start", "chat", "--watch"]

FROM base AS build
COPY . .
RUN pnpm install
RUN pnpm nest build chat
RUN pnpm prune --prod

FROM node:24-alpine AS production
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist/apps/chat ./dist
CMD ["node", "dist/main"]


