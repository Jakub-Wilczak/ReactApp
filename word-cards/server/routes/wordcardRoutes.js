const express = require('express');
const router = express.Router();
const path = require('path');
const wordcardController = require('../controllers/wordcardController');

// import express from "express";
// const router = express.Router();
// import studentController from "../controllers/studentController.js";
// import path from "path";



// router().use(express.static(__dirname + '/public'));



router.use(express.static(path.join(__dirname, "../")));
router.get('/wordcard/:id',wordcardController.getWordcard)
router.get("/wordcards", wordcardController.getWordcards)
router.post("/createwordcard/:lesson_id/:challenge_word/:secret_word", wordcardController.createWordcard)
router.delete("/deletewordcard/:id", wordcardController.deleteWordcard)



module.exports = router;