const express = require('express');
const router = express.Router();

router.use('/serviceprovider',require('./serviceProvider'));

module.exports = router;