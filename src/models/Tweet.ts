import { ITweet, IMedia } from "@/types/Tweet";
import mongoose, { Schema, model } from "mongoose";

const TweetSchema = new Schema<ITweet>({
    userId:{type:Number},
    desc:{type:String},
    media:{
        type:Array,
    },
    comments:{type:Number},
    likes:{type:Number},
    retweets:{type:Number},
    impressions:{type:Number}
},{timestamps:true})

export const Tweet =  mongoose.models.Tweet || mongoose.model("Tweet",TweetSchema)