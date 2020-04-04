const aws = require('aws-sdk')
const express = require('express')
const multer = require('multer')
const multerS3 = require('multer-s3')

require('dotenv').config();

aws.config.update({
    secretAccessKey: process.env.Secret_Access_Key,
    accessKeyId: process.env.Access_Key_ID,
    region: 'us-east-1'
})

var s3 = new aws.S3()
const fileFilter = (req, file, cb)=>{
  if(file.mimetype == 'image/jpeg'|| file.mimetype == 'image/png'){
    cb(null, true)
  }else{
    cb(new Error("Invalud mime type, only JPEG and PNG", false))
  }
}
 
var upload = multer({
  fileFilter: fileFilter,
  storage: multerS3({
    s3: s3,
    bucket: 'happyhoursaf',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload;