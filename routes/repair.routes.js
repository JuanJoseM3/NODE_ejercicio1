const express = require('express');
const router = express.Router();

const { getPendingRepairs, 
        getRepairById, 
        createRepair, 
        updateRepair, 
        deleteRepair } = require('../controllers/repairs.controller');

router.route('/')
    .get(getPendingRepairs)
    .post(createRepair);
    
router.route('/:id')
    .get(getRepairById)
    .patch(updateRepair)
    .delete(deleteRepair);

module.exports = { repairsRouter: router};