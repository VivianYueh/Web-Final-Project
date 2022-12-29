var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
const Todo=require("../models/todo");

/* GET home page. */

router.post(/upload/, async function(req, res) {
  await Todo.insertMany({
    name:req.body.name,
    Score:req.body.Score,
    Object:req.body.Object,
    Level:req.body.Level
  });
});

router.get(/scoreboard/, async function(req, res) {
  let data = await Todo.find({});
  res.send({data});
});

module.exports = router;
