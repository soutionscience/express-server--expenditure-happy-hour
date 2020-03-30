let express = require('express');
let router = express.Router();
let controller = require('../controller/day.controller')


router.route('/')
.post(controller.post)
.get(controller.get)
.delete(controller.deleteAll)

router.route('/:id')
.delete(controller.deleteOne)

module.exports = router;