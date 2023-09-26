import { ITweet } from "@/types/Tweet";
import mongoose, { Schema } from "mongoose";

const TweetSchema = new Schema<ITweet>({
    userId:{type:String},
    desc:{type:String},
    media:{
        type:Array,
    },
    comments:Array,
    likes:Array,
    retweets:Array,
    impressions:Array,
    username:{type:String},
    userNickName:{type:String},
    userPic:{type:String}
},{timestamps:true})

export const Tweet =  mongoose.models.Tweet || mongoose.model("Tweet",TweetSchema)
