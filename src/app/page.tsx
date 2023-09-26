"use client"
import CreatePost from "@/components/createPost/CreatePost";
import HomeFlow from "@/components/home/HomeFlow";
import PageFlow from "@/components/pageFlow/PageFlow";
import {useSession} from "next-auth/react"

export default function Home() {

  const { data: session, status } = useSession()
console.log("----------------------")
  console.log(session,status)
  return (
    <section className="mx-0 md:mx-3 shadow-sm shadow-white">
      <PageFlow />
      <CreatePost />
      <HomeFlow/>
    </section>
  );
}
