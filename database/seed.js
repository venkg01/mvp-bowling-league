const db = require('../database/index');
const faker = require('faker');


const seed = async () =>{
  
  for (let i = 0; i < 10; i++) {
    let val = {};
    val.id = i+1;
    val.name = faker.name.findName();
    val.highScore = Math.round(Math.random() * 100 + 200);
    val.average = val.highScore - Math.round(Math.random() * 100);
    await db.save(val, (res) => console.log(res));
  }
  // db.close();
}

seed();