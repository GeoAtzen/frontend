var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017"; // connection URL
const client = new MongoClient(url); // mongodb client
const dbName = "Lautstärkedaten"; // database name
const collectionName = "Messungen"; // collection name


/**
 * GET Befehl für die Messungen hinzufügen Seite
 */
router.get("/", function (req, res, next) {
  res.render("ergebnisseite", { title: "Ergebnisseite" });
});
module.exports = router;