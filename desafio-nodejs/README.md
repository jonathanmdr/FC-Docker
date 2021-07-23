# Desafio Docker com NodeJS e Nginx

O desafio refere-se à criarmos uma imagem para um simples app NodeJS cujo o mesmo acesse uma base de dados MySQL e seja acessível via proxy reverso com Nginx.

O app NodeJS apenas exibe em uma página HTML a seguinte mensagem `FullCycle Rocks!` seguida de uma lista de pessoas contendo um único nome.

### Executando

> :warning: É necessátio ter o `Docker` e `docker-compose` devidamente instalado e configurado.

Subindo os containers:
```sh
 ~$ docker-compose up -d
```

Derrubando os containers:
```sh
 ~$ docker-compose down --remove-orphans
```