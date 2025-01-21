const express = require('express');
const router = express.Router();
const path = require('path');
const studentController = require('../controllers/studentController');

// import express from "express";
// const router = express.Router();
// import studentController from "../controllers/studentController.js";
// import path from "path";



// router().use(express.static(__dirname + '/public'));



router.use(express.static(path.join(__dirname, "../")));

router.get('/student/:id',studentController.getStudent)
router.get("/students", studentController.getStudents)
router.post("/createstudent/:first_name/:last_name/:age/:gender/:birth_date", studentController.createStudent)
router.delete("/deletestudent/:id", studentController.deleteStudent)



module.exports = router;