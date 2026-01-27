# Etapa 1: Construcción (Build)
FROM node:20-alpine AS build 
WORKDIR /app 
COPY package*.json ./ 
RUN npm install 
COPY . . 
RUN npm run build 
# Etapa 2: Servidor de Producción (Nginx) 
FROM nginx:stable-alpine 
# Copiamos los archivos compilados desde la etapa 'build' 
COPY --from=build /app/dist /usr/share/nginx/html 
EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"] 