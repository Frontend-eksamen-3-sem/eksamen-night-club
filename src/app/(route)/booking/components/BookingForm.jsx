"use client";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../../components/Button";

const BookingForm = ({ selectedTableNumber }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ mode: "onTouched" });

  useEffect(() => {
    if (selectedTableNumber) {
      setValue("tableNumber", selectedTableNumber);
    }
  }, [selectedTableNumber, setValue]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section>
      <h1 className="pb-6 pt-12">Book a Table</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="text-white">
        <div className="grid grid-cols-2 gap-4 mb-4">
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
            {errors.name && <span className="text-sm text-red-400 mt-1">{errors.name.message}</span>}{" "}
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
            {errors.email && <span className="text-sm text-red-400 mt-1">{errors.email.message}</span>}{" "}
          </div>
          <div>
            <input
              type="number"
              placeholder="Table Number"
              readOnly
              {...register("tableNumber", {
                required: "Table number is required, pick a table from above",
                valueAsNumber: true,
                min: { value: 1, message: "Table number must be at least 1" },
                max: { value: 15, message: "Table number must not exceed 15" },
              })}
              className="w-full p-2 border border-white rounded-none bg-transparent cursor-not-allowed"
            />
            {errors.tableNumber && <span className="text-sm text-red-400 mt-1">{errors.tableNumber.message}</span>}
          </div>
          <div>
            <input
              type="number"
              placeholder="Number of Guests"
              {...register("guests", {
                required: "Number of guests is required",
                valueAsNumber: true,
                min: { value: 1, message: "Please choose a number between 1-8 guests" },
                max: { value: 8, message: "Please choose a number between 1-8 guests" },
              })}
              className="w-full p-2 border border-white rounded-none bg-transparent"
            />
            {errors.guests && <span className="text-sm text-red-400 mt-1">{errors.guests.message}</span>}
          </div>
          <div className="w-full">
            <Controller name="date" control={control} defaultValue={null} rules={{ required: "Date is required" }} render={({ field }) => <DatePicker selected={field.value} onChange={field.onChange} placeholderText="Select date" className="w-full p-2 border border-white rounded-none bg-transparent block react-datepicker-wrapper react-datepicker_input-container" />} />
            {errors.date && <span className="text-sm text-red-400 mt-1">{errors.date.message}</span>}
          </div>
          <div>
            <input
              type="tel"
              placeholder="Your Contact Number"
              {...register("contact", {
                required: "Contact number is required",
                pattern: { value: /^[0-9]{8}$/, message: "Enter an 8-digit phone number" },
              })}
              className="w-full p-2 border border-white rounded-none bg-transparent"
            />
            {errors.contact && <span className="text-sm text-red-400 mt-1">{errors.contact.message}</span>}{" "}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <textarea placeholder="Your Comment" {...register("comment")} className="p-2 border border-white rounded-none bg-transparent" />
          <Button type="submit">RESERVE</Button>
        </div>
      </form>
    </section>
  );
};

export default BookingForm;
