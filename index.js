const mongoose = require("mongoose");
main()
  .then(() => {
    console.log("connected seccessfully");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const newSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String,
});

const User = mongoose.model("User", newSchema);

const user1 = new User({
  name: "Sultan",
  age: 23,
  city: " Nangrahar",
});
user1.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});