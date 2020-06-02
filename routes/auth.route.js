const express = require('express');
const router = express.Router();
const {
    validSign,
    validLogin,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../helpers/valid');


//Load Controllers
const {
    registerController,
    activationController,
    signinController,
    forgotPasswordController,
    resetPasswordController,
}=require('../controllers/auth.controller');

router.post('/register',
    validSign,
    registerController);
router.post('/activation', activationController);    

    module.exports=router;    