import { NextRequest, NextResponse } from "next/server"
import { connect} from "@/utils/db"
import { Comment } from "@/models/Comment"

export const GET = async (request: NextRequest, { params }: { params: { id: string } })=>{
    
   const tweetID = params.id
   console.log(tweetID + "from backend")

   try {
    await connect()
    const data = await Comment.find({tweetId:tweetID})
    return new NextResponse(JSON.stringify(data.reverse()),{status:200})
   } catch (error) {
    return new NextResponse(`Something went wrong!`,{status:500})
   }
}