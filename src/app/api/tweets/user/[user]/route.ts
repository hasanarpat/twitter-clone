import { NextRequest, NextResponse } from "next/server"
import { connect} from "@/utils/db"
import { Tweet } from "@/models/Tweet"

export const GET = async (request: NextRequest, { params }: { params: { user: string } })=>{
    
   const user = params.user
   console.log(user + "from backend")

   try {
    await connect()
    const data = await Tweet.find({userId:user})
    return new NextResponse(JSON.stringify(data.reverse()),{status:200})
   } catch (error) {
    return new NextResponse(`Something went wrong!`,{status:500})
   }
}