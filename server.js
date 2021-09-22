// var express = require('express');
// var app = express();

// app.use(express.static(__dirname + '/dist/k9cs'));
// app.get('/', function(req, res){
//   res.sendFile(path.join(__dirname + '/dist/k9cs/src/index.html'));
// });
// app.get('/dogs', function(req, res){
//   res.sendFile(path.join(__dirname + '/dist/k9cs/src/index.html'));
// });
// app.get('/blogs', function(req, res){
//   res.sendFile(path.join(__dirname + '/dist/k9cs/src/index.html'));
// });
// app.get('/contact', function(req, res){
//   res.sendFile(path.join(__dirname + '/dist/k9cs/src/index.html'));
// });
// app.get('/dogs/:id', function(req, res){
//   res.sendFile(path.join(__dirname + '/dist/k9cs/src/index.html'));
// });
// app.get('/blogs/create', function(req, res){
//   res.sendFile(path.join(__dirname + '/dist/k9cs/src/index.html'));
// });
// app.get('/admin', function(req, res){
//   res.sendFile(path.join(__dirname + '/dist/k9cs/src/index.html'));
// });
// app.get('/dog/create', function(req, res){
//   res.sendFile(path.join(__dirname + '/dist/k9cs/src/index.html'));
// });
// app.get('/blogs/edit/:id', function(req, res){
//   res.sendFile(path.join(__dirname + '/dist/k9cs/src/index.html'));
// });
// app.get('/dog/edit/:id', function(req, res){
//   res.sendFile(path.join(__dirname + '/dist/k9cs/src/index.html'));
// });
// app.get('/donate', function(req, res){
//   res.sendFile(path.join(__dirname + '/dist/k9cs/src/index.html'));
// });

// app.listen(process.env.PORT || 8080);

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/k9cs'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname + '/dist/k9cs/src/index.html'));});
app.listen(process.env.PORT || 8080);
