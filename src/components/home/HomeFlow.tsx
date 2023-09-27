"use client";
import { ITweet } from "@/types/Tweet";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import { FaRegComment, FaRegHeart, FaHeart } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { RiBarChartLine } from "react-icons/ri";
import { AiOutlineUpload } from "react-icons/ai";
import Link from "next/link";
import Tweets from "../Tweet/Tweets";

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
  let date;

  if (data) {
    return (
      <div className="flex flex-col">
        {data &&
          data.map((item, i) => (
            <Tweets key={i} item={item}/>
          ))}
      </div>
    );
  } else {
    return <h4>Loading...</h4>;
  }
};

export default HomeFlow;
