var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
var member = require("../db/member");


router.get("/", function (request, response) {
  response.render("../views/public/signUp-1");
});

router.post("/userInfo", async function (request, response) {
var userExists = true;
 var data = JSON.stringify(request.body);
 var object = JSON.parse(data);
 var email = object["email"];
 var password = object["password"];

const memberExist = await member.loginCheck(email);
userExists = memberExist.exists;
if(email == '' || password == ''){
userExists = "empty field";
}else if(email == '' && password == ''){
  userExists = "empty field";

}
else if(userExists == true){
userExists = true;
}else if(userExists == false){
  const hash = await bcrypt.hash(password, 10);
await member.createMember(email,hash);
}
     
    response.json({userExists: userExists});

});



router.get("/map", function (request, response) {
  response.render("../views/public/map");
});

router.get("/signUp-1", function (request, response) {
  response.render("../views/public/signUp-1");
});
module.exports = router;
