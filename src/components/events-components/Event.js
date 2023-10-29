import React from 'react'
import '../../app/globals.css'
import kitty from '../../images/shorthair.jpg'

/*
name
desc
start time
end time
date
location
image {event[0].name}
*/

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
        <img class="event-image" src={imageURL} alt="cat"/>
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