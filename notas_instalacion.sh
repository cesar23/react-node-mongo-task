#!/usr/bin/env bash
#---------------------------------------------DEPENDENCIAS-----------------------
npm install express --save

#como dependencia d e desarrolllo para guaradr los  cambios automaticos  en el server exprees
npm install nodemon  -D
#permite ver  por consola las peticiones que se hace al servidor
npm install morgan
#para  conexiona  mongo
npm install mongoose

#---------------------------------------------COMANDOS-----------------------

#probando scrit
node src/index.js

#ejecutando script de nodmon en dev
npm run dev

#---------------------------------------- INSTALACION REACT
npm install webpack -D
npm install webpack-cli -D