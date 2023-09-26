import { IUser } from "@/types/User";
import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema<IUser>({
    id:{type:Number},
    name:{type:String},
    username:{type:String},
    followers:Array<Number>,
    following:Array<Number>,
    tweets:Array<Number>,
    bio:{type:String},
    link:{type:String},
    birdthDay:{type:Date},
    profilePic:{type:String}
},{timestamps:true})

export const User =  mongoose.models.User || mongoose.model("User",UserSchema)