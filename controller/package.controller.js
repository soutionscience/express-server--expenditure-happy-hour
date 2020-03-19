let Package = require('../models/packages.model')


exports.post = (req, res, next)=>{
    console.log('reaching post')
    let newPackage = new Package(req.body);
    newPackage.save((err, resp)=>{
        if(err) res.status(400).send(err);
        res.status(200).send(resp)
    })
}

exports.get = (req, res, next)=>{
 console.log('reaching get');
 Package.find({})
 .exec((err, resp)=>{
     if(err) res.status(400).send(err)
     res.status(200).json(resp)
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
     Package.deleteOne(query, (err, resp)=>{
         if(err) throw err;
         res.status(200).send("deleted package")
     })

}

exports.addDays = (req, res, next)=>{
    let query = {_id: req.params.id}
    Package.findById(query, (err, resp)=>{
        if(err) res.status(400).send('league not found')
        resp.days.push(req.body.dayId);
        resp.dayCount++
        resp.save((err, resp)=>{
            if(err) res.status(400).send('error saving day');
            res.status(200).send('day added to package')
        })
    })
}