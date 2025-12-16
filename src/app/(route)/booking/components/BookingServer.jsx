"use server";
export async function checkAndBookTable(data) {
  const selectedDate = new Date(data.date);
  const selectedDateString = selectedDate.toLocaleDateString("da-DK");

  const res = await fetch("http://localhost:4000/reservations");
  const reservations = await res.json();

  const isBooked = reservations.some((r) => {
    const reservationDate = new Date(r.date);
    const reservationDateString = reservationDate.toLocaleDateString("da-DK");
    return String(r.table) === String(data.tableNumber) && reservationDateString === selectedDateString;
  });

  if (isBooked) {
    return { success: false, message: "This table is already booked on the selected date." };
  }

  return { success: true, reservations };
}
