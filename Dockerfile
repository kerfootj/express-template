FROM node:18-slim 

# Create app directory
WORKDIR /usr/app

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy in the source code
COPY . .

# Don't run as root
USER node
