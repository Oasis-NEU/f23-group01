import React from 'react'
import '../../app/globals.css'

export default function Event({
    imageURL,
    name,
    date,
    start_time,
    end_time,
    location,
    description
}) {
  return (
    <div class="event-wrapper">
        <img class="event-image" src={imageURL} alt="Image"/>
        <div class="event-information">
            <div class="event-header">
                <div class="event-name">{name}</div> 
                <div class="event-subinformation">
                    {date} {start_time} {end_time}
                </div>
                <div class="event-subinformation">
                    {location}
                </div>
            </div>
            <div class="event-description">
                {description}
            </div>
        </div>
    </div>
  )
}