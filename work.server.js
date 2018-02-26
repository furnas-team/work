const express = require('express');
// const React = require('react');
const path = require('path');
// const {App} = require('./src/main/app/app');
// const {StaticRouter} = require('react-router-dom');
// const {renderToNodeStream} = require('react-dom/server');

const app = express();
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.write("<!DOCTYPE html><html><head><title>My Page</title></head><body>");
  res.write("<div id='root'></div><script src=\"/main.js\"></script></body></html>");
  res.end();
});


app.listen(7777, () => console.log('Example app listening on port 7777!'));