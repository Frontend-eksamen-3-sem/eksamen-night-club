import TextComp from "./TextCom";
import Button from "../../../components/Button";
import Image from "next/image";
import { Suspense } from "react";
import BlogFallback from "@/assets/content-img/blog_full1.jpg";
import Pagination from "./Pagination";

const BlogCard = ({ page }) => {
  return (
    <section className="grid grid-cols-subgrid col-start-1 col-end-6">
      <Suspense fallback={<div>Loading…</div>}>
        <FetchBlogCard page={page} />
      </Suspense>
    </section>
  );
};

export default BlogCard;

const FetchBlogCard = async ({ page = 1 }) => {
  const limit = 3;
  const response = await fetch("http://localhost:4000/blogposts");
  const posts = await response.json();

  const start = (page - 1) * limit;
  const end = start + limit;

  const currentPosts = posts.slice(start, end);
  const totalPages = Math.ceil(posts.length / limit);

  return (
    <div className="grid gap-12 col-[content]">
      {currentPosts.map((post, index) => {
        const isEven = index % 2 === 1;

        return (
          <div
            key={post.id}
            className="
              grid gap-12 
              md:grid-cols-2
            ">
            <Image
              src={post.asset?.url || BlogFallback}
              alt={post.title}
              width={600}
              height={400}
              unoptimized
              className={`
                w-full h-auto block
                ${isEven ? "md:order-2" : "md:order-1"}
                ${isEven ? "md:-mr-[max(0px,calc(50vw-600px))]" : ""}
                ${!isEven ? "md:-ml-[max(0px,calc(50vw-600px))]" : ""}
              `}/>

            <div
              className={`
                ${isEven ? "md:order-1" : "md:order-2"}
               grid items-center
                px-4 md:px-0 
              `}>
              <TextComp title={post.title} subtitle={post.author}>
                {post.content?.slice(0, 500)}...
              </TextComp>
              <Button>Read more</Button>
            </div>
          </div>
        );
      })}

      <div className="flex justify-center">
        <Pagination page={page} totalPages={totalPages} />
      </div>
    </div>
  );
};
