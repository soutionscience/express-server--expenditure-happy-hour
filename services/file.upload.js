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
 
var app = express()
var s3 = new aws.S3()
 
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'happyhoursaf',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'TESTING_META_DATA'});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload;