"use server";
import EventMonthClient from "./EventMonthClient";
import { Suspense } from "react";

const EventMonth = async () => {
  const response = await fetch("http://localhost:4000/events");
  const data = await response.json();
  const events = data.events || data || [];

  return (
    <Suspense fallback={<p>Indlæser events...</p>}>
      <section className="grid col-[content] pt-10">
        <EventMonthClient events={events} />
      </section>
    </Suspense>
  );
};
export default EventMonth;
