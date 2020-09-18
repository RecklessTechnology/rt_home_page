# Host with nginx
FROM nginx:latest

# Copy build files to nginx
# RUN rm /usr/share/nginx/html/*
# COPY ./public /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]