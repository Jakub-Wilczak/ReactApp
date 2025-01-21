// import dotenv from 'dotenv';
// dotenv.config({path: `${process.cwd()}/../.env`});
// import {pool} from "../database.js"
const mysql = require('mysql2/promise');
let {pool} = require("../database");

pool = pool.promise();

const StudentLesson ={
    async getStudentLessons(){
    const [rows] = await pool.query(`
    SELECT *
    FROM lesson
    INNER JOIN student_lesson ON lesson.lesson_id = student_lesson.lesson_id
    INNER JOIN student on student.student_id = student_lesson.student_id
    `)
        return rows}
}
    

module.exports = StudentLesson