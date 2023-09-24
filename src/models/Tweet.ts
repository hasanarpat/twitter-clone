import { ITweet } from "@/types/Tweet";
import mongoose, { Schema } from "mongoose";

const TweetSchema = new Schema<ITweet>({
    userId:{type:Number},
    desc:{type:String},
    media:{
        type:Array,
    },
    comments:Array,
    likes:Array,
    retweets:Array,
    impressions:Array,
},{timestamps:true})

export const Tweet =  mongoose.models.Tweet || mongoose.model("Tweet",TweetSchema)