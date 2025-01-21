const express = require('express')
const dotenv = require('dotenv');

const studentRoutes = require('./routes/studentRoutes');
const lessonRoutes = require('./routes/lessonRoutes');
const wordcardRoutes = require('./routes/wordcardRoutes');


const app=express();
dotenv.config({path: `${__dirname}/.env`});


app.use("/api",studentRoutes);
app.use("/api",lessonRoutes);
app.use("/api",wordcardRoutes);


app.get('/', (req, res) => {
    res.status(404).send('Not Found');
});

app.listen(process.env.SERVER_PORT)
console.log("SERVER IS LISTETNING ON PORT " + process.env.SERVER_PORT);