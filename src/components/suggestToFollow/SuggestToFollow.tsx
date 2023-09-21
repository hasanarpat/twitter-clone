import Image from "next/image";
import React from "react";

const suggestions = [
  {
    img: "https://images.pexels.com/photos/18226128/pexels-photo-18226128/free-photo-of-moda-kadin-sokak-yurumek.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    name: "Jane Doe",
    username: "@janedoe",
  },
  {
    img: "https://images.pexels.com/photos/9632848/pexels-photo-9632848.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    name: "Jane Doe",
    username: "@janedoe",
  },
  {
    img: "https://images.pexels.com/photos/15777419/pexels-photo-15777419/free-photo-of-moda-adam-model-ayakta.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    name: "Jane Doe",
    username: "@janedoe",
  },
];

const SuggestToFollow = () => {
  return (
    <div className="bg-zinc-800 rounded-xl">
      <h3 className="text-lg font-bold p-3">Who To Follow</h3>
      {suggestions.map((suggestion, i) => (
        <div
          className="flex items-center justify-between gap-2 p-3 cursor-pointer hover:bg-zinc-900"
          key={i}
        >
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image
                alt="BLa Bla"
                src={suggestion.img}
                fill
                className=" object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col justify-between">
              <span className=" font-bold text-base">{suggestion.name}</span>
              <span className="text-gray-400 text-sm font-light">
                {suggestion.username}
              </span>
            </div>
          </div>
          <button className="bg-slate-100 rounded-3xl py-1 px-3 text-gray-800 text-sm font-bold">Follow</button>
        </div>
      ))}
      <h4 className="text-md text-blue-500 p-3 cursor-pointer hover:bg-zinc-900 rounded-b-xl">
        Show More
      </h4>
    </div>
  );
};

export default SuggestToFollow;
