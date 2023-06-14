var bodyParser = require('body-parser'); 
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
const express = require('express');
const router = express.Router();
const customerController = require("../controllers/customer");
// const customer = require("../controllers/customer")
// const { route } = require('./book');

router.get('/all-customer', customerController.getAllCustomers);
// router.post('/add-customer',urlencodedParser,customerController.addCustomer);
router.post('/create-customer', customerController.createCustomer);
router.get('/customer/:id', customerController.getCustomerById);
router.get('/get-customer', customerController.getCustomerByNameAndId);

//create manycustomer
router.post('/create-many-customer', customerController.createManyCustomer);
module.exports = router;