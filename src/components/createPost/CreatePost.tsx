"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { AiOutlineGif, AiOutlineSmile } from "react-icons/ai";
import { BiSolidCalendarHeart } from "react-icons/bi";
import { CgOptions } from "react-icons/cg";
import { CiImageOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const CreatePost = () => {
  const [disable, setDisable] = useState(true);

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDisable(false);
  };

  return (
    <section className="border-b-[1px] border-gray-200 p-3">
      <div className="flex flex-col items-center">
        <div className="flex items-start w-full gap-x-4">
          <div className="w-[50px] h-[50px] rounded-full relative">
            <Image
              alt="profile"
              src="https://images.pexels.com/photos/18180323/pexels-photo-18180323/free-photo-of-kent-sanat-bina-insaat.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              objectFit="cover"
              className="rounded-full"
              fill
            />
          </div>
          <textarea
            placeholder="What's going on?"
            maxLength={160}
            autoFocus
            onChange={handleText}
            className="bg-transparent block w-full overflow-hidden border-none outline-none text-lg resize min-h-fit"
          ></textarea>
        </div>
        <div className="w-full flex flex-col pl-16 ">
          <hr className="w-full pl-16 my-2" />
          <div className="flex w-full justify-between items-center">
            <div className="text-lg flex items-center gap-3 text-blue-500">
              <span className="cursor-pointer">
                <CiImageOn />{" "}
              </span>
              <span className="cursor-pointer">
                <AiOutlineGif />
              </span>
              <span className="cursor-pointer">
                <CgOptions />
              </span>
              <span className="cursor-pointer">
                <AiOutlineSmile />
              </span>
              <span className="cursor-pointer">
                <BiSolidCalendarHeart />
              </span>
              <span className="cursor-pointer">
                <FaLocationDot />
              </span>
            </div>
            <button
              disabled={disable ? true : false}
              className="bg-blue-500 hover:bg-blue-600 text-white text-md font-medium rounded-3xl px-3 py-1 disabled:opacity-80"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePost;
