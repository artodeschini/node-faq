# Projeto de Perguntas e Respostas FAQ

## requisitos

* javascript
* git
* mysql
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

## install mariadb para conexoes com mariadb

```bash
# npm install --save mysql2
npm install --save mariadb
```

## docker mariadb

```bash
docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7.22
#docker run --name mysql -p 3306:3306 -d  mysql/mysql-serv
docker run --name=mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql/mysql-server:latest

# check container up
docker ps

# verifica se o servico subiu corretamente no container
docker logs mysql

# acesso direto ao container
docker exec -it mysql /bin/bash
```

## acesso externo ao docker do mysql

```sql
mysql -u root -p


update mysql.user set host='%' where user='root';

FLUSH PRIVILEGES;
```

## para sair do mysqld use \q

## restart container

```bash
docker restart mysql
```
