# Host with nginx
FROM nginx:stable

ARG VIRTUAL_PORT
ENV VIRTUAL_PORT $VIRTUAL_PORT

# Copy nginx config
RUN rm /etc/nginx/conf.d/*
COPY nginx.conf /etc/nginx/conf.d/

# Copy build files to nginx
RUN rm /usr/share/nginx/html/*
COPY public /usr/share/nginx/html/

# Export port to host
EXPOSE ${VIRTUAL_PORT}

CMD ["nginx", "-g", "daemon off;"]