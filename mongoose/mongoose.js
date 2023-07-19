const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const UserModel = mongoose.model(Users, UserSchema);

const main = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/myDataBase');
  console.log('Connected to MongoDB');

  const newData = new UserModel({
    name: "Kuldip Yadav",
    age: 35
  });

  await newData.save();
  console.log("Data saved");

  mongoose.disconnect();
};

main();
