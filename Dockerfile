# Host with nginx

FROM nginx:stable

# Copy nginx congif
RUN rm /etc/nginx/conf.d/*
COPY nginx.conf /etc/nginx/conf.d/

# Copy build files to nginx
RUN rm /usr/share/nginx/html/*
COPY public /usr/share/nginx/html/

# Export port to host
EXPOSE ${APP_PORT}

CMD ["nginx", "-g", "daemon off;"]