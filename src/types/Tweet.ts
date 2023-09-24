export interface ITweet {
    userId:number,
    desc:string,
    media?:Array<IMedia>,
    comments:Array<Number>,
    likes:Array<Number>,
    retweets:Array<Number>,
    impressions:Array<Number>,
}

export interface IMedia {
    url:string
}