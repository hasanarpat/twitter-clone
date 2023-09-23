export interface ITweet {
    userId:number,
    desc:string,
    media?:Array<IMedia>,
    comments:number,
    likes:number,
    retweets:number,
    impressions:number
}

export interface IMedia {
    url:string
}