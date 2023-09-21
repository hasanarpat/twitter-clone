import Footer from "@/components/footer/Footer";
import LoginButton from "@/components/loginButton/LoginButton";
import SocialSignUp from "@/components/signUpSocials/SocialSignUp";
import Image from "next/image";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";

const list = [
  "About",
  "Yardım Merkezi",
  "Hizmet Şartları",
  "Gizlilik Politikası",
  "Çerez Politikası",
  "Imprint",
  "Erişilebilirlik",
  "Reklam bilgisi",
  "Blog",
  "Durum",
  "Kariyer",
  "Marka Kaynakları",
  "Reklam",
  "Pazarlama",
  "İşletmeler İçin X",
  "Geliştiriciler",
  "Dizin",
  "Ayarlar",
  "© 2023 X Corp.",
];

const Register = () => {
  return (
    <main className="min-h-screen p-9 flex flex-col justify-end gap-12">
      <div className="flex flex-col gap-16 w-full h-full md:w-2/3 lg:w-full lg:flex-row lg:items-center lg:justify-between mx-auto">
        <span className="text-5xl lg:hidden">
          <FaXTwitter />
        </span>
        <div className="relative hidden lg:block w-1/2 h-[400px]">
          <Image
            alt="X"
            src="/images/twitter-x-logo-white.png"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-16">
          <h1 className="text-4xl font-extrabold md:text-6xl lg:w-[70%]">
            What's going on right now
          </h1>
          <SocialSignUp />
          <div className="flex flex-col gap-2">
            <h4 className="font-bold mb-2">Already have an account?</h4>
            <LoginButton />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer list={[...list]} />
      </div>
    </main>
  );
};

export default Register;
