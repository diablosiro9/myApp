# Utiliser une image de base Node
FROM node:14

# Créer et définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier package.json et yarn.lock (ou package-lock.json)
COPY package*.json ./
#COPY yarn.lock ./

# Installer les dépendances du backend
#RUN yarn install
RUN npm install
# RUN npm install express bcryptjs jsonwebtoken mongoose
# Copier tout le code source dans le répertoire de travail
COPY . .

# Exposer le port sur lequel l'API écoute
EXPOSE 3000

# Lancer l'application Node.js
#CMD ["node", "src/app.js"]
CMD ["npm", "start"]
