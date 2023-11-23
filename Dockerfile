# Use a specific version of Node.js
FROM node:18-alpine

# Create and set the working directory
WORKDIR /usr/src/app

# Copy only necessary files
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm install --ignore-scripts

# Generate Prisma client
RUN npx prisma generate

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "run", "start:prod"]
