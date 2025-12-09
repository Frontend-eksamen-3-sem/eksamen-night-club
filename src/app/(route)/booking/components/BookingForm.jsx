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
      <h1 className="mb-6">Book a Table</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="text-white">
        <div className="grid grid-cols-2 mb-4">
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
              aria-invalid={errors.name ? "true" : "false"}
              className="w-full p-2 border border-white rounded-none bg-transparent"
            />
            {errors.name && (
              <p role="alert" className="text-sm text-red-400 mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+\.\S+$/i, message: "Invalid email address" },
              })}
              aria-invalid={errors.email ? "true" : "false"}
              className="w-full p-2 border border-white rounded-none bg-transparent"
            />
            {errors.email && (
              <p role="alert" className="text-sm text-red-400 mt-1">
                {errors.email.message}
              </p>
            )}
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
              aria-invalid={errors.tableNumber ? "true" : "false"}
              className="w-full p-2 border border-white rounded-none bg-transparent cursor-not-allowed"
            />
            {errors.tableNumber && (
              <p role="alert" className="text-sm text-red-400 mt-1">
                {errors.tableNumber.message}
              </p>
            )}
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
              aria-invalid={errors.guests ? "true" : "false"}
              className="w-full p-2 border border-white rounded-none bg-transparent"
            />
            {errors.guests && (
              <p role="alert" className="text-sm text-red-400 mt-1">
                {errors.guests.message}
              </p>
            )}
          </div>

          <div>
            <Controller name="date" control={control} rules={{ required: "Please select a date" }} defaultValue="" render={({ field }) => <DatePicker selected={field.value ? new Date(field.value) : null} onChange={(d) => field.onChange(d ? d.toISOString().split("T")[0] : "")} minDate={new Date()} dateFormat="yyyy-MM-dd" className="w-full p-2 border border-white rounded-none bg-transparent text-white" wrapperClassName="w-full" placeholderText="Select date" />} />
          </div>

          <div>
            <input
              type="tel"
              placeholder="Your Contact Number"
              {...register("contact", {
                required: "Contact number is required",
                pattern: { value: /^[0-9]{8}$/, message: "Enter an 8-digit phone number" },
              })}
              aria-invalid={errors.contact ? "true" : "false"}
              className="w-full p-2 border border-white rounded-none bg-transparent"
            />
            {errors.contact && (
              <p role="alert" className="text-sm text-red-400 mt-1">
                {errors.contact.message}
              </p>
            )}
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
