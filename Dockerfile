# --- Stage 1 --- Install dependencies

FROM node:10

# Copies everything over to Docker environment
COPY . /home/node/app/

# Switch to work directory
WORKDIR /home/node/app/

# Install all node packages
RUN npm install



# --- Stage 2 --- Build

FROM node:10

# Copy dependencies from previous step
COPY --from=0 /home/node/app/ /home/node/app/

# Switch to work directory
WORKDIR /home/node/app/

# Build project
RUN npm run build



# --- Stage 3 --- Host with nginx

FROM nginx:stable

# Copy nginx congif
RUN rm /etc/nginx/conf.d/*
COPY nginx.conf /etc/nginx/conf.d/

# Copy build files to nginx
RUN rm /usr/share/nginx/html/*
COPY --from=1 /home/node/app/build /usr/share/nginx/html/

# Export port to host
EXPOSE ${APP_PORT}

CMD ["nginx", "-g", "daemon off;"]