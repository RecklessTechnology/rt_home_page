# build environment
FROM node:10
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts -g
COPY . /usr/src/app
RUN npm run build

# production environment
FROM nginx:latest
COPY --from=1 /usr/src/app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]