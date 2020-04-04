let express = require('express');
let router = express.Router();

const upload = require('../services/file.upload')
const singleUpload = upload.single('image')


router.post('/', function(req, res){
   
    singleUpload(req, res, function(err){

        if(err) {res.status(400).send({error: [{title: "file type not allowed", detail: err.message}]})}
        else{
        return res.json({'image url': req.file.location})}
    })

})


module.exports = router;