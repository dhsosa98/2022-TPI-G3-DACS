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
- Docker.
```
### Deploy app ⚙️
- [FANTUR S.A](https://tpi-dacs.azurewebsites.net/) - Pagina del proyecto.

### Instalación usando Docker 🐳

_Despues de clonar el repositorio del proyecto_

_En la consola ejecutamos el comando_

```
docker-compose up -d
```

_Una vez completado el proceso de docker ya podemos acceder a la pagina principal_

```
http://localhost/
```

_Para acceder al Backend_

```
http://localhost/api/
```
### Instalación usando NPM 🔧

#### Para el Backend 🌎

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
PORT=4000
DB_USER=<user>
DB_PASSWORD=<password>
DB_PORT=3306
DB_DIALECT=mysql
DB_HOST=localhost
DB_NAME=Tourism_eCommerce
```

_Finalizado este paso continuamos con la instalacion de la base de datos_

_1er paso: Crear base de datos._

```
npx sequelize-cli db:create
```

_2do paso: Crear tablas._

```
npx sequelize-cli db:migrate
```

_3er paso: Carga de datos._

```
npx sequelize-cli db:seed:all
```

_Poner en marcha el Backend_

```
npm run start:dev
```
_Y aceedemos al Backend_

```
http://localhost:4000/api/
```

#### Para el Frontend 💻

_En la consola ejecutamos el comando_

```
cd .\api\
```

_Y descargamos todas las dependencias necesarias para poder correr el proyecto_

```
npm install
```

_Poner en marcha el Backend_

```
npm run dev
```

_Y aceedemos a la pagina principal_

```
http://localhost:3000/
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
- [Docker](https://www.docker.com/) - Herramienta de contenedores.
- [Vite.js](https://vitejs.dev/) - Frontend tool.
- [Nginx](https://www.nginx.com/) - Reverse proxy.
- [Azure](https://azure.microsoft.com/) - Servicios en la nube.

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

- **Acevedo Ariel** - _Gestor de Datos, Desarrollador, Tester, Documentacion_ - [JustaDeathKnight](https://github.com/JustaDeathKnight)
- **Acosta Gaston** - _Desarrollador, Tester, Documentación_ - [gasteac](https://github.com/gasteac)
- **Ramirez Joaquin** - _Desarrollador, Tester, Documentación_ - [JoaquinRamirez98](https://github.com/JoaquinRamirez98)
- **Ruiz Franco** - _Desarrollador, Tester, Documentación_ - [francoruiz27](https://github.com/francoruiz27)
- **Sosa Diego** - _Trabajo Inicial, Gestor de Datos, Desarrollador, Tester, Documentación_ - [dhsosa98](https://github.com/dhsosa98)
- **Vilalta Tomas** - _Desarrollador, Tester, Documentación_ - [TomasVilalta](https://github.com/TomasVilalta)

## Despedida 🐺

Este proyecto fue desarrollado entre todos los integrantes compartiendo nuestros conocimientos y aprendiendo a medida que el desarrollo fue evolucionando desde la primer Historia de Usuario hasta la ultima funcionalidad incluida. 💻
