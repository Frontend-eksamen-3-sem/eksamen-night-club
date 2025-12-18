"use client";
import { useForm } from "react-hook-form";
import Button from "@/app/components/Button";
import { subscribeEmail } from "@/app/components/index/action/action";

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    await subscribeEmail(formData);
  };

  return (
    <section className="grid col-[content] py-10 justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="text-white grid gap-4 md:w-100 justify-center">
        <div className="grid gap-2 text-center mb-4">
          <h1 className="uppercase">want the latest night club news</h1>
          <p className="flex justify-center! gap-1 ">
            Subscribe to our newsletter and never miss an <span className="text-accent!"> Event</span>
          </p>
        </div>
        {isSubmitSuccessful && <div className="border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400">You subscribed successfully!</div>}
        <div className="flex gap-5 md:w-150">
          <input
            type="email"
            placeholder="Enter Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+\.\S+$/i, message: "Invalid email address" },
            })}
            className="w-full p-2 border-b border-white  bg-transparent"
          />
          {errors.email && <span className="text-sm text-red-400 mt-1">{errors.email.message}</span>}
          <Button type="submit" disabled={isSubmitting} className="place-self-end-safe">
            {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default EmailForm;
