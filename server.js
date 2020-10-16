
const express = require('express');
const app = express();

app.use(express.static('./dist/frontend-conference-w-angular'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/frontend-conference-w-angular/'}
  );
  });

  app.listen(process.env.PORT || 8080);