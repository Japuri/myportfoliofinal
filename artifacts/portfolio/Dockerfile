FROM node:22-alpine AS build
WORKDIR /workspace

RUN corepack enable

COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY lib ./lib
COPY artifacts/portfolio ./artifacts/portfolio
COPY artifacts/api-server ./artifacts/api-server
COPY tsconfig.base.json tsconfig.json ./

RUN pnpm install --frozen-lockfile

ENV PORT=5173
ENV BASE_PATH=/
RUN pnpm --filter @workspace/portfolio build

FROM nginx:1.27-alpine
COPY artifacts/portfolio/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /workspace/artifacts/portfolio/dist/public /usr/share/nginx/html
