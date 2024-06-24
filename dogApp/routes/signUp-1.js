var express = require('express');
var router = express.Router();


router.get('/', function(request, response) {
    response.render("../views/public/signUp-1");
    
    });




    module.exports = router;