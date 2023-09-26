export interface ITweet {
    userId:string,
    desc:string,
    media?:Array<IMedia>,
    comments:Array<Number>,
    likes:Array<Number>,
    retweets:Array<Number>,
    impressions:Array<Number>,
    username:string,
    userNickName:string,
    userPic:string
}

export interface IMedia {
    url:string
}