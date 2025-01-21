// import dotenv from 'dotenv';
// dotenv.config({path: `${process.cwd()}/../.env`});
// import {pool} from "../database.js"
const mysql = require('mysql2/promise');
let {pool} = require("../database");

pool = pool.promise();

const WordcardModel ={
    async getWordcard(id){
        const [rows] = await pool.query(`
    SELECT *
    FROM wordcard
    WHERE wordcard_id=?`,[id])
        return rows[0]
    },

    async getWordcards(){
    const [rows] = await pool.query(`
    SELECT *
    FROM wordcard`)
    return rows
},


async createWordcard(lesson_id, challenge_word, secret_word){
    const [result] = await pool.query(`
    INSERT INTO wordcard(lesson_id, challenge_word, secret_word)
    VALUES(?,?,?)
    `, [lesson_id, challenge_word, secret_word])
    return getWordcard(result.insertId)

},

async deleteWordcard(id){
    await pool.query(`
    DELETE FROM wordcard
    WHERE id=?`,[id])
}
    
}
module.exports = WordcardModel