"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const ProfileOptions = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status == "unauthenticated") router.push("/auth/register");

  return (
    <Link href="/profile" className="flex items-center gap-2">
      <div className="relative w-10 h-10">
        <Image
          alt="profile picture"
          src={
            status == "authenticated" ? session.user?.image
              : session?.user?.image
          }
          fill
          className=" object-cover rounded-full"
        />
      </div>
      <div className="hidden xl:flex flex-col justify-between">
        <span className=" font-bold text-base first-letter:capitalize even:first-letter:capitalize">
          {status == "authenticated" && session.user?.name
            ? session.user?.name
            : "Jane Smith"}
        </span>
        <span className="text-gray-400 text-xs font-light">
          @
          {status == "authenticated" && session.user?.email
            ? session.user?.email
            : "Jane Smith"}
        </span>
      </div>
    </Link>
  );
};

export default ProfileOptions;
