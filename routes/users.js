'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models/user');
// var firebase = require("firebase");

router.post('/register', function(req, res, next) {
  console.log('in register');
  // console.log('req.body'+ req.body.password);
  // firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password).catch(function(error) {
  //   console.log('inside register');
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   console.log(errorMessage);// ...
  //   res.send(user);
  // });
  // console.log(user);
  var account = {
  givenName: 'Joe',
  surname: 'Stormtrooper',
  username: 'tk421',
  email: req.body.email,
  password: req.body.password
  // customData: {
  //   favoriteColor: 'white'
  // }
};
/*
application not defined
view link to see how to set up application
https://api.stormpath.com/ui2/index.html#/quickstart/none/nodejs/backend/project-type/existing
*/
application.createAccount(account, function(err, createdAccount) {
  console.log('Account:', createdAccount);
});
res.send();

});



module.exports = router;
