const mongoose = require("mongoose");
main()
  .then(() => {
    console.log("connected seccessfully");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [1, "Price must be a positive number"],
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: [String],
    enum: ["fiction", "non-fiction"],
  },
  genre: {
    type: [String],
    enum: ["drama", "action", "comedy", "horror"],
  },
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate(
  "69fba00ceeee3ab52b086c38",
  { price: -500 },
  { runValidators: true },
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.price.message);
  });

// let book1 = new Book({
//   title: "The Harry potter and the philosopher's stone",
//   author: "J.K. Rowling",
//   price: "897",
//   category: ["fiction"],
//   genre: ["drama", "action", "comedy", "horror"],
// });

// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
