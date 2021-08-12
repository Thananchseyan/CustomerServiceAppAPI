const express = require('express');
const router = express.Router();
const {
    addWorker,
    viewWorkers,
    viewWorker,
    editWorker,
    deleteWorker
} = require('../controllers/serviceProviderController');


router.post('/',addWorker);

router.get('/',viewWorkers);
router.get('/id',viewWorker);

router.put('/:id',editWorker);

router.delete('/:id',deleteWorker);


module.exports = router;