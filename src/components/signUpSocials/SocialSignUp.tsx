import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsApple } from "react-icons/bs";

const SocialSignUp = () => {
  return (
    <div className="flex flex-col gap-2 w-2/3 md:w-1/3 lg:w-1/2">
      <h2 className="font-extrabold text-2xl mb-4 md:text-3xl">
        Register now.
      </h2>
      <button className="flex items-center justify-center text-lg font-medium gap-4 bg-white text-black rounded-3xl py-1 ">
        <AiFillGoogleCircle />
        SignUp With Google
      </button>
      <button className="flex items-center justify-center text-lg font-medium gap-4 bg-white text-black rounded-3xl py-1 ">
        <BsApple />
        SignUp With Apple
      </button>
      <span className="text-center text-sm flex items-center justify-center gap-8">
        <hr className="inline-block w-1/3 text-xs" />
        or
        <hr className="inline-block w-1/3 text-xs" />
      </span>
      <button className="bg-blue-500 text-white text-md font-medium rounded-3xl py-2">
        Register an account
      </button>
      <span className="text-[11px] text-gray-400">
        By signing up, you agree to the{" "}
        <b className="text-blue-500">Terms of Service</b> and{" "}
        <b className="text-blue-500">Privacy Policy</b>, including{" "}
        <b className="text-blue-500">Cookie Use</b>.
      </span>
    </div>
  );
};

export default SocialSignUp;
