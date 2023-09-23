import CreatePost from "@/components/createPost/CreatePost";
import PageFlow from "@/components/pageFlow/PageFlow";

export default function Home() {
  return (
    <section className="mx-3 shadow-sm shadow-white">
      <PageFlow/>
      <CreatePost/>
    </section>
  );
}
