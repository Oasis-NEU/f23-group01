"use client";
import { useEffect, useState } from "react";
import Event from '../../components/events-components/Event'
import { supabase } from '../../../lib/supabase.js'

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
      getEvents();
    }, []);

  async function getEvents() {
      const { data } = await supabase.from("Events").select();
      setEvents(data);
    }

  function getEventImage(eventID) {
      const { data } = supabase.storage.from("event-images").getPublicUrl(`${eventID}-image.jpg`);
      console.log(data)
      console.log({eventID})
      return data.publicUrl;
    }

  return (
    <div>
      <div class="event-row">
      {events.map((event) => (
      <Event key={event.id}
        imageURL={getEventImage(event.id)}
        name={event.name}
        date={event.date}
        start_time={event.start_time}
        end_time={event.end_time}
        location={event.location}
        description={event.description}
      />))}
      </div>
    </div>
  )
}