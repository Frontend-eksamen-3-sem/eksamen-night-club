"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Button from "@/app/components/Button";

const Blogform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  return (
    <>
      <section className="grid col-[content] gap-10">
        <h2 className="uppercase">Leave a comment </h2>
        <form onSubmit={handleSubmit((data) => console.log(data))} className="text-white grid">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <input {...register("name", { required: "This is requried" })} type="text" placeholder="Your Name" className="w-full p-2 border border-white rounded-none bg-transparent mb-2" />
              <p>{errors.name?.message}</p>
            </div>
            <div>
              <input {...register("email", { required: "This is requried" })} type="text" placeholder="Your Email" className="w-full p-2 border border-white rounded-none bg-transparent mb-2" />
              <p>{errors.email?.message}</p>
            </div>
          </div>
          <div className="grid">
            <textarea {...register("comment", { required: "This is requried" })} type="text" placeholder="Your Comment" className="w-full p-2 border border-white rounded-none bg-transparent mb-2" />
            <p>{errors.comment?.message}</p>
          </div>
          <Button className="mt-4 place-self-end-safe" type="submit">
            Submit
          </Button>
        </form>
      </section>
    </>
  );
};

export default Blogform;
