# 1: Build Angular app
FROM node:lts-slim AS build
WORKDIR /src

COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build -- --configuration=development --output-path=dist


# 2: Serve with Nginx
FROM nginx:stable AS final
EXPOSE 4200

# Remove default nginx index.html before copying Angular dist
RUN rm -f /usr/share/nginx/index.html

# Copy built Angular app to nginx
COPY --from=build /src/dist/browser /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /erc/nginx/nginx.conf

# Optional if you allowed Server side rendering
RUN if [ -f /usr/share/nginx/html/index.csr.html ]; then \
        cp /usr/share/nginx/html/index.csr.html /usr/share/nginx/html/index.html \
    fi