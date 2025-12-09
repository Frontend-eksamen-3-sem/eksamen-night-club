import TextComp from "./TextCom";
import Button from "../../../components/Button";
import Image from "next/image";
import { Suspense } from "react";
import BlogFallback from "@/assets/content-img/blog_full1.jpg";
import Pagination from "./Pagination";

const BlogCard = ({ page }) => {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <FetchBlogCard page={page} />
    </Suspense>
  );
};

export default BlogCard;

const FetchBlogCard = async ({ page = 1 }) => {
  const limit = 3; 
  const response = await fetch("http://localhost:4000/blogposts")
//     , {
//     cache: "no-store",
//   });
  const posts = await response.json();

  const start = (page - 1) * limit;
  const end = start + limit;

  const currentPosts = posts.slice(start, end);
  const totalPages = Math.ceil(posts.length / limit);

  return (
    <section className="grid gap-5 col-[full]">
      {currentPosts.map((post) => (
        <div className="grid md:grid-cols-2 gap-4" key={post.id}>
          <Image src={post.asset?.url || BlogFallback} alt={post.title} width={600} height={400} unoptimized />
          <div>
            <TextComp title={post.title} subtitle={post.author}>
              {post.content?.slice(0, 500)}...
            </TextComp>
            <Button>Read more</Button>
          </div>
        </div>
      ))}

      <div className="flex justify-center">
        <Pagination page={page} totalPages={totalPages} />
      </div>
    </section>
  );
};
