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
image
*/

const Event = () => {
  return (
    <div class="event-wrapper">
        <img class="event-image" src="https://img.freepik.com/free-photo/vertical-selective-focus-closeup-british-short-haired-grey-cat_181624-42648.jpg" alt="cat"/>
        <div class="event-information">
            <div class="event-header">
                <div class="event-name">Name of Event</div>
                <div class="event-subinformation">
                    Oct 22, 12-1 PM
                </div>
                <div class="event-subinformation">
                    Location of event
                </div>
            </div>
            <div class="event-description">
                Mew meow meow meow meow
                Mew meow meow meow meow
                Mew meow meow meow meow
                Mew meow meow meow meow
                Mew meow meow meow meow
            </div>
        </div>
    </div>
  )
}

export default Event