var express = require('express');
var router = express.Router();


router.get('/', function(request, response) {
    response.render("../views/public/account-2");
    
    });




    module.exports = router;