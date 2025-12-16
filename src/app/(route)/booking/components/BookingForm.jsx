"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../../components/Button";
import TableGrid from "./TableGrid";
import { checkAndBookTable } from "./BookingServer";

const BookingForm = () => {
  const [status, setStatus] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    reset,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: { tableNumber: "" },
  });

  const tableNumber = watch("tableNumber");

  const selectTable = (num) => setValue("tableNumber", num);

  const onSubmit = async (data) => {
    const result = await checkAndBookTable(data);
    console.log("API reservations", result.reservations);

    if (!result.success) {
      setError("tableNumber", { message: result.message });
      setError("date", { message: result.message });
      setStatus("error");
      setStatusMessage(result.message);
      return;
    }

    setStatus("success");
    setStatusMessage("Table booked successfully!");
    reset();

    console.log(data);
  };

  return (
    <section className="grid col-[content]">
      <TableGrid onSelectTable={selectTable} selectedTable={tableNumber} />
      <h1 className="pb-6 pt-12">Book a Table</h1>
      {statusMessage && <span className="mt-4 border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400 mb-4">{statusMessage}</span>}
      <form onSubmit={handleSubmit(onSubmit)} className="text-white">
        <div className="grid md:grid-cols-2 gap-4 mb-4">
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

                min: { value: 1, message: "Please choose a number between 1-8 guests" },
                max: { value: 8, message: "Please choose a number between 1-8 guests" },
              })}
              className="w-full p-2 border border-white rounded-none bg-transparent"
            />
            {errors.guests && <span className="text-sm text-red-400 mt-1">{errors.guests.message}</span>}
          </div>
          <div className="w-full">
            <Controller name="date" control={control} defaultValue={null} rules={{ required: "Date is required" }} render={({ field }) => <DatePicker className="w-full p-2 border border-white rounded-none bg-transparent" selected={field.value} onChange={field.onChange} placeholderText="Select date" />} />
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

        <div className="flex flex-col">
          <textarea placeholder="Your Comment" {...register("comment")} className="p-2 border border-white rounded-none bg-transparent" />
          <Button type="submit" className="ml-auto block mt-4 mb-4">
            RESERVE
          </Button>
        </div>
      </form>
    </section>
  );
};

export default BookingForm;
