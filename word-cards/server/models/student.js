// import dotenv from 'dotenv';
// dotenv.config({path: `${process.cwd()}/../.env`});
// import {pool} from "../database.js"
const mysql = require('mysql2/promise');
let {pool} = require("../database");

pool = pool.promise();

const StudentModel ={
    async getStudent(id){
        const [rows] = await pool.query(`
    SELECT *, DATE_FORMAT(birth_date, '%d/%m/%Y') AS formatted_date
    FROM student
    WHERE student_id=?`,[id])
        return rows[0]
    },

    async getStudents(){
    const [rows] = await pool.query(`
    SELECT *
    FROM student`)
    return rows
},


async createStudent(first_name, last_name, age, gender, birth_date){
    const [result] = await pool.query(`
    INSERT INTO student(first_name, last_name, age, gender, birth_date)
    VALUES(?,?,?,?,?)
    `, [first_name, last_name, age, gender, birth_date])
    return getStudent(result.insertId)

},

async deleteStudent(id){
    await pool.query(`
    DELETE FROM student
    WHERE id=?`,[id])
}
    
}
module.exports = StudentModel