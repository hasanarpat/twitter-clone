import { Tweet } from "@/models/Tweet";
import { connect } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const data = await req.json();
  console.log(data);

  try {
    await connect();
    const tweet = await Tweet.findById(data.tweetId);
    await tweet.likes.push(data.userId);
    console.log(tweet.likes);
    await tweet.save();
    return new NextResponse(JSON.stringify(tweet), { status: 201 });
  } catch (error) {
    return new NextResponse("something went wrong", { status: 500 });
  }
};
