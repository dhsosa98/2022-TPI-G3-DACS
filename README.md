# DACS - TPI 2022 GRUPO3

Desarrollo y presentacion del TPI de Desarrollo de Aplicaciones Cliente Servidor

## Empecemos 🚀

Estas instrucciones te permitirán obtener una copia del proyecto para el funcionamiento de manera local.

En la rama **Deployment** se encuentran las funcionalidades que fueron añadidas.

### Pre-requisitos 📋

_Que cosas necesitas para poder iniciar la aplicación y como instalarlas_

```
- Node.js.
- MySQL 8.0.x.
- npm.
- Postman.
```

### Instalación 🔧

_Despues de clonar el repositorio del proyecto_

_En la consola ejecutamos el comando_

```
cd .\api\
```

_Y descargamos todas las dependencias necesarias para poder correr el proyecto_

```
npm install
```

_Por ultimo instalamos la base de datos, pero primero necesitamos un archivo llamado '.env' en la raiz del directorio .\api\ donde se declara lo necesario para poder comunicarnos con MySQL_

```
DB_USER=<user>
DB_PASSWORD=<password>
DB_PORT=3306
DB_DIALECT=mysql
DB_HOST=localhost
DB_NAME=Tourism_eCommerce
```

_Finalizado este paso continuamos con la instalacion de la base de datos_

*1er paso: Crear base de datos.*

```
npx sequelize-cli db:create
```

*2do paso: Crear tablas.*
```
npx sequelize-cli db:migrate
```

*3er paso: Carga de datos.*
```
npx sequelize-cli db:seed:all
```

## Construido con 🛠️

_Herramientas utilizadas para crear el proyecto_

- [MySQL 8.0](https://dev.mysql.com/downloads/installer/) - Base de Datos elegida.
- [Nest.js](https://nestjs.com/) - Framework web usado.
- [npm](https://www.npmjs.com/) - Gestor de dependencias.
- [Postman](https://www.postman.com/downloads/) - Testear API.
- [Sequelize](https://sequelize.org/) - ORM para Nodejs que permite manipular bases de datos SQL.
- [Jira](https://www.atlassian.com/software/jira?bundle=jira-software&edition=free) - Gestion del proyecto.
- [GitHub](https://github.com/) - Herramienta de versionado.

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Acevedo Ariel** - _Gestor de Datos, Desarrollador, Tester, Documentacion_ - [JustaDeathKnight](https://github.com/JustaDeathKnight)
* **Acosta Gaston** - _Desarrollador, Tester, Documentación_ - [gasteac](https://github.com/gasteac)
* **Ramirez Joaquin** - _Desarrollador, Tester, Documentación_ - [JoaquinRamirez98](https://github.com/JoaquinRamirez98)
* **Ruiz Franco** - _Desarrollador, Tester, Documentación_ - [francoruiz27](https://github.com/francoruiz27)
* **Sosa Diego** - _Trabajo Inicial, Gestor de Datos, Desarrollador, Tester, Documentación_ - [dhsosa98](https://github.com/dhsosa98)
* **Vilalta Tomas** - _Desarrollador, Tester, Documentación_ - [TomasVilalta](https://github.com/TomasVilalta)


## Despedida 🐺

Este proyecto fue desarrollado entre todos los integrantes compartiendo nuestros conocimientos y aprendiendo a medida que el desarrollo fue evolucionando desde la primer Historia de Usuario hasta la ultima funcionalidad incluida. 💻
