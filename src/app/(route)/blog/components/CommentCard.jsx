const CommentCard = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(`http://localhost:4000/comments?blogpostId=${id}`, { cache: "no-store" }); //vis altid ny data
  const comments = await response.json();

  console.log("Comments fetched:", comments);

  return (
    <>
      <section className="col-[content]">
        <h2 className="uppercase">Comments</h2>
        {comments.map((comment) => (
          <div key={comment.id} className="mb-4 mt-4">
            <div className="flex gap-2">
              <h3 className="font-bold text-white">{comment.name}</h3>
              <p>-</p>
              <h4>Posted {comment.date}</h4>
            </div>
            <p>{comment.content}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default CommentCard;
