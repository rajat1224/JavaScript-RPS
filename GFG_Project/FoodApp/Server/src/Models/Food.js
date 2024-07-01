const mongoose=require('mongoose');

const foodSchema=mongoose.Schema({
    name: String,
    price: Number,
    desc: String,
    imageUrl: String
});

const food=mongoose.model('Food',foodSchema);

module.exports = food;