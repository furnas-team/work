const express = require('express');
const React = require('react');
const path = require('path');
const {App} = require('../app/app');
const {StaticRouter} = require('react-router-dom');
const {renderToString, renderToStaticMarkup} = require('react-dom/server');
const shareFb  = require('./images/share-fb.png');
const shareVk  = require('./images/share-vk.png');

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
      <title>Попробовать себя в разных профессиях</title>
      <meta name="description" content="Работа должна быть та, единственная, любимая. Найди какая профессия тебе по душе."/>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>

      <meta property="og:type" content="website"/>
      <meta property="og:site_name" content="Попробовать себя в разных профессиях"/>
      <meta property="og:title" content="Попробовать себя в разных профессиях"/>
      <meta property="og:description" content="Работа должна быть та, единственная, любимая. Найди какая профессия тебе по душе."/>
      <meta property="og:url" content="http://work.furnas.ru"/>
      <meta property="og:locale" content="ru_RU"/>
      <meta property="og:image" content={shareFb}/>
      <link rel="image_src" content={shareVk}/>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"/>
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