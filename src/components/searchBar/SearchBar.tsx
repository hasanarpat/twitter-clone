"use client";
import React, { ReactNode } from "react";
import { BsSearch } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";

const pseudoArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="sticky top-0 bg-black py-1 z-10">
      <div className="relative">
        <div
          className={`w-full flex items-center py-2 px-2 gap-4 text-base text-gray-400 bg-zinc-800 rounded-3xl ${
            open && "border-blue-500 border"
          }`}
        >
          <span className={`${open && "text-blue-500"}`}>
            <BsSearch />
          </span>
          <input
            type="text"
            placeholder="Search"
            /*obFocus to open search menu */
            /*and onBlur is a great feature to catch focus out and knowledge of clicked somewhere else to close menu */
            onFocus={() => setOpen((prev) => !prev)}
            onBlur={() => setOpen(false)}
            onChange={handleSearch}
            className="bg-transparent outline-none text-white w-full"
          />
          {open && (
            <span className={`${open && "text-blue-500"}`}>
              <AiFillCloseCircle />
            </span>
          )}
        </div>
        {open && (
          <div className=" z-10 bg-black border border-gray-400 max-h-[720px] overflow-y-scroll absolute w-full rounded-lg flex flex-col shadow-transparent-[50%]  shadow-md shadow-gray-500">
            {search.length > 0 && (
              <span className="px-4 py-2">Search for "{search}"</span>
            )}
            <hr />
            <div className="flex flex-col">
              {pseudoArr.map((i) => (
                <div key={i}>
                  <div className="flex gap-3 hover:bg-zinc-800 px-4 py-2">
                    <div className="relative w-10 h-10">
                      <Image
                        alt="profile picture"
                        src="https://images.pexels.com/photos/6625663/pexels-photo-6625663.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        fill
                        className=" object-cover rounded-full"
                      />
                    </div>
                    <div className="hidden xl:flex flex flex-col justify-between">
                      <span className=" font-bold text-base">Jane Smith</span>
                      <span className="text-gray-400 text-sm font-light">
                        @janesmith
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <h4 className="text-md text-blue-500 p-3 cursor-pointer hover:bg-zinc-900 rounded-b-xl">
                Search More
              </h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
