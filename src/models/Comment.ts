import { IComment } from "@/types/Comment";
import mongoose, { Schema } from "mongoose";

const CommentSchema = new Schema<IComment>({
    userId:{type:String},
    tweetId:{type:String},
    comment:{type:Object}
},{timestamps:true})

export const Comment =  mongoose.models.Comment || mongoose.model("Comment",CommentSchema)