"use client";
import { IComment } from "@/types/Comment";
import { ITweet } from "@/types/Tweet";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineGif, AiOutlineSmile } from "react-icons/ai";
import { BiSolidCalendarHeart } from "react-icons/bi";
import { CgOptions } from "react-icons/cg";
import { CiImageOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const CreatePost = ({
  id,
  tweetOrComment,
}: {
  id: string;
  tweetOrComment: boolean;
}) => {
  const { data: session, status } = useSession();
  console.log(session);

  const initialState: ITweet = {
    userId: 0,
    desc: "",
    media: [],
    comments: [],
    likes: [],
    retweets: [],
    impressions: [],
    username: "",
    userNickName: "",
    userPic: "",
  };

  const initialStateComment: IComment = {
    userId: "",
    tweetId: "",
    comment: {
      desc: "",
      media: [],
      comments: [],
      likes: [],
      retweets: [],
      impressions: [],
      username: "",
      userNickName: "",
      userPic: "",
    },
  };

  const [disable, setDisable] = useState(true);
  const [openImgInput, setOpenImgInput] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  const [tweet, setTweet] = useState<ITweet>(initialState);
  const [comment, setComment] = useState<IComment>(initialStateComment);

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (tweetOrComment) {
      if (tweet.desc.length > 0) setDisable(false);
      else {
        setDisable(true);
      }
      setTweet((prev) => {
        return {
          ...prev,
          desc: e.target.value,
        };
      });
    } else {
      if (comment.comment.desc.length > 0) setDisable(false);
      else {
        setDisable(true);
      }
      setComment((prev) => {
        return {
          ...prev,
          comment: {
            ...prev.comment,
            desc: e.target.value,
          },
        };
      });
      console.log(comment.comment.desc);
    }
  };

  useEffect(() => {
    if (status == "authenticated") {
      setTweet((prev) => {
        return {
          ...prev,
          username: session?.user.name,
          userNickName: session?.user.email,
          userPic: session?.user.image,
        };
      });

      if (!tweetOrComment) {
        console.log("it is a comment!!")
        setComment((prev) => {
          return {
            ...prev,
            tweetId: id,
            userId: session.user.userId
              ? session.user.userId
              : session.user.name,
            comment: {
              ...prev.comment,
              username: session?.user.name,
              userNickName: session?.user.email,
              userPic: session?.user.image,
            },
          };
        });
        console.log("commennnnttttttttttttttttttt")
        console.log(comment.comment);
      }
    }
    console.log(tweet + "------------tweet-------");
  }, []);

  const postTweet = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/tweets", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(tweet),
    });
  };

  const postComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(tweet),
    });
  };

  const handleImageUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (tweetOrComment) {
      setImgUrl("");
      setImgUrl(e.target.value);
      console.log(imgUrl);
      if (tweet?.media && tweet.media?.length > 0) {
        tweet.media[0].url = imgUrl;
      } else {
        tweet.media?.push({ url: imgUrl });
      }
    } else {
      setImgUrl("");
      setImgUrl(e.target.value);
      console.log(imgUrl);
      if (comment.comment?.media && comment.comment.media?.length > 0) {
        comment.comment.media[0].url = imgUrl;
      } else {
        comment.comment.media?.push({ url: imgUrl });
      }
    }
  };

  return (
    <section className="border-b-[1px] border-gray-200 p-3 w-full">
      <form
        className="flex flex-col items-center"
        onSubmit={tweetOrComment ? postTweet : postComment}
      >
        <div className="flex items-start w-full gap-x-4">
          <div className="w-[50px] h-[50px] rounded-full relative">
            <Link href="/profile">
              <Image
                alt="profile"
                src={
                  status == "authenticated" && session.user?.image
                    ? session.user?.image
                    : "https://images.pexels.com/photos/18180323/pexels-photo-18180323/free-photo-of-kent-sanat-bina-insaat.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                }
                objectFit="cover"
                className="rounded-full"
                fill
              />
            </Link>
          </div>
          <textarea
            placeholder={
              tweetOrComment ? "What's going on?" : "Send your response"
            }
            maxLength={160}
            autoFocus
            onChange={handleText}
            className="bg-transparent block w-full overflow-hidden border-none outline-none text-lg resize min-h-fit"
          ></textarea>
        </div>
        <div className="w-full flex flex-col pl-16 ">
          {
            // PSEUDO DESIGN FOR IMAGE UPLOADING
          }
          {openImgInput && (
            <input
              type="text"
              placeholder="Paste Image URL"
              value={imgUrl}
              onChange={handleImageUrl}
              className="bg-transparent"
            />
          )}
          <div className="flex w-full justify-between items-center">
            <div className="text-lg flex items-center gap-3 text-sky-400">
              <span
                className="cursor-pointer text-2xl"
                onClick={() => setOpenImgInput((prev) => !prev)}
              >
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
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white text-md font-medium rounded-3xl px-3 py-1 disabled:opacity-80"
            >
              {tweetOrComment ? "Send" : "Response"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
