require('dotenv').config();
const mongoose = require("mongoose");

console.log("DB_CONNECT:",process.env.DB_CONNECT)

function connectToDb() {
  mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("Connect to DB");
    })
    .catch((err) => console.log(err));
}

module.exports = connectToDb;
