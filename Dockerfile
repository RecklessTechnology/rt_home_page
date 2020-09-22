# --- Stage 1 --- Install dependencies

FROM node:alpine

# Switch to work directory
WORKDIR /usr/src/app

# Copies everything over to Docker environment
COPY . /usr/src/app/

# Install all node packages
RUN yarn install

# # --- Stage 2 --- Build

FROM node:alpine

# # Switch to work directory
WORKDIR /usr/src/app

# # Copy dependencies from previous step
COPY --from=0 /usr/src/app/node_modules /usr/src/app/node_modules

# # Build project
RUN yarn run build

# # --- Stage 3 --- Deploy

FROM nginx:stable

# # Switch to work directory
WORKDIR /usr/share/nginx/html

# # Copy buld from previous step
COPY --from=1 /usr/src/app/build /usr/share/nginx/html

# Start nginx
CMD ["nginx", "-g", "daemon off;"]