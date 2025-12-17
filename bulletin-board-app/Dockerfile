# Use an official Node.js runtime as a parent image
FROM node:current-slim

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package.json . 

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app will run on
EXPOSE 8080

# Run the app when the container starts
CMD [ "npm", "start" ]

