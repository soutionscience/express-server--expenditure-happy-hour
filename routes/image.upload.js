let express = require('express');
let router = express.Router();

const upload = require('../services/file.upload')
const singleUpload = upload.single('image')


router.post('/', function(req, res){
    console.log('hitting image upload')
    singleUpload(req, res, function(err){
        if(err) console.log("error: ", err)
        return res.json({'image url': req.file.location})
    })

})


module.exports = router;