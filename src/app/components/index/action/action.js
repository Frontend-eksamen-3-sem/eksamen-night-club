"use server";

export const subscribeEmail = async (formData) => {
  const email = formData.get("email");

  const response = await fetch("http://localhost:4000/newsletters", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
    }),
  });
  console.log(response);

  return { success: response.ok };
};
