let Day = require('../models/days.model');

exports.post = (req, res, next)=>{
    console.log('post day');
    let newDay = new Day(req.body);
    newDay.save((err, resp)=>{
        if(err) res.status(400).send(err);
        res.status(200).send(resp)
    })
}

exports.deleteAll = (req, res, next)=>{

    console.log('all')
       // Package.deleteMany({},(err, resp)=>{
       //     if(err) throw err;
       //     res.status(200).send("deleted all packages")
       // })
   }
   

exports.deleteOne = (req, res, next)=>{
    console.log('hitting1')
    let query = {_id: req.params.id}
    console.log('query ', query)
     Day.deleteOne(query, (err, resp)=>{
         if(err) throw err;
         res.status(200).send("deleted Day")
     })

}

exports.get = (req, res, next)=>{
    console.log('reaching get');
    Day.find({})
    .exec((err, resp)=>{
        if(err) res.status(400).send(err)
        res.status(200).json(resp)
    })
   }