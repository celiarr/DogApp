var express = require('express');
var router = express.Router();


router.get('/', function(request, response) {
    response.render("../views/public/home");
    
    });



    module.exports = router;