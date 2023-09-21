import React from "react";

const Footer = () => {
  return (
    <footer className="font-light text-xs text-gray-400 p-3">
      <ul className="flex flex-wrap gap-x-4 gap-y-2 ">
        <li className="cursor-pointer hover:underline mr-4">Hizmet Şartları</li>
        <li className="cursor-pointer hover:underline mr-4">
          Gizlilik Politikası
        </li>
        <li className="cursor-pointer hover:underline mr-4">
          Çerez Politikası
        </li>
        <li className="cursor-pointer hover:underline mr-4">Imprint</li>
        <li className="cursor-pointer hover:underline mr-4">Erişilebilirlik</li>
        <li className="cursor-pointer hover:underline mr-4">Reklam bilgisi</li>
        <li className="cursor-pointer hover:underline mr-4">Daha fazla</li>
        <li className="cursor-pointer hover:underline">© 2023 X Corp.</li>
      </ul>
    </footer>
  );
};

export default Footer;
