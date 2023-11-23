# Use uma versão específica do Node.js
FROM node:18-alpine

# Crie e defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie apenas os arquivos necessários
COPY package*.json ./
COPY prisma ./prisma/

# Instale as dependências
RUN npm install --ignore-scripts

# Gere o cliente Prisma
RUN npx prisma generate

# Copie o código principal (assumindo que o código está dentro da pasta 'src')
COPY src ./src

# Construa a aplicação
RUN npm run build

# Exponha a porta em que a aplicação é executada
EXPOSE 3000

# Defina o comando para executar a aplicação
CMD ["npm", "run", "start:prod"]
