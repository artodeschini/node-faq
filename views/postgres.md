# postgres

## dicas de postgress com docker

```bash
docker exec -it postgres bash
```

## login in psql

```bash
# after command abrove
psql -U postgres # the password is postgres
```

## show all databases

```sql
\list
```

## create

```sql
create database name;
```

## change for database

```sql
\c <name_database>
```

## exec a script sql

```sql
\i /<path_from_script.sql>
# exemple
#\i /share/1.CreateTable.sql
```

## to exit to list select very large use

ctrl c

## to exit to propt command psql

```sql
\q
```
