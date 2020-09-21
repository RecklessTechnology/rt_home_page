# --- Stage 1 --- Install dependencies

FROM node:10

# Copies everything over to Docker environment
COPY . /home/node/app/

# Switch to work directory
# WORKDIR /home/node/app/

# # Install all node packages
# RUN npm install

# # --- Stage 2 --- Build

# FROM node:10

# # Copy dependencies from previous step
# COPY --from=0 /home/node/app/ /home/node/app/

# # Copy nginx congif
# RUN rm /etc/nginx/conf.d/*
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Switch to work directory
# WORKDIR /home/node/app/

# # Build project
# RUN npm run build

# Start nginx
CMD ["nginx", "-g", "daemon off;"]