import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BiSolidHomeCircle } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { RiNotification2Line } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoMdListBox } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CgMoreO } from "react-icons/cg";
import { FaFeatherAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    logo: <FaXTwitter />,
    title: "",
    href: "/",
  },
  {
    logo: <BiSolidHomeCircle />,
    title: "Homepage",
    href: "/",
  },
  {
    logo: <BsSearch />,
    title: "Explore",
    href: "/explore",
  },
  {
    logo: <RiNotification2Line />,
    title: "Notifications",
    href: "/notifications",
  },
  {
    logo: <BiMessageSquareDetail />,
    title: "Messages",
    href: "/messages",
  },
  {
    logo: <IoMdListBox />,
    title: "Lists",
    href: "/lists",
  },
  {
    logo: <FaRegBookmark />,
    title: "Bookmarks",
    href: "/bookmarks",
  },
  {
    logo: <FaXTwitter />,
    title: "Verified",
    href: "#",
  },
  {
    logo: <CgProfile />,
    title: "Profile",
    href: "/profile",
  },
  {
    logo: <CgMoreO />,
    title: "More",
    href: "#",
  },
];

const LeftBar = () => {
  return (
    <nav className="flex flex-col w-[12%] xl:w-[20%] h-screen justify-between items-center  sticky top-0 left-0">
      <section className="flex flex-col gap-3 w-[85%] items-start">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className=" flex items-center p-2 rounded-3xl gap-4 justify-center  xl:justify-normal  font-medium hover:bg-zinc-800"
          >
            <span className="text-[26px]">{link.logo}</span>
            <span className="hidden xl:flex text-lg">{link.title}</span>
          </Link>
        ))}
        <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 transition-colors duration-75 ease-linear rounded-full xl:rounded-3xl w-[55px] xl:w-full h-[55px] xl:h-auto xl:px-8 xl:py-3 text-center font-bold text-lg">
          <span className="xl:hidden">
            <FaFeatherAlt />
          </span>
          <span className="hidden xl:flex">Send</span>
        </button>
      </section>
      <section className="w-full h-12 flex items-center xl:w-[85%] justify-center xl:justify-between xl:px-2 rounded-3xl hover:bg-zinc-800 cursor-pointer">
        <div className="flex items-center gap-2">
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
            <span className="text-gray-400 text-sm font-light">@janesmith</span>
          </div>
        </div>
        <span className="hidden xl:flex text-xl">
          <CgMoreO />
        </span>
      </section>
    </nav>
  );
};

export default LeftBar;
