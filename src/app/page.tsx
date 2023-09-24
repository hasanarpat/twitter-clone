"use client"
import CreatePost from "@/components/createPost/CreatePost";
import HomeFlow from "@/components/home/HomeFlow";
import PageFlow from "@/components/pageFlow/PageFlow";
import { ITweet } from "@/types/Tweet"
import {useSession} from "next-auth/react"
import { useRouter } from "next/navigation";

export default function Home() {

  const { data: session, status } = useSession()
  const router = useRouter()
console.log("----------------------")
  console.log(session,status)
  if(status=="unauthenticated")return router.push("/auth/register")
  return (
    <section className="mx-3 shadow-sm shadow-white">
      <PageFlow />
      <CreatePost />
      <HomeFlow/>
    </section>
  );
}
