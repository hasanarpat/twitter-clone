export interface IUser {
    id:number,
    name:string,
    username:string,
    followers:Array<Number>,
    following:Array<Number>,
    tweets:Array<Number>,
    bio:string,
    link:string,
    birdthDay:Date,
    profilePic:string
}
