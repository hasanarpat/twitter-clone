import React from "react";
import { CgMore, CgMoreO } from "react-icons/cg";

const topics = [
  {
    header: "Trending Topics",
    topic: "GrindCore - Turkish Grind",
    interactions: "12 B posts",
  },
  {
    header: "Sports",
    topic: "NBA",
    interactions: "12 B posts",
  },
  {
    header: "Sports",
    topic: "Yağlı Güreş",
    interactions: "12 B posts",
  },
  {
    header: "On Topic",
    topic: "Berserk",
    interactions: "12 B posts",
  },
  {
    header: "Trending Topics",
    topic: "TypeScript",
    interactions: "12 B posts",
  },
  {
    header: "Trending Topics",
    topic: "Neon Genesis: Evangelion",
    interactions: "12 B posts",
  },
  {
    header: "Sports",
    topic: "MMA K.I.N.G.",
    interactions: "12 B posts",
  },
  {
    header: "Trending Topics",
    topic: "Marduk",
    interactions: "12 B posts",
  },
  {
    header: "M.U.S.I.C.",
    topic: "Cattle Decapitation",
    interactions: "12 B posts",
  },
  {
    header: "Trending Topics",
    topic: "Nohut Dürüm",
    interactions: "12 B posts",
  },
];

const Topics = () => {
  return (
    <div className="bg-zinc-800 rounded-xl">
      <h2 className="text-lg font-bold mb-4 px-3 pt-2 pb-0">
        Topics That May Interest You
      </h2>
      {topics.map((topic, i) => (
        <div
          key={i}
          className=" first-of-type:pt-0 p-3 flex items-center justify-between py-2 cursor-pointer hover:bg-zinc-900"
        >
          <div className="flex flex-col">
            <span className="text-xs font-light text-gray-400">{topic.header}</span>
            <h4 className="text-md font-bold">{topic.topic}</h4>
            <span className="text-xs font-light text-gray-400">{topic.interactions}</span>
          </div>
          <span
            title="More"
            className="text-gray-500 text-xl hover:bg-slate-800 hover:text-blue-500 rounded-3xl p-2"
          >
            <CgMore />
          </span>
        </div>
      ))}
        <h4 className="text-md text-blue-500 p-3 cursor-pointer hover:bg-zinc-900 rounded-b-xl">Show More</h4>
    </div>
  );
};

export default Topics;
