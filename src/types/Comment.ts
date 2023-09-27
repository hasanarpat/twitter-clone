export interface IComment{
    userId:string,
    tweetId:string,
    comment: {
        desc: "",
        media: [],
        comments: [],
        likes: [],
        retweets: [],
        impressions: [],
        username: "",
        userNickName: "",
        userPic: "",
      },
}