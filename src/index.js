var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
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