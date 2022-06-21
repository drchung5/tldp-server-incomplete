import express from 'express'
import accountController from '../controllers/account-controller.js'
var accountRouter = express.Router()

// POST /api/acounts/login
accountRouter.post('/login', function(req, res) {
  console.log('/accounts/login')
  accountController.login(req, res)
})

// POST /api/acounts/register
accountRouter.post('/register', function(req, res) {
  console.log('/accounts/register')
  accountController.register(req, res)
})

export default accountRouter