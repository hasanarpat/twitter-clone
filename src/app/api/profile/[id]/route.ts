import { NextRequest, NextResponse } from "next/server"
import { connect} from "@/utils/db"
import { User } from "@/models/User"

export const GET = async (request: NextRequest, { params }: { params: { id: string } })=>{
    
   const id = params.id
   console.log(id)

    try {
        await connect()
        const data =await User.findById(id)
        console.log(id)
        return new NextResponse(JSON.stringify(data),{
            status:200
        })
    } catch (error) {
        return new NextResponse(`Something went wrong!`,{status:500})
    }
}