const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/quemEstaPelaUtf'

mongoose.connect(uri);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Mongo database connected!');
});

