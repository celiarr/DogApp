var express = require('express');
var router = express.Router();


router.get('/', function(request, response) {
    response.render("../views/public/signUp-2");
    
    });

    router.get('/signUp-2', function(request, response) {
        response.render("public/signUp-2");
      
      });


    module.exports = router;