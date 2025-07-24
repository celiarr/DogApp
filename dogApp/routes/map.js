var express = require('express');
var router = express.Router();
const axios = require('axios')



router.get('/', function(request, response) {

    response.render("../views/public/map");
    
    });

    router.post('/getMessage',  async function(request,response){  
   
        let message = JSON.parse(request.body["message"]);
        console.log(message)
        response.redirect('/map');

   
    });

    module.exports = router;
