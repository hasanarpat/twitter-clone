import Image from "next/image";
import React from "react";
import CreatePost from "../createPost/CreatePost";
import Link from "next/link";

const WriteComment = ({ id, tweetOwner }: { id: string, tweetOwner:string}) => {
  return (
    <section className="w-full p-3">
      <div className="flex flex-col items-start">
        <p className="pl-16 text-gray-400 font-light text-[14px]">as response to user <Link href={`/user/${id}`} className="text-blue-500">@{tweetOwner}</Link></p>
        <CreatePost tweetOrComment={false} id={id}/>
      </div>
    </section>
  );
};

export default WriteComment;
