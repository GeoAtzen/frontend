var express = require("express");
var router = express.Router();

/**
 * GET Befehl für die Messungen ansehen Seite
 */
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("anwendungsseite", { title: "Anwendungsseite" });
});

router.post("/ergebnisseite", function (req, res, next) {
  // Code zum ausführen des R Skripts

  
  res.render("ergebnisseite", { title: "Ergebnisseite" })
  
});


module.exports = router;
