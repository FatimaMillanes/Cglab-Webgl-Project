const express = require('express');
const app = express();

const port = 3000;

app.use('/src', express.static('src'));
app.use('/htm', express.static('htm'));
app.use('/shaders', express.static('shaders'));
app.use('/images', express.static('images'));

app.get('/', (req, res)=>{
    res.send('<h1>Hello World Node<h1/>');
});

app.get('/rotate', (req, res)=>{
    res.sendFile(`${__dirname}/htm/rotate.htm`);
});

app.get('/translate', (req, res)=>{
    res.sendFile(`${__dirname}/htm/translate.htm`);
});

app.get('/scale', (req, res)=>{
    res.sendFile(`${__dirname}/htm/scale.htm`);
});

app.get('/matrix', (req, res)=>{
    res.sendFile(`${__dirname}/htm/projectionModelViewMatrix.htm`);
});

app.get('/externalfile', (req, res)=>{
    res.sendFile(`${__dirname}/htm/externalFile.htm`);
});

app.get('/texture', (req, res)=>{
    res.sendFile(`${__dirname}/htm/textureapp.htm`);
});

app.get('/sprite', (req, res)=>{
    res.sendFile(`${__dirname}/htm/spritesheet.htm`);
});

app.listen(port, console.log(`listening at http://localhost:${port}`));

