const express = require('express')
fs = require('fs')

const app=express();
app.use(express.static(__dirname + '/public'));


app.listen(3001)
console.log("SERVER IS LISTETNING ON PORT 3001")

app.get("/indexExpress", (req,res)=>{
    res.sendFile('public/html/indexExpress.html', {root:__dirname})
})

app.get('/field', (req,res)=>{
    // Read the HTML template
    fs.readFile("./public/html/DynamicDataSite.html", "utf-8", (err, data) => {
        if (err)
            console.log(err);
        else {

            let renderedHtml=data;
            if (req.query.Login != null) {
                renderedHtml = data.replace('{First_h1}', req.query.Login)
            }

            if (req.query.Password != null) {
                console.log("test")
                renderedHtml = renderedHtml.replace('{Second_h1}', req.query.Password)
            }

            // Send the modified HTML as the response
            res.send(renderedHtml);
        }
    });




})

app.get("/api", (req,res) =>{
res.json({"users": ["user1","user2","user3"]})
})

app.use((req,res)=>{
    res.sendFile('public/html/404.html', {root:__dirname})
})