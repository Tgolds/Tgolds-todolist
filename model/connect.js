const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todos').then(() => {
    console.log('db connected');
}).catch((err) => {
    console.log('db connect err: ', err);
});