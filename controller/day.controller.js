let Day = require('../models/days.model');

exports.post = (req, res, next)=>{
    console.log('post day');
    let newDay = new Day(req.body);
    newDay.save((err, resp)=>{
        if(err) res.status(400).send(err);
        res.status(200).send(resp)
    })
}
