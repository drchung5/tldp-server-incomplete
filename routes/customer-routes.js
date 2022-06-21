import express from 'express'
var customerRouter = express.Router()
import customerController from '../controllers/customer-controller.js'

// GET /api/customers
customerRouter.get('/', function(req, res) {
  customerController.getAllCustomers(req, res)
})

// GET /api/customers/:cunstomer_id
customerRouter.get('/:customer_id', function(req, res) {
  customerController.getCustomerByID(req, res)
})

// POST /api/customers
customerRouter.post('/', function(req, res) {
  customerController.postCustomer(req, res)
})

// GET /api/customers/bymane/:customer_name
customerRouter.get('/byname/:customer_name', function(req, res) {
  customerController.getCustomerByName(req, res)
})

// DELETE /api/customers/:customer_id
customerRouter.delete('/:customer_id', function(req, res) {
  customerController.deleteCustomerByID(req, res)
})

export default customerRouter