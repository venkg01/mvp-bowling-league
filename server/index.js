const express = require('express');
let app = express();
let bodyparser = require('body-parser');
const db = require('../database/index');
const faker = require('faker');



app.use(bodyparser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/docs', (req, res) => {
  db.getDocs((err, data) => {
    res.send(JSON.stringify(data));
  });
  // res.sendStatus(200);
});

app.post('/add', (req, res) => {

  let val = {};
  val.id = req.body.index + 1;
  val.name = faker.name.findName();
  val.highScore = Math.round(Math.random() * 100 + 200);
  val.average = val.highScore - Math.round(Math.random() * 100);
  db.save(val, (res) => console.log(res));
  res.sendStatus(200);
})

let port = 3001;

app.listen(port, () => console.log(`listening on port ${port}`));