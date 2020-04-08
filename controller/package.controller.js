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
    Package.deleteMany({},(err, resp)=>{
        if(err) throw err;
        res.status(200).send("deleted all packages")
    })
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
    console.log('hitting add days')
    let query = {_id: req.params.id}
    Package.findById(req.params.id, (err, resp)=>{
        if(err) res.status(400).send('Package not found')
        console.log('what are we actually sending ', req.body)
        resp.days.push(req.body.id);
        resp.dayCount++
        resp.save((err, resp)=>{
            if(err) res.status(400).send('error saving day');
            res.status(200).send('day added to package')
        })
    })
}

exports.getOne = (req, res, next)=>{
   // console.log('hitting get one')
   let query = {_id: req.params.id}
   Package.findOne(query)
   .populate('days')
   .exec((err, resp)=>{
       if(err) res.status(400).send("error finding specific package")
       res.status(200).json(resp)
   })
}

exports.deleteDay = (req, res, next)=>{
    Package.findById(req.params.id, (err, resp)=>{
        if(err) res.status(400).send({"error":"could not find package"})
        if(resp.indexOf(req.body.id) != 1) res.status(400).send({"error": "day is not part of package"})
        resp.days.splice(resp.indexOf(req.body.id), 1)
        resp.save((err, resp=>{
            if(err) res.status(400).send({"error":"error removing error"})
            res.status(200).send({"deleted": "removed day"})
        }))
    })

}