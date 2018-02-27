const express = require('express');
const React = require('react');
const path = require('path');
const {App} = require('./app/app');
const {StaticRouter} = require('react-router-dom');
const {renderToString, renderToStaticMarkup} = require('react-dom/server');

const app = express();
app.use(express.static('public'));

app.get("/", (req, res) => {
  let context = {};

  const appString = renderToString((
    <StaticRouter context={context}>
      <App/>
    </StaticRouter>));

  res.write("<!DOCTYPE html>");
  res.write(renderToStaticMarkup(
    <html>
    <head>
      <meta charSet="utf-8"/>
      <title>My Page</title>
      <link rel="stylesheet" type="text/css" href="/styles.css"/>
    </head>
    <body>
    <div id="root" dangerouslySetInnerHTML={ {__html: appString} }>
    </div>
    <script src="/work.client.js"></script>
    </body>
    </html>));
  res.end();
});


app.listen(7777, () => console.log('Example app listening on port 7777!'));