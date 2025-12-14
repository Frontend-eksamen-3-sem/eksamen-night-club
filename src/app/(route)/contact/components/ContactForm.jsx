"use client";
import { useForm } from "react-hook-form";
import Button from "@/app/components/Button";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" })

  console.log(errors);

  return (
    <section className="grid col-[content] py-10 justify-center">
      <form onSubmit={handleSubmit((data) => console.log(data))} className="text-white grid gap-2 w-100">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
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
            value={email}
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
            value={comment}
            {...register("comment", {
              required: "Comment is required",
              minLength: { value: 2, message: "Comment must be at least 2 characters" },
              maxLength: { value: 50, message: "Comment must not exceed 100 characters" },
            })}
            className="w-full p-2 border border-white rounded-none bg-transparent mb-2"
          />
          {errors.comment && <span className="text-sm text-red-400 mt-1">{errors.comment.message}</span>}
        </div>

        <Button className="mt-4 place-self-end-safe" type="submit">
          SEND
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
