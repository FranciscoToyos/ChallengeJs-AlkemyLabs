// ************ Require's ************//
const express = require("express");
const router = express.Router();
// **Controller** //
const budgetApiController = require ('../../controllers/budgetControllers')

/* Crud */
// GET for the budget
router.get('/', budgetApiController.list);

module.exports = router;