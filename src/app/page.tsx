import CreatePost from "@/components/createPost/CreatePost";
import HomeFlow from "@/components/home/HomeFlow";
import PageFlow from "@/components/pageFlow/PageFlow";

export default function Home() {
  return (
    <section className="mx-0 md:mx-3 shadow-sm shadow-white">
      {/*Page Flow changes to timeline data as featured or followings data*/}
      <PageFlow />
      {/*Create a spesific tweet*/}
      <CreatePost id="" tweetOrComment={true} />
      {/*All tweets to show goes here*/}
      <HomeFlow />
    </section>
  );
}
