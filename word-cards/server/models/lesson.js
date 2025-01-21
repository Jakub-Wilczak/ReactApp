// import dotenv from 'dotenv';
// dotenv.config({path: `${process.cwd()}/../.env`});
// import {pool} from "../database.js"
const mysql = require('mysql2/promise');
let {pool} = require("../database");

pool = pool.promise();

const LessonModel ={
    async getLesson(id){
        const [rows] = await pool.query(`
    SELECT *
    FROM lesson
    WHERE lesson_id=?`,[id])
        return rows[0]
    },

    async getLessons(){
    const [rows] = await pool.query(`
    SELECT *
    FROM lesson`)
    return rows
},


async createLesson(lesson_name, teacher_id, creation_date){
    const [result] = await pool.query(`
    INSERT INTO lesson()
    VALUES(?,?,?)
    `, [lesson_name, teacher_id, creation_date])
    return getLesson(result.insertId)

},

async deleteLesson(id){
    await pool.query(`
    DELETE FROM lesson
    WHERE id=?`,[id])
}
    
}
module.exports = LessonModel