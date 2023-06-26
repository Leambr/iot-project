# Étape 1 : Construire l'application React
FROM node:14 as builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Étape 2 : Exécuter l'application construite dans un serveur Nginx léger
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# Aucune configuration Nginx personnalisée n'est nécessaire ici

CMD ["nginx", "-g", "daemon off;"]
