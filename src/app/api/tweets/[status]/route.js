import { NextResponse } from "next/server";
import { connect } from "@/utils/db";
import { Tweet } from "@/models/Tweet";

export const GET = async (request, { params }) => {
  const { status } = params;
  console.log(status);

  try {
    console.log("okey status works")
    await connect();
    const data = await Tweet.findById(status);
    console.log(data);
    await data.impressions.push("viewed");
    await data.save();
    console.log(data);
    return new NextResponse(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
