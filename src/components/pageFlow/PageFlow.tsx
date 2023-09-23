"use client"
import React, { useState } from "react";

const PageFlow = () => {
  const [flow, setFlow] = useState("forYou");

  return (
    <div className="border-b-[1px] border-gray-200">
      <h2 className="p-3 font-bold text-lg mb-4">Homepage</h2>
      <div className="w-full flex transition-all duration-100 ease-linear">
        {flow === "forYou" ? (
          <div  className="w-1/2 cursor-pointer hover:bg-zinc-900 p-3 font-bold text-sm text-center flex flex-col items-center relative">
            For you{" "}
            <hr className="w-1/3 absolute bottom-0 border-[3px] border-blue-500 rounded-md" />
          </div>
        ) : (
          <div onClick={()=>setFlow("forYou")} className="w-1/2 cursor-pointer hover:bg-zinc-900 p-3 font-bold text-sm text-center">
            <span className="opacity-25">For you</span>
          </div>
        )}
        {flow === "following" ? (
          <div className="w-1/2 cursor-pointer hover:bg-zinc-900 p-3 font-bold text-sm  text-center flex flex-col items-center relative">
            Following
            <hr className="w-1/3 absolute bottom-0 border-[3px] border-blue-500 rounded-md" />
          </div>
        ) : (
          <div onClick={()=>setFlow("following")} className="w-1/2 cursor-pointer hover:bg-zinc-900 p-3 font-bold text-sm  text-center">
            <span className="opacity-25">Following</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageFlow;
