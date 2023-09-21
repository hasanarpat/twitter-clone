import React from "react";

const Footer = ({ list }: {list:string[]}) => {
  return (
    <footer className="font-light text-xs text-gray-400 p-3">
      <ul className="flex flex-wrap gap-x-4 gap-y-2 ">
        {list.map((item, i) => (
          <li
            className="cursor-pointer hover:underline mr-4 last-of-type:mr-0"
            key={i}
          >
            {list[i]}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
