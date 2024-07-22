var express = require('express');
var router = express.Router();
const axios = require('axios')



router.get('/', function(request, response) {

    response.render("../views/public/map");
    
    });

    module.exports = router;
