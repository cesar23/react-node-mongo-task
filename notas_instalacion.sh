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

npm install react react-dom


#---------------------------------------- instalacion de babel

# babel-preset-react  ( con esto le decimos que babel traducira react)
# babel-preset-env  (espara  decirle que tradusca  todo el codigo  moderno que )


npm install --save-dev babel-loader
#Para el core:
npm install --save-dev @babel/core

#Para dos presets:

npm install @babel/preset-react -D
npm install @babel/preset-env -D
#---------------------------------
