const mongoose= require('mongoose');
const schema = mongoose.Schema;

let package = new schema({
    title: String,
    shortDesc: String,
    desc: String,
    image: String,
    dayCount:[
        {type: Number,
        default: 0}
    ],
    cost: String,
    days: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'day'
    }],
    featured: {type: Boolean, default: false},
    multiDay: {type: Boolean, default: false}


});

module.exports = mongoose.model('package', package)