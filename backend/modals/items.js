const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    title: {type: String},
    itemname: {type: String },
    price: {type: String },
    imgurl: {type: String },


});

module.exports = mongoose.model('items', MenuSchema);