import { Suspense } from "react";
import RecentBlogCard from "./RecentBlogCard";
import Title from "../Title";

const RecentBlog = () => {
  return (
    <>
      <Title>RECENT BLOG</Title>
      <Suspense fallback={<div className="p-4">Loading blog…</div>}>
        <FetchBlog />
      </Suspense>
    </>
  );
};

export default RecentBlog;

const FetchBlog = async () => {
  "use server";
  const response = await fetch(`http://localhost:4000/blogposts/?embed=comments`, { cache: "no-store" });
  const blog = await response.json();
  console.log(blog);

  const posts = blog.slice(-3);

  return (
    <>
      <RecentBlogCard blog={posts} />;
    </>
  );
};
