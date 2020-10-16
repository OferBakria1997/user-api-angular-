
const express = require('express');
const app = express();

app.use(express.static('./dist/gallery'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/gallery/'}
  );
  });

  app.listen(process.env.PORT || 8080);