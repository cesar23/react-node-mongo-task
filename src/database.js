const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/mern-local';

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});


mongoose.connect(URI, {useNewUrlParser: true})
    .then(db => console.log('Conectado a la base de datos MongoDB'))
    .catch(error => console.error(error));

module.exports = mongoose;
