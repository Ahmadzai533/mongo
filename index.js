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
const user2 = new User({
  name: "Ali",
  age: 25,
  city: "Kabul",
});
// user1.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
// user2.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
User.insertMany([
  { name: "ALi", age: "30", email: "ali@gmail.com" },
  { name: "Ahmad", age: "34", email: "ahmad@gmail.com" },
  { name: "Musa", age: "20", email: "Musa@gmail.com" },
]).then((res) => {
  console.log(res);
});

User.findByIdAndUpdate("69fa3e9f8af1dfb36a76f60e", { age: 30 }, { new: true })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

User.findById("69fa42ffc4f21851f544a420")
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });
