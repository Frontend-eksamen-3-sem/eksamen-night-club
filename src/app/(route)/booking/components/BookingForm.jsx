"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Book a Table</h1>

      <form onSubmit={handleSubmit(onSubmit)} className=" text-white">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="Your Name" {...register("name", { maxLength: 100 })} className="p-2 border border-white rounded-none bg-transparent" />

          <input type="email" placeholder="Your Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} className="p-2 border border-white rounded-none bg-transparent" />

          <input type="text" placeholder="Table Number" {...register("tableNumber", { required: true })} className="p-2 border border-white rounded-none bg-transparent" />

          <input type="number" placeholder="Number of Guests" {...register("guests", { required: true, max: 8, min: 1 })} className="p-2 border border-white rounded-none bg-transparent" />

          <input type="tel" placeholder="Your Contact Number" {...register("contact", { required: true, minLength: 8, maxLength: 8 })} className="p-2 border border-white rounded-none bg-transparent" />

          <input type="date" placeholder="Select Date" {...register("date", { required: true })} className="p-2 border border-white rounded-none bg-transparent" />
        </div>

        <div className="flex flex-col gap-4">
          <textarea placeholder="Your Comment" {...register("comment")} className="p-2 border border-white rounded-none bg-transparent" />

          <Button type="submit">RESERVE</Button>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
