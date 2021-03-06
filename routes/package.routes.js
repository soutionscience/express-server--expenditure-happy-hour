let express = require('express');
let router = express.Router();
let controller = require('../controller/package.controller')


router.route('/')
.post(controller.post)
.get(controller.get)
.delete(controller.deleteAll)

router.route('/:id')
.delete(controller.deleteOne)
//.post(controller.addDays)
.get(controller.getOne)

router.route('/:id/days')
.post(controller.addDays)

module.exports = router;