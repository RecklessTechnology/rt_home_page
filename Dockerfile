# --- Stage 1 --- Install dependencies and build

FROM node:alpine

# Copies everything over to Docker environment
COPY . /usr/src/app/

# Switch to work directory
WORKDIR /usr/src/app

# Install all node packages
RUN yarn install

# # Build project
RUN export NODE_OPTIONS=--openssl-legacy-provider
RUN yarn run build

# --- Stage 2 --- Deploy

FROM nginx:stable

# # Switch to work directory
WORKDIR /usr/share/nginx/html

# # Copy buld from previous step
COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# Start nginx
CMD ["nginx", "-g", "daemon off;"]