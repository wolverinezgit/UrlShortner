const express= require('express');
const index = require('.././controllers/index');
const router= express.Router();

router.get('/:shortId',index.linkVisit);


module.exports = router;