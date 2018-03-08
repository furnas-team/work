const express = require('express');
const React = require('react');
const path = require('path');
const {App} = require('../app/app');
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
      <title>Попробуй себя в другой профессии</title>
      <meta name="description" content="Скучно работать на одной работе. Найди какая профессия тебе по душе." />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <link rel="stylesheet" type="text/css" href="/styles.css"/>
      <script src="//mc.yandex.ru/metrika/watch.js" type="text/javascript"></script>
    </head>
    <body>
    <div id="root" dangerouslySetInnerHTML={ {__html: appString} }>
    </div>
    <script src="/work.client.js"></script>
    </body>
    </html>));
  res.end();
});

export default app;