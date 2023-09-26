"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const BackArrow = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="flex items-center justify-center text-xl">
      <BiArrowBack />
    </button>
  );
};

export default BackArrow;
