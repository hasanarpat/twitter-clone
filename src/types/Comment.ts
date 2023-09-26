import { ITweet } from "./Tweet";

export interface IComment{
    userId:string,
    tweetId:string,
    comment:ITweet
}