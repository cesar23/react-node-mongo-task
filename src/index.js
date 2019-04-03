const express = require('express');
const morgan = require('morgan');
const path = require('path');


const app = express();

// ---------------------------------- Db connection --------------------------------
const { mongoose } = require('./database');

// ---------------------------------- Settings --------------------------------
app.set('port', process.env.PORT || 3000);


// ---------------------------------- Middlewares --------------------------------
// visualizar las salidas de la peticiones en el server
app.use(morgan('dev'));
// lo que  hace esto que cada vez que  llege a un dato al server pase por esta  funcion
// si lo es vamos a poder acceder a el
app.use(express.json()); //antes (body.parser)


// ----------------------------------  Routes  ----------------------------------
app.use('/api/task', require('./routes/task.routes'));


// ----------------------------------   Static Files ----------------------------------
app.use(express.static(path.join(__dirname, 'public')));;


// ---------------------------------- Starting the server --------------------------------
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});



// const express = require('express');
// const morgan = require('morgan');
// const path = require('path');
//
// const app = express();
//
// // Db connection
// const { mongoose } = require('./database');
//
// // Settings
// app.set('port', process.env.PORT || 3000);
//
// // Middlewares
// app.use(morgan('dev'));
// app.use(express.json());
//
// // Routes
// app.use('/api/tasks', require('./routes/task.routes'));
//
// // Static Files
// app.use(express.static(path.join(__dirname, 'public')));;
//
// // Starting the server
// app.listen(app.get('port'), () => {
//     console.log(`Server on port ${app.get('port')}`);
// });