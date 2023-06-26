# Étape 1 : Utiliser une image de base contenant Node.js
FROM node:14.17.1 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de package.json et package-lock.json
COPY frontend/package.json frontend/package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier les fichiers du frontend
COPY frontend ./

# Exécuter la construction de l'application
RUN npm run build

# Étape 2 : Utiliser une image légère contenant Nginx pour servir l'application construite
FROM nginx:1.21.1

# Copier les fichiers construits depuis l'étape précédente
COPY --from=build /app/build /usr/share/nginx/html

# Copier la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Commande de démarrage du serveur Nginx
CMD ["nginx", "-g", "daemon off;"]