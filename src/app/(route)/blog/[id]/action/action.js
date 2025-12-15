"use server";

export const submitComment = async (formData) => {
  //   const params = Number(formData.get("params"));
  const name = formData.get("name");
  const comment = formData.get("comment");

  const response = await fetch("http://localhost:4000/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      //   blogpostId: params,
      name: name,
      content: comment,
      date: new Date().toISOString(),
    }),
  });

  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(response);

  return { success: response.ok };
};
