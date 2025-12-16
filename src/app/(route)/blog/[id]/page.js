import Header from "../../../components/Header";
import Hero from "../../../components/Hero";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Footerbg from "@/assets/bg/footerbg.jpg";
import SingleBlogPost from "../components/SingleBlogPost";
import Blogform from "../components/BlogForm";
import CommentCard from "../components/CommentCard";
import { Suspense } from "react";

export default async function BlogPosts({ params }) {
  const { id } = await params;
  return (
    <>
      <header className="grid grid-cols-subgrid col-[full]">
        <Header />
        <section className="grid col-[full] grid-cols-subgrid">
          <Image src={Footerbg} alt="Footerbg" className="col-span-full row-span-full w-full object-cover z-0 opacity-10 h-30" />
          <div className="grid col-[content] row-start-1">
            <Hero>BLOG POST</Hero>
          </div>
        </section>
      </header>

      <main className="">
        <Suspense fallback={<div className="p-4">Loading blog post…</div>}>
          <SingleBlogPost params={params} />
          <CommentCard params={params} />
        </Suspense>
        <Blogform blogpostId={id} />
      </main>

      <footer className="grid col-[full] grid-cols-subgrid">
        <Image src={Footerbg} alt="Footerbg" className="col-span-full row-span-full w-full h-full object-cover z-0 opacity-10 " />
        <div className="grid col-[content] row-start-1 justify-center">
          <Footer />
        </div>
      </footer>
    </>
  );
}
