import { ITweet } from "@/types/Tweet";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { FaRegComment, FaRegHeart, FaRetweet } from "react-icons/fa6";
import { MdMoreHoriz } from "react-icons/md";
import { RiBarChartLine } from "react-icons/ri";
import Like from "./components/Like";

const Tweets = ({ item }: { item: ITweet }) => {
  let date;
  return (
    <div className="w-full flex flex-col p-3 shadow-sm shadow-slate-100">
      <div className="flex flex-col items-start w-full justify-between mb-4">
        <div className="flex items-start w-full justify-between">
          <div className="flex items-start gap-4">
            {item.media ? (
              <div className="relative rounded-full w-[50px] h-[50px]">
                <Image
                  alt=""
                  src={
                    item.userPic
                      ? item.userPic
                      : "https://images.pexels.com/photos/17311759/pexels-photo-17311759/free-photo-of-siyah-ve-beyaz-el-su-kol-saati.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  }
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            ) : (
              <div className="relative rounded-full w-[50px] h-[50px]">
                <Image
                  alt=""
                  src="https://images.pexels.com/photos/16369771/pexels-photo-16369771/free-photo-of-bogurtlenler.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            )}
            <Link
              href={`/status/${item._id}`}
              className="flex items-center gap-2"
            >
              <span className="font-semibold text-md">
                {item.username ? item.username : "Jane Doe"}
              </span>
              <span className="text-sm text-gray-500">
                @{item.userNickName ? item.userNickName : "Jane Doe"} ·
                <span> {(date = new Date(item.createdAt).toDateString())}</span>
              </span>
            </Link>
          </div>
          <MdMoreHoriz />
        </div>
        <p className="pl-16 font-light text-md">{item.desc}</p>
      </div>

      {item.media && (
        <div className="w-full  flex items-center justify-start pl-16">
          {item.media?.map((m, i) => (
            <div className="relative w-2/3 h-[420px] rounded-2xl" key={i}>
              <Image
                alt=""
                src={m.url}
                fill
                className="rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>
      )}
      <div className="p-3 pl-16  flex items-center w-full justify-between">
        <span className="text-lg text-gray-400 font-light flex items-center gap-2 cursor-pointer hover:text-sky-600">
          <Link 
              href={`/status/${item._id}`} className="hover:shadow shadow-sky-400">
            <FaRegComment />
          </Link>
          <span className="text-[12px]">{item.comments.length}</span>
        </span>
        <span className="text-lg text-gray-400 font-light flex items-center gap-2 cursor-pointer hover:text-green-400">
          <FaRetweet />
          <span className="text-[12px]">{item.retweets.length}</span>
        </span>
        <Like likes={item.likes} tweetId={item._id}/>
        <span className="text-lg text-gray-400 font-light flex items-center gap-2 cursor-pointer hover:text-sky-600">
          <RiBarChartLine />
          <span className="text-[12px]">{item.impressions.length}</span>
        </span>
        <span className=" text-lg text-gray-400 font-light flex items-center gap-2 cursor-pointer hover:text-sky-600">
          <AiOutlineUpload />
        </span>
      </div>
    </div>
  );
};

export default Tweets;
