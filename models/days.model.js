const mongoose= require('mongoose');
const schema = mongoose.Schema;

let day = new schema({
    title: String,
    desc: String
})

module.exports = mongoose.model('day', day)