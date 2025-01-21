// import dotenv from 'dotenv';
// import mysql from 'mysql2';

const dotenv = require('dotenv');
const mysql = require('mysql2/promise');
dotenv.config({path: `${__dirname}/.env`});


console.log(process.env.MYSQL_HOST);
console.log(process.env.MYSQL_USER);
console.log(process.env.MYSQL_PORT);
console.log(process.env.MYSQL_PASSWORD);
console.log(process.env.MYSQL_DATABASE);


const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

// export const pool = mysql.createPool({
//     host: "127.0.0.1",
//     user: "root",
//     password: "DatabasePass",
//     database: "wordcards_dev"
// }).promise()

async function getStudent(id){
    const [rows] = await pool.query(`
    SELECT *, DATE_FORMAT(birth_date, '%d/%m/%Y') AS formatted_date
    FROM student
    WHERE student_id=?`,[id])
    return rows[0]
}

async function getStudents(){
    const [rows] = await pool.query(`
    SELECT *, DATE_FORMAT(birth_date, '%d/%m/%Y') AS formatted_date
    FROM student`)
    return rows
}

module.exports = pool







