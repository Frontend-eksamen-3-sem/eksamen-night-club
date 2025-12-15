"use server";

export const submitContact = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const comment = formData.get("comment");

  const response = await fetch("http://localhost:4000/contact_messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      email: email,
      content: comment,
      date: new Date().toISOString(),
    }),
  });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(response);

  return { success: response.ok };
};
