FROM nginx:latest

ARG BASE_PATH=""

RUN mkdir -p /usr/share/nginx/html/${BASE_PATH}

COPY ./src/.vuepress/dist /usr/share/nginx/html/${BASE_PATH}