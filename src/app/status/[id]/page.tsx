import Comments from "@/components/Comments/Comments";
import BackArrow from "@/components/backArrow/BackArrow";
import WriteComment from "@/components/writeComment/WriteComment";
import { IComment } from "@/types/Comment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { FaRegComment, FaRegHeart, FaRetweet } from "react-icons/fa6";
import { MdMoreHoriz } from "react-icons/md";
import { RiBarChartLine } from "react-icons/ri";

const Status = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  let date;

  const getData = async () => {
    const res = await fetch(`http://localhost:3000/api/tweets/${id}`);
    const data = await res.json();
    return data;
  };

  const getComments = async () => {
    console.log("started to fetch");
    const response = await fetch(`http://localhost:3000/api/comments/${id}`);
    const data = await response.json();
    console.log(data + "commentsssssssssssssssssssssssss");
    return data;
  };

  const response = await getData();
  const comments = await getComments();

  //console.log(response.createdAt.toLocaleDateString())
  //Date format options
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <section
      key={response._id}
      className="w-full flex flex-col shadow-sm shadow-slate-100"
    >
      <section className="w-full flex p-3 items-center gap-8">
        <BackArrow />
        <span className="font-bold text-lg">Tweet</span>
      </section>
      <section className="flex flex-col items-start w-full justify-between  p-3">
        <div className="flex items-start w-full justify-between">
          <div className="flex items-start gap-4">
            {response.media ? (
              <div className="relative rounded-full w-[50px] h-[50px]">
                <Image
                  alt=""
                  src={
                    response.userPic
                      ? response.userPic
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
            <div className="flex flex-col items-start">
              <Link
                href={`/user/${response.userId}`}
                className="font-semibold text-md"
              >
                {response.username ? response.username : "Jane Doe"}
              </Link>
              <span className="text-sm text-gray-500">
                @{response.userNickName ? response.userNickName : "Jane Doe"}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-slate-100 text-black text-md font-medium rounded-3xl py-1 px-3">Follow</button>
          <MdMoreHoriz style={{color:"gray"}}/>
          </div>
        </div>
        <p className="mt-2 font-light text-md">{response.desc}</p>
      </section>

      {response.media && (
        <section className="w-full  flex items-center justify-start p-3 pt-0 pb-0">
          <div className="relative w-2/3 h-[420px] rounded-2xl">
            <Image
              alt=""
              src={response.media[0].url}
              fill
              className="rounded-2xl object-cover"
            />
          </div>
        </section>
      )}
      <section className="flex items-center gap-2 p-3">
        <span className="text-gray-400 font-extralight text-md">{(date = new Date(response.createdAt).toDateString())} ·</span>
        <span className="flex items-center gap-1">
          {response.impressions.length}
          <span className="text-gray-400 font-extralight text-md">Views</span>
        </span>
      </section>
      <hr className="mx-3 border-gray-700 border-[0.1px] h-0"/>
      <section className="p-3 pl-16  flex items-center w-full justify-between">
        <span className="text-lg text-gray-400 font-light flex items-center gap-2 cursor-pointer hover:text-sky-600">
          <span className="hover:shadow shadow-sky-400">
            <FaRegComment />
          </span>
          <span className="text-[12px]">{response.comments.length}</span>
        </span>
        <span className="text-lg text-gray-400 font-light flex items-center gap-2 cursor-pointer hover:text-green-400">
          <FaRetweet />
          <span className="text-[12px]">{response.retweets.length}</span>
        </span>
        <span className="text-lg text-gray-400 font-light flex items-center gap-2 cursor-pointer hover:text-rose-600">
          <FaRegHeart />
          <span className="text-[12px]">{response.likes.length}</span>
        </span>
        <span className="text-lg text-gray-400 font-light flex items-center gap-2 cursor-pointer hover:text-sky-600">
          <RiBarChartLine />
          <span className="text-[12px]">{response.impressions.length}</span>
        </span>
        <span className=" text-lg text-gray-400 font-light flex items-center gap-2 cursor-pointer hover:text-sky-600">
          <AiOutlineUpload />
        </span>
      </section>
      <hr className="mx-3 border-gray-700 border-[0.1px] h-0"/>
      {/*Comment wrriting section */}
      <WriteComment id={id} tweetOwner={response.userNickName}/>
      {/* Comments */}
      {comments.map((comment: IComment, i: number) => (
        <Comments key={i} comment={comment} />
      ))}
    </section>
  );
};

export default Status;
