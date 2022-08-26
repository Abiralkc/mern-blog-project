const mongoose = require("mongoose");

const dbConnect = async () => {
  mongoose
    .connect("mongodb://localhost:27017/mern_blog")
    .then(() => console.log("CONNECTION TO DATABASE SUCCESSFUL"))
    .catch((e) => {
      console.log(e);
      console.log("FAILED TO CONNECT TO DATABASE");
    });
};


module.exports= dbConnect