"use server";

export const submitComment = async (formData) => {
  const blogpostId = formData.get("blogpostId");
  const name = formData.get("name");
  const comment = formData.get("comment");

  const response = await fetch("http://localhost:4000/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      blogpostId: blogpostId,
      name: name,
      content: comment,
      date: new Date().toISOString(),
    }),
  });

  console.log(response);

  return { success: response.ok };
};
