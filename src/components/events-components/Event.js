//import supabase from "../../supabase.js";
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
    name,
    date,
    start_time,
    end_time,
    location,
    description
}) {
  return (
    <div class="event-wrapper">
        <img class="event-image" src="https://img.freepik.com/free-photo/vertical-selective-focus-closeup-british-short-haired-grey-cat_181624-42648.jpg" alt="cat"/>
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