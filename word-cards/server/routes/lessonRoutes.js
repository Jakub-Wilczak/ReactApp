const express = require('express');
const router = express.Router();
const path = require('path');
const lessonController = require('../controllers/lessonController');
const studentlessonController = require('../controllers/studentLessonController');

// import express from "express";
// const router = express.Router();
// import studentController from "../controllers/studentController.js";
// import path from "path";



// router().use(express.static(__dirname + '/public'));



router.use(express.static(path.join(__dirname, "../")));
router.get('/lesson/:id',lessonController.getLesson)
router.get('/studentslessons',studentlessonController.getStudentsLessons)
router.get("/lessons", lessonController.getLessons);
router.post("/createlesson/:lesson_name/:teacher_id/:creation_date", lessonController.createLesson);
router.delete("/deletelesson/:id", lessonController.deleteLesson);



module.exports = router;