import axios from "axios"
import React, { useContext, useState } from "react"
import { ArtistContext, DurationContext } from "../context/ArtistContext"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition"
import { InputLabel, MenuItem, Select } from "@mui/material"



export default function Search() {
  const [artist, setArtist] = useContext(ArtistContext)
  const [duration, setDuration] = useContext(DurationContext) //getting the values from our context

  const [artistQuery, setArtistQuery] = useState()
  const [durationQuery, setDurationQuery] = useState()
  const [cache, _] = useState([])
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition() //Hook for using text to speech

  const searchArtist = async (artistQuery) => {
    const artist = cache.find((artist) => artist.name === artistQuery) //Have implemented inmemory cache which will find the artist if it exists in cache otherwise it gets it from api.

    if (artist) {
      return artist
    }
    try {
      const result = await axios.get(
        `https://rest.bandsintown.com/artists/${artistQuery}?app_id=123`
      )
      setArtist(result.data)
      cache.unshift(result.data)
      setDuration(durationQuery)
      return result.data
    } catch (error) {
      console.log(error)
    }
    if (cache.length > 5) {
      cache.pop()
    }
    return null
  }
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }
  return (
    <div class="searchdiv">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "15rem" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField




          id="outlined-basic"
          variant="outlined"
          value={artistQuery}
          onChange={(e) => setArtistQuery(e.target.value)} //onchange for setting value for textfield
        />
        <Button

          
          variant="outlined"
          onClick={() => {
            searchArtist(document.getElementById("outlined-basic").value)
          }}
          style={{ height: "3.5rem" }}
          sx={{
            maxWidth: "2rem",
            maxHeight: "80px",

          }}
        >
          Find
        </Button>
      </Box>
      <Box

      sx={{
          "& > :not(style)": { m: 1, width: "15rem" },
        }}
      >
        <p>Search by voice : {listening ? "on" : "off"}</p>
      
      
        <Button variant="outlined"
         onClick={SpeechRecognition.startListening}
         style={{ height: "3.5rem" }}
          sx={{
            maxWidth: "1rem",
            maxHeight: "40px",



          }}


         >
          Start
        </Button>
        <Button variant="outlined" 
        onClick={SpeechRecognition.stopListening}
        style={{ height: "3.5rem" }}
          sx={{
            maxWidth: "1rem",
            maxHeight: "40px",

          }}

        >
          Stop
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            setArtistQuery(transcript) //onclick, the artist query will set to data from speech.
          }}
          style={{ height: "3.5rem" }}
          sx={{
            maxWidth: "1rem",
            maxHeight: "40px",
          }}
        >
          Done
        </Button>
        <Button variant="outlined" 
        onClick={resetTranscript}
        style={{ height: "3.5rem" }}
          sx={{
            maxWidth: "1rem",
            maxHeight: "40px",

          }}

        >
          Reset
        </Button>
      </Box>
      <InputLabel style={{ margin: "1rem 0rem 0rem 0rem" }}>
        Duration
      </InputLabel>
      <Select
        style={{ margin: "1rem 0rem 1rem 0rem" }}
        value={durationQuery}
        name="duration"
        label="Age"
        onChange={(e) => setDurationQuery(e.target.value)} // for setting duration of the search events for the artists.
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="upcoming">Upcoming</MenuItem>
        <MenuItem value="past">Past</MenuItem>
        
      </Select>
    </div>
  )
}
