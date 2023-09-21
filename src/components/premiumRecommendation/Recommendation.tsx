import React from "react";

const Recommendation = () => {
  return (
    <div className="flex flex-col gap-2 items-start bg-zinc-800 p-3 rounded-xl font-bold">
      <h2 className="text-lg">Subscribe To Premimum</h2>
      <p className="text-sm">
        Subscribe to unlock new features and earn a share of ad revenue if
        you're eligible.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 transition-colors duration-75 ease-linear py-2 px-3 rounded-3xl text-sm">Subscribe</button>
    </div>
  );
};

export default Recommendation;
