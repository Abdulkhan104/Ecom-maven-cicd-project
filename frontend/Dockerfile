# Stage 1: Build React App
FROM node:18-alpine AS build

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of project files
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Serve via Nginx
FROM nginx:stable-alpine

# Copy custom Nginx config
COPY ECOMMERCE_SITE/nginx.conf /etc/nginx/conf.d/default.conf

# Copy React build from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
