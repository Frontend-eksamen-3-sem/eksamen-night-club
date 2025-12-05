import TextComp from "./TextCom";
import Button from "../../../components/Button";
import Image from "next/image";
import { Suspense } from "react";
// import blogImage from "@/assets/blog/blog1.jpg";

const BlogCard = () => {
  <Suspense fallback={<div className="p-4">Loading blog posts…</div>}>
    <FetchBlogCard />;
  </Suspense>;
};

export default BlogCard;

const FetchBlogCard = async () => {
  "use server";
  const response = await fetch("http://localhost:4000/blogposts");
  const posts = await response.json();

  const recent = posts.slice(0, 2);

  return (
    <section className="grid">
      {recent.map((post) => (
        <div className="grid md:grid-cols-2 gap-4 " key={post.id}>
          <Image src={post.thumbnail} alt={post.title} width={600} height={400} />
          <div>
            <TextComp title="Overskrift" subtitle={post}>
              {post.content?.slice(0, 200)}...
            </TextComp>
            <Button>Read more</Button>
          </div>
        </div>
      ))}
    </section>
  );
};
