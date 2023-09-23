import { Tweet } from "@/models/Tweet";
import { connect } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async(request) => {
  
    try {
        await connect()
        const tweets = await Tweet.find({})
        return new NextResponse(JSON.stringify(tweets),{
            status:200
        })

    } catch (error) {
        throw new Error(error,{status:500})
    }
};
export const POST = async (request, response) => {
  const body = await request.json();

  const newPost = new Tweet(body);
  
  console.log(newPost);
  try {
    await connect();
    await newPost.save();
    return new NextResponse("Tweet is flied", { status: 201 });
  } catch (error) {
    console.log(error)
    return new NextResponse(error, { status: 500 });
  }
};
