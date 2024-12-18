const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
   


});

module.exports = mongoose.model('newMenu', MenuSchema);