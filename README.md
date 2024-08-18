# React App Template

Este repositório contém um template básico para iniciar um container Docker.

## Pré-requisitos

### Para Windows:

Abra o cmd e digite:

```bash
wsl --install
```

### Geral

- **Docker** (versão 20 ou superior)
- **Docker Compose** (versão 1.27 ou superior)

## Como Usar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/PedroMatumoto/docker_template.git
   cd docker_template

   ```

2. **Configure o container**
   Modelo de onde criará a imagem, se quiser vá no https://hub.docker.com/ e altera para o de sua preferência

   ```bash
   FROM node:22
   ```

   ```
   WORKDIR /app
   ```

   Arquivos que serão copiados no container:

   ```
   COPY package.json .
   ```

   Instalação de pacotes do JS

   ```
   RUN npm install
   ```

   ```
   COPY . .
   ```

   Porta de exposição

   ```
   EXPOSE 5201
   ```

   Execução no container:

   ```
   CMD ["node", "index.js"]
   ```

3. **Acesse o arquivo commands.md para demais processos**
