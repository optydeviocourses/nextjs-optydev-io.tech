FROM node:16.14.0-alpine

ARG NODE_ENV="production"
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

# This docker file will copy code from app directory
# including the node_modules and .next folder.
COPY . .

# RUN npm install
# RUN npm install yarn
# RUN yarn

EXPOSE 3000
# This run the server at default port 3000
CMD ["npm", "run", "start"]
# CMD ["npm", "install"]
# CMD ["yarn", "start"]
