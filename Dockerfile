FROM node:12-alpine
WORKDIR /student-grade-table
COPY package*.json ./
COPY . .
RUN npm install --silent
CMD [ "npm", "start"]
EXPOSE 3000