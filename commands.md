## Comandos interessantes

### Criar imagem

docker build .

### Colocar para rodadr

docker run -p port:redirect_port [id_imagem]

### Descrever o deployment

docker describe containers

### Descrever o pod

kubectl get pods -l app=meu-app

### Escalar um deployment

kubectl scale deployment/nome-do-seu-deployment --replicas=4
