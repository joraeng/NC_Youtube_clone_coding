import mongoose from 'mongoose';
import passportLocalMongoose from "passport-local-mongoose";


const UserSchema = new mongoose.Schema({
  name: String,
  email:String,
  avatarUrl: String,
  facebookId: Number,
  githubId:Number,
  comments: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
    }
  ],
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video"
    }
  ]
});
//스키마에 플러그인 추가를 돕는 메소드가 있네
UserSchema.plugin(passportLocalMongoose, {usernameField: 'email'}); //PLM은 configration obj이 필요함


const model = mongoose.model("User", UserSchema);



export default model;