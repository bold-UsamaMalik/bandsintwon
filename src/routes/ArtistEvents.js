import axios from "axios"
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router"
import Event from "../components/Event"

export default function ArtistEvents() {
  const location = useLocation() //location hook for getting the data.
  const [artist, setArtist] = useState(location.state.name)
  const [duration, setDuration] = useState(location.state.duration) //getting the data from previous route.

  console.log(location.state)
  const [events, setEvents] = useState([])

  const getEvents = async () => {
    //function for getting events data based on artist name and the duration of events.
    try {
      const result = await axios.get(
        `https://rest.bandsintown.com/artists/${artist}/events?app_id=123&date=${duration}`
      )
      setEvents(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getEvents() //using useeffect to get all the events after the component gets mounted
  }, [])

  const flex_style = {
    display: "flex",
    "flex-flow": "wrap",
  }
  return (
    <div style={flex_style}>
      {events &&
        events.map(
          (
            data //looping and mapping the data from the events on the frontend.
          ) => (
            <Event
              key={data.artist_id}
              country={data.venue.country}
              city={data.venue.city}
              name={data.venue.name}
              date={data.datetime}
            />
          )
        )}
    </div>
  )
}
