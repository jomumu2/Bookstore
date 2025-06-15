FROM node:20

WORKDIR /usr

#Copy all files from outside the containes, into the container
COPY package.json ./


#Install the python/fastapi dependencies
RUN npm install

COPY . .
EXPOSE 3000

# Expo port 8000 to make the appication accesible
CMD [ "node", "index.js" ]
