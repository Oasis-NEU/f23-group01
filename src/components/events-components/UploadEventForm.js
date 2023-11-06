"use client";
import { supabase } from '../../../lib/supabase.js'
import { useState } from "react"

export default function UploadEventForm() {
    const [name, setName] = useState([]);
    const [description, setDescription] = useState([]);
    const [location, setLocation] = useState([]);
    const [startTime, setStartTime] = useState([]);
    const [endTime, setEndTime] = useState([]);
    const [date, setDate] = useState([]);
    const [image, setImage] = useState([]);

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setName(event.target.value);
        const { data, error } = await supabase.from("Events").insert(
            {name: name, description: description, start_time: startTime, end_time: endTime, date: date, location: location, creator_id: null})
            .select()
        const {error2 } = await supabase.storage.from('event-images').upload(data[0].id + "-image.jpg", image, {
              cacheControl: '3600',
              upsert: false
            })
    }
    return (
        <div>
        <form
            onSubmit={handleSubmit}>
            <label>Event Name:
                <input
                  id="event-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required />
            </label>
            <label>Description:
                <input
                  id="event-description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required />
            </label>
            <label>Location:
                <input
                  id="event-location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required />
            </label>
            <label>Start Time:
                <input
                  id="event-start-time"
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  required />
            </label>
            <label>End Time:
                <input
                  id="event-end-time"
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  required />
            </label>
            <label>Date:
                <input
                  id="event-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required />
            </label>
            <label>Image:
                <input
                  id="event-image"
                  type="file"
                  accept="image/jpeg"
                  onChange={(event) => {
                    setImage(event.target.files[0]);
                  }}
                  required />
            </label>
            <input type="submit" />
        </form>
        </div>
    )
}