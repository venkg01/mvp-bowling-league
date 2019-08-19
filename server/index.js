const express = require('express');
let app = express();
let bodyparser = require('body-parser');
const db = require('../database/index');


app.use(bodyparser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/docs',(req, res)=> {
  db.getDocs((err, data) => {
    res.send(JSON.stringify(data));
  });
  // res.sendStatus(200);
});

let port = 3001;

app.listen(port, () => console.log(`listening on port ${port}`));