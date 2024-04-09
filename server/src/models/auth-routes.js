const express = require('express')
const authRouter = express.Router();
const ctrl = require('./auth-controllers')

authRouter.post('/register',ctrl.Register)
authRouter.post('/resent-otp',ctrl.ResendOTP)
authRouter.post('/verify',ctrl.VerifyEmail)

module.exports = authRouter; 