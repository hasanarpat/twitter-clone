import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/utils/db";
import { Comment } from "@/models/Comment";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const id = params.id;
  console.log("-------------------------------------------------------")
  console.log(id);

  try {
    await connect();
    const data = await Comment.find({tweetId:id});
    console.log(id);
    return new NextResponse(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(`Something went wrong!`, { status: 500 });
  }
};

