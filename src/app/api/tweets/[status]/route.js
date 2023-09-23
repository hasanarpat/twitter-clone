import { NextResponse } from "next/server"
import { connect} from "@/utils/db"
import { Tweet} from "@/models/Tweet"

export const GET = async (request,response)=>{
    
    const url = new URL(request.url)

    const status = url.searchParams.get("status")
    console.log("status"+status)

    try {
        await connect()
        const data =await Tweet.findById(status)
        console.log(status)
        return new NextResponse(JSON.stringify(data),{
            status:200
        })
    } catch (error) {
        return new NextResponse(error,{status:500})
    }
}