"use client";

import { useForm } from "react-hook-form";
import Button from "@/app/components/Button";
import { submitComment } from "../[id]/action/action";

const Blogform = ({ blogpostId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ mode: "onChange" });

  console.log(errors);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("blogpostId", blogpostId);
    formData.append("name", data.name);
    formData.append("comment", data.comment);

    await submitComment(formData);
  };

  return (
    <>
      <section className="grid col-[content] mt-4 mb-4">
        <h2 className="uppercase pb-4">Leave a comment </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="text-text grid">
          {isSubmitSuccessful && <div className="border border-green-500/30 bg-green-500/10 text-green-400 px-2 py-3 text-md mb-4">Your comment has been sent successfully.</div>}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <input {...register("name", { required: "Name is required", minLength: { value: 2, message: "Name must be at least 2 characters" }, maxLength: { value: 50, message: "Name must not exceed 50 characters" }, pattern: { value: /^[a-zA-Z\s]+$/, message: "Name can only contain letters and spaces" } })} type="text" placeholder="Your Name" className="w-full p-2 border border-text rounded-none bg-transparent" />
              {errors.name && <span className="text-sm text-red-400">{errors.name.message}</span>}
            </div>
            <div>
              <input {...register("email", { required: "This is requried", pattern: { value: /^\S+@\S+\.\S+$/i, message: "Invalid email address" } })} type="text" placeholder="Your Email" className="w-full p-2 border border-text rounded-none bg-transparent" />
              {errors.email && <span className="text-sm text-red-400">{errors.email.message}</span>}
            </div>
          </div>
          <div className="grid">
            <textarea {...register("comment", { required: "This is requried" })} type="text" placeholder="Your Comment" className="w-full p-2 border border-text rounded-none bg-transparent" />
            {errors.comment && <span className="text-sm text-red-400">{errors.comment.message}</span>}
          </div>
          <Button type="submit" disabled={isSubmitting} className="mt-4 place-self-end-safe">
            {isSubmitting ? "SENDING..." : "SEND"}
          </Button>
        </form>
      </section>
    </>
  );
};

export default Blogform;
