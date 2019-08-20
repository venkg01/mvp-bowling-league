const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/bowling');

mongoose.connect('mongodb+srv://bowling:rochester@cluster0-jb2hk.mongodb.net/test?retryWrites=true&w=majority');

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://bowling:rochester@cluster0-jb2hk.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });






let memberSchema = mongoose.Schema({
// let memberSchema = client.Schema({  
  id: Number,
  name: String,
  highScore: Number,
  average: Number
});

// model constructor compiled from Schema
// Models are responsible for creating and reading documents from the underlying MongoDB database
let Docs = mongoose.model('Docs', memberSchema);

let save = (val, cb) => {
  // console.log(val);
  // const repos = JSON.parse(val);
  let dat = new Docs(val);

  Docs.find({id:val.id}, (err, res) => {
    console.log('In save ', res);
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

const close = () => {
  mongoose.connection.close();
}

module.exports = {
  save,
  getDocs,
  close
}