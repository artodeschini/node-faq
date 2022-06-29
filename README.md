# Projeto de Perguntas e Respostas FAQ

## requisitos

* javascript
* git
* sql
* postgres
* nodejs
* npm
* express
* ejs
* body-parser
* html
* css
* bootstrep
* docker

## install all tecnologias

```bash
npm clean-install
```

## start app

```bash
# para desenvolvimento
nodemon index.js

## in production
```

## install nodedemon para desenvolvimento nao parar o servidor

```bash
npm install nodedemon --save
```

## install express

```bash
npm install express --save
```

## install ejs

```bash
npm install ejs --save
```

## install body-parse pega os dados do formuário

```bash
npm install body-parser --save
```

## install sequelize para conexao com bancos de dados sql

```bash
npm install --save sequelize
```

## install postgres para conexoes com mariadb

```bash
npm install --save pg pg-hstore # Postgres
```

## docker postgres

```bash
docker run -d -p 5432:5432 -v ${PWD}:/share --name postgres -e POSTGRES_PASSWORD=postgres

## to create database into container
```

## restart container

```bash
docker restart postgres
```

## para rodar app em produção

```bash
sudo npm install -g pm2 # installar pm2

# start app como demon

pm2 start index.js # roda a app em background
```
