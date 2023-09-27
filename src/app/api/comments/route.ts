import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/utils/db";
import { Comment } from "@/models/Comment";

export const POST = async (request: NextRequest) => {
  const comment = await request.json();

  const newComment = new Comment(comment);
  console.log("-------------------------------------------------------");
  console.log(newComment);

  try {
    await connect();
    await newComment.save();
    return new NextResponse("comment is flied", {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(`Something went wrong!`, { status: 500 });
  }
};
