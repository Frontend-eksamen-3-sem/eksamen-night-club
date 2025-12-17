"use client";
import Image from "next/image";
import Link from "next/link";

const RecentBlogCard = ({ blog }) => {
  return (
    <>
      <section className="col-[content] mb-8 md:px-0 md:place-self-start">
        <div className="flex gap-8 flex-col md:flex-row items-center justify-between">
          {blog.map((post) => {
            const commentCount = post.comments?.length ?? 0;
            return (
              <Link key={post.id} href={`/blog/${post.id}`} className="text-accent hover:underline">
                <div className="mb-8">
                  <Image src={post.asset?.url} alt={post.title} width={400} height={400} className="object-cover h-auto w-auto" unoptimized />
                  <h3 className="text-text! uppercase pb-2 pt-4">{post.title}</h3>
                  <div className="flex gap-2">
                    <h3>BY: {post.author}</h3>
                    <span className="text-accent">/</span>
                    <h3>{commentCount} Comments</h3>
                    <span className="text-accent">/</span>
                    <h3>Posted {new Date(post.date).toLocaleDateString("da-DK")}</h3>
                  </div>
                  <p className="line-clamp-2 mt-4!">{post.content}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default RecentBlogCard;
