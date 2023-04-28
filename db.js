import mongoose from "mongoose";

mongoose.connect("mongodb+srv://gaurav:Gauravmongo@cluster0.wrfziyy.mongodb.net/?retryWrites=true&w=majority" ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(err));

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

// const users = [
//     { name: "Ram", phone: 12345 },
//     { name: "Shyam", phone: 54321 },
//     { name: "Seeta" , phone: 12123 }
//   ];
  
//   User.insertMany(users)
//     .then(() => console.log('Users created'))
//     .catch((err) => console.log(err));
  

newUser.save()
.then(() => console.log('User created'))
.catch((err) => console.log(err));


User.deleteOne({ name: 'vinay' })
.then(() => console.log('User deleted'))
.catch((err) => console.log(err));