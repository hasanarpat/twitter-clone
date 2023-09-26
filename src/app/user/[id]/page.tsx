import BackArrow from "@/components/backArrow/BackArrow";
import Image from "next/image";
import React from "react";
import { TbMessage } from "react-icons/tb";
import { MdMoreHoriz, MdOutlineNotificationsActive } from "react-icons/md";
import { AiOutlineDisconnect } from "react-icons/ai";
import Link from "next/link";
import { CgCalendar } from "react-icons/cg";
import Tweets from "@/components/Tweet/Tweets";

const User = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  let date;

  const getData = async () => {
    const res = await fetch(`http://localhost:3000/api/profile/${id}`, {
      cache: "no-store",
    });
    const data = await res.json();
    console.log(data);
    return data;
  };

  const getTweets = async () => {
    const res = await fetch(`http://localhost:3000/api/tweets/user/${id}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  };

  const response = await getData();
  const tweets = await getTweets();

  console.log("--------------------------------------");
  console.log(tweets);

  return (
    <div className=" w-full shadow-sm shadow-white">
      {/*First Header */}
      <div className="w-full flex items-center gap-8 p-3">
        <BackArrow />
        <div className="flex flex-col">
          <h3 className=" first-letter:capitalize font-bold text-xl">
            {response.name}
          </h3>
          <span className="text-xs text-gray-400 font-light">
            {response.tweets.length} tweets
          </span>
        </div>
      </div>
      {/*Cover Photo */}
      <div className="relative w-full h-[170px]">
        <Image
          alt="cover"
          src="https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&w=400"
          className=" object-cover aspect-auto"
          fill
        />
      </div>
      {/*Profile picture and butoons */}
      <div className="flex items-center justify-end relative">
        <div className="absolute -top-20 left-5 rounded-full w-[140px] h-[140px]">
          <Image
            alt=""
            src="https://images.pexels.com/photos/18122447/pexels-photo-18122447/free-photo-of-deniz-kadin-duvar-sis.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            fill
            className="object-cover rounded-[50%] aspect-square"
          />
        </div>
        <div className="flex items-center justify-between w-1/2 gap-2 p-3 ">
          <span className="text-xl border border-r-gray-400 rounded-full hover:bg-gray-800 p-[8px] cursor-pointer">
            <MdMoreHoriz />
          </span>
          <span className="text-xl border border-r-gray-400 rounded-full hover:bg-gray-800 p-[8px] cursor-pointer">
            <TbMessage />
          </span>
          <span className="text-xl border border-r-gray-400 rounded-full hover:bg-gray-800 p-[8px] cursor-pointer">
            <MdOutlineNotificationsActive />
          </span>
          <button className="border border-r-gray-400 bg-gray-100 text-black rounded-full hover:border-gray-500 w-full  p-1 text-md font-semibold cursor-pointer">
            Follow
          </button>
        </div>
      </div>
      {/*Name Bio And Others */}
      <div className="flex flex-col justify-between items-start p-3 gap-2">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold  first-letter:capitalize">
            {response.name}
          </h3>
          <span className="tetx-sm text-gray-400 ">@{response.username}</span>
        </div>
        <p className="text-sm text-left">{response.bio}</p>
        <div className="flex items-center gap-2 text-sm">
          <AiOutlineDisconnect />
          <Link href={response.link} className=" text-blue-400 hover:underline">
            {response.link}
          </Link>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <CgCalendar />
          <span>Joined at {date=new Date(response.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center justify-start gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">
              <span className="text-white text-md">
                {response.following?.length}
              </span>{" "}
              Following
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">
              <span className="text-white text-md">
                {response.followers?.length}
              </span>{" "}
              Followers
            </span>
          </div>
        </div>
      </div>
      {/*Posts, media, likes and others */}
      <div className="flex items-center">
        <div className="w-1/4 items-center justfiy-center text-sm text-center hover:bg-zinc-950 transition-colors duration-75 ease-linear cursor-pointer text-white font-bold p-3 after:flex after:bg-blue-500 after:h-[4px] after:rounded-xl">
          Tweets
        </div>
        <div className="w-1/4 items-center justfiy-center text-sm text-center hover:bg-zinc-950 transition-colors duration-75 ease-linear cursor-pointer hover:text-white text-gray-400 font-bold p-3">
          Responses
        </div>
        <div className="w-1/4 items-center justfiy-center text-sm text-center hover:bg-zinc-950 transition-colors duration-75 ease-linear cursor-pointer hover:text-white text-gray-400 font-bold p-3">
          Media
        </div>
        <div className="w-1/4 items-center justfiy-center text-sm text-center hover:bg-zinc-950 transition-colors duration-75 ease-linear cursor-pointer hover:text-white text-gray-400 font-bold p-3">
          Likes
        </div>
      </div>
      {/*Tweets of user */}
      {tweets.map((item) => (
        <Tweets item={item} key={item._id} />
      ))}
    </div>
  );
};

export default User;
