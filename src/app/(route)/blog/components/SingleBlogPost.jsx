import Image from "next/image";
import TextComp from "../components/TextCom";

const SingleBlogPost = async ({ params }) => {
  const { id } = await params;
  // const response = await fetch(`http://localhost:4000/blogposts/${id}`)
  const response = await fetch(`http://localhost:4000/blogposts/${id}/?embed=comments`, { cache: "no-store" });
  const post = await response.json();

  const commentCount = post.comments?.length ?? 0;
  const postedDate = new Date(post.date).toLocaleDateString("da-DK");

  return (
    <div className="grid col-[content]">
      <Image src={post.asset?.url} alt={post.title} width={800} height={400} unoptimized className="w-full h-auto object-cover mb-8" />
      <TextComp title={post.title} subtitle={post.author} commentCount={commentCount} posted={postedDate}>
        {post.content}
      </TextComp>
    </div>
  );
};

export default SingleBlogPost;
