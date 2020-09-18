# Host with nginx
FROM node:latest

# Install all node packages
RUN yarn

# Build project
RUN yarn build

CMD ["yarn", "start"]

# --- Stage 3 --- Host with nginx

# FROM nginx:stable

# # Copy nginx congif
# RUN rm /etc/nginx/conf.d/*
# COPY nginx.conf /etc/nginx/conf.d/

# # Copy build files to nginx
# RUN rm /usr/share/nginx/html/*
# COPY --from=1 ${DOCKER_DEST}/build /usr/share/nginx/html/

# # Export port to host
# EXPOSE ${APP_PORT}

# CMD ["nginx", "-g", "daemon off;"]