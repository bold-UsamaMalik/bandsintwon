import React, { useContext } from "react"
import { useNavigate } from "react-router"
import { ArtistContext, DurationContext } from "../context/ArtistContext"
import "./Artist.css"
export default function Artist() {
  const [artist, setArtist] = useContext(ArtistContext)
  const [duration, setDuration] = useContext(DurationContext) //getting values from context

  let navigate = useNavigate()
  const showEvents = async () => {
    navigate("/events", { state: { name: artist.name, duration: duration } }) //navigating to events route as declared in the react router.
  }
  //the onclick below on the artist will navigate us to the event page with all the events.
  return (
    <div onClick={showEvents}>
      {Object.keys(artist).length > 0 && (
        <div className="artist">
          <div>
            <img
              className="img"
              src={artist.thumb_url}
              style={{ height: "210px", width: "210px" }}
            />
          </div>
          <div className="artistData">
            <h2>{artist.name}</h2>
            <h4 >{artist.facebook_page_url}</h4>
            
          </div>
        </div>
      )}
    </div>
  )
}
