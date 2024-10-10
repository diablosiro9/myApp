# Utiliser une image de base Node
FROM node:14

RUN npm install -g expo-cli

# Créer et définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier package.json et yarn.lock (ou package-lock.json)
COPY package*.json ./
#COPY yarn.lock ./
RUN chown -R node:node /usr/src/app
# Installer les dépendances du frontend
RUN yarn install
RUN npm install -g expo-cli
RUN mkdir -p /usr/src/app/.expo && chmod -R 777 /usr/src/app/.expo
# Ajouter un utilisateur non-root
RUN yarn add expo
RUN useradd -ms /bin/bash expo
USER expo

EXPOSE 19000

# Copier tout le code source dans le répertoire de travail
COPY . .

# Lancer Expo
CMD ["yarn", "start"]
CMD ["npx", "expo", "start", "--tunnel"]
