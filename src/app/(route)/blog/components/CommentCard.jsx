const CommentCard = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(`http://localhost:4000/comments?blogpostId=${id}`, { cache: "no-store" }); //vis altid ny data
  const comments = await response.json();

  console.log("Comments fetched:", comments);

  return (
    <>
      <section className="col-[content] mb-2 mt-12 px-4 md:px-0">
        <h2 className="uppercase">Comments</h2>
        {comments.map((comment) => (
          <div key={comment.id} className="mb-8 mt-4">
            <div className="flex gap-2 mb-4">
              <h3 className="font-bold !text-text">{comment.name}</h3>
              <p>-</p>
              <h3>Posted {new Date(comment.date).toLocaleDateString("da-DK")}</h3>
            </div>
            <p>{comment.content}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default CommentCard;
