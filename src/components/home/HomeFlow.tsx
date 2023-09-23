"use client";
import { ITweet } from "@/types/Tweet";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import { FaRegComment, FaRegHeart, FaHeart } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { RiBarChartLine } from "react-icons/ri";
import { AiOutlineUpload } from "react-icons/ai";

const HomeFlow = () => {
  const [data, setData] = useState<ITweet[] | null>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3000/api/tweets");
      const data = await response.json();
      setData(data);
    };
    getData();
    console.log(data);
  }, []);

  if (data) {
    return (
      <div className="flex flex-col">
        {data &&
          data.map((item, i) => (
            <div
              key={i}
              className="w-full flex flex-col p-3 shadow-sm shadow-slate-100"
            >
              <div className="flex flex-col items-start w-full justify-between mb-4">
                <div className="flex items-start w-full justify-between">
                  <div className="flex items-start gap-4">
                    {item.media ? (
                      <div className="relative rounded-full w-[50px] h-[50px]">
                        <Image
                          alt=""
                          src={item.media[0].url}
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
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-md">Jane Doe</span>
                      <span className="text-sm text-gray-500">
                        @janedoex · 1 hr
                      </span>
                    </div>
                  </div>
                  <MdMoreHoriz />
                </div>
                <p className="pl-16 font-light text-md">{item.desc}</p>
              </div>

              {item.media && (
                <div className="w-full  flex items-center justify-start pl-16">
                  <div className="relative w-2/3 h-[420px] rounded-2xl">
                    <Image
                      alt=""
                      src={item.media[0].url}
                      fill
                      className="rounded-2xl object-cover"
                    />
                  </div>
                </div>
              )}
              <div className="p-3 pl-16  flex items-center w-full justify-between">
                <span className="text-lg text-gray-400 font-light flex items-center gap-2 cursor-pointer hover:text-sky-600">
                  <span className="hover:shadow shadow-sky-400"><FaRegComment /></span>
                  <span className="text-[12px]">12</span>
                </span>
                <span className="text-lg text-gray-400 font-light flex items-center gap-2 cursor-pointer hover:text-green-400">
                  <FaRetweet />
                  <span className="text-[12px]">12</span>
                </span>
                <span className="text-lg text-gray-400 font-light flex items-center gap-2 cursor-pointer hover:text-rose-600">
                  <FaRegHeart />
                  <span className="text-[12px]">12</span>
                </span>
                <span className="text-lg text-gray-400 font-light flex items-center gap-2 cursor-pointer hover:text-sky-600">
                  <RiBarChartLine />
                  <span className="text-[12px]">12</span>
                </span>
                <span className=" text-lg text-gray-400 font-light flex items-center gap-2 cursor-pointer hover:text-sky-600">
                  <AiOutlineUpload />
                </span>
              </div>
            </div>
          ))}
      </div>
    );
  } else {
    return <h4>Loading...</h4>;
  }
};

export default HomeFlow;
