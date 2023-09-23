import CreatePost from "@/components/createPost/CreatePost";
import HomeFlow from "@/components/home/HomeFlow";
import PageFlow from "@/components/pageFlow/PageFlow";
import { ITweet } from "@/types/Tweet";

export default async function Home() {

  return (
    <section className="mx-3 shadow-sm shadow-white">
      <PageFlow />
      <CreatePost />
      <HomeFlow/>
    </section>
  );
}
