const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bowling');

let memberSchema = mongoose.Schema({
  id: Number,
  name: String,
  highScore: Number,
  average: Number
});

// model constructor compiled from Schema
// Models are responsible for creating and reading documents from the underlying MongoDB database
let Docs = mongoose.model('Docs', memberSchema);

let save = (val, cb) => {
  console.log(val);
  // const repos = JSON.parse(val);
  let dat = new Docs(val);

  Docs.find({id:val.id}, (err, res) => {
    if(!res.length) {
      dat.save()
      .then((res1)=>cb(res1))
      .catch(err => console.log(err));
    }
  });


}

const getDocs = (cb) => {
  Docs.find().exec(cb);
}

module.exports = {
  save,
  getDocs
}