import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate:{
        validator: validator.isEmail,
        message:'please provide a valid email!'
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
  lastName: {
    type: String,
    default: 'lastName',
    maxlength: 20,
    trim: true,
  },
  location:{
    type:String,
    trim:true,
    maxlength:20 ,
    default:'my city'
  }
});

UserSchema.pre('save',()=>{
  console.log(this.password);
})

export default mongoose.model('user', UserSchema)