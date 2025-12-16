"use client";
import { useForm } from "react-hook-form";
import Button from "@/app/components/Button";
import { submitContact } from "../action/action";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("comment", data.comment);

    await submitContact(formData);
  };

  return (
    <section className="grid col-[content] py-10 justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="text-white grid gap-4 w-100">
        {isSubmitSuccessful && <div className="border border-green-500/30 bg-green-500/10 text-green-400 px-2 py-3 text-md">Your comment has been sent successfully.</div>}
        <div>
          <input
            type="text"
            placeholder="Your Name"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 2, message: "Name must be at least 2 characters" },
              maxLength: { value: 50, message: "Name must not exceed 50 characters" },
              pattern: { value: /^[a-zA-Z\s]+$/, message: "Name can only contain letters and spaces" },
            })}
            className="w-full p-2 border border-white rounded-none bg-transparent"
          />
          {errors.name && <span className="text-sm text-red-400 mt-1">{errors.name.message}</span>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+\.\S+$/i, message: "Invalid email address" },
            })}
            className="w-full p-2 border border-white rounded-none bg-transparent"
          />
          {errors.email && <span className="text-sm text-red-400 mt-1">{errors.email.message}</span>}
        </div>

        <div className="grid">
          <textarea
            type="text"
            placeholder="Your Comment"
            {...register("comment", {
              required: "Comment is required",
              minLength: { value: 2, message: "Comment must be at least 2 characters" },
              maxLength: { value: 50, message: "Comment must not exceed 100 characters" },
            })}
            className="w-full p-2 border border-white rounded-none bg-transparent"
          />
          {errors.comment && <span className="text-sm text-red-400 mt-1">{errors.comment.message}</span>}
        </div>

        <Button type="submit" disabled={isSubmitting} className="place-self-end-safe">
          {isSubmitting ? "SENDING..." : "SEND"}
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
