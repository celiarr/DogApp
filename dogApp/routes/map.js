var express = require("express");
var router = express.Router();

router.get("/", function (request, response) {
  response.render("../views/public/map");
});

router.post("/getMessage", async function (request, response) {
  let message = JSON.parse(request.body["message"]);
  if (messages == "Hello, I am close and would like to avoid crossing paths") {
  } else if (
    messages ==
    "Hello, I am near and have a friendly dog. I don’t mind crossing paths"
  ) {
  }
  console.log(message);
  response.redirect("/map");
});

module.exports = router;
