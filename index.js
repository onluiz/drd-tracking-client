const express = require('express'),
  app = express(),
  path = require('path'),
  PORT = process.env.PORT || 5050

app.use('/', express.static(path.join(__dirname, 'public')))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))