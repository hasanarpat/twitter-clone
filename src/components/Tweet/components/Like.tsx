"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import {FcLike} from "react-icons/fc"

const Like = ({ likes, tweetId }: { likes: string[]; tweetId: string }) => {

  const { data: session } = useSession();

  const userId = session?.user?.userId
    ? session?.user.userId
    : session?.user.email;

  const handleLike = async () => {
    const response = await fetch(
      `http://localhost:3000/api/tweets/likes/addLike`,
      {
        method: "PUT",
        mode: "cors",
        body: JSON.stringify({userId,tweetId}),
      }
    );
    console.log(await response.json());
  };

  const handleUnlike = async ()=>{
    //will be completed
    const response = await fetch(
      `http://localhost:3000/api/tweets/likes/dislike`,
      {
        method: "PUT",
        mode: "cors",
        body: JSON.stringify({userId,tweetId}),
      }
    );
    console.log(await response.json());
  }

if(!likes.includes(userId)){
  return (
    <span
      onClick={handleLike}
      className="text-lg text-gray-400 font-light flex items-center gap-2 cursor-pointer hover:text-rose-600"
    >
      <FaRegHeart />
      <span className="text-[12px]">{likes.length}</span>
    </span>
  );
} else {
  return (
    <span
      onClick={handleUnlike}
      className="text-lg text-gray-400 font-light flex items-center gap-2 cursor-pointer hover:text-gray-400"
    >
      <FcLike />
      <span className="text-[12px]">{likes.length}</span>
    </span>
  );
}
 
};

export default Like;
