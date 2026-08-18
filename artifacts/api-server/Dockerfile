FROM node:22-slim AS build
WORKDIR /workspace

RUN corepack enable

COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY lib ./lib
COPY artifacts/api-server ./artifacts/api-server
COPY tsconfig.base.json tsconfig.json ./

ENV npm_config_network_timeout=600000
RUN pnpm install --frozen-lockfile --ignore-scripts
RUN pnpm rebuild esbuild

RUN pnpm --filter @workspace/api-server build

FROM node:22-slim
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /workspace/artifacts/api-server/dist ./dist

EXPOSE 3000
CMD ["node", "--enable-source-maps", "./dist/index.mjs"]
