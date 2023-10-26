"use client";
import Image from 'next/image'
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Event from '../../components/events-components/Event'

//"https://img.freepik.com/free-photo/vertical-selective-focus-closeup-british-short-haired-grey-cat_181624-42648.jpg"

const supabase_URL = process.env.NEXT_PUBLIC_REACT_APP_SUPABASE_URL;
const supabase_Key = process.env.NEXT_PUBLIC_REACT_APP_SUPABASE_KEY;

export const supabase = createClient(supabase_URL, supabase_Key);

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
      return data.publicUrl;
    }

  return (
    <div>
      <div class="event-row">
      {events.map((event) => (
      <Event
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