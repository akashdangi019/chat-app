const path = require('path')
const express = require('express');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

var app = express();

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Server is up on ${port}`);
});

// console.log(' Path is ')
// console.log(__dirname)
// console.log(__dirname + '/../public')
// console.log(publicPath)