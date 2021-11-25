import { createContext, useState } from "react"

export const ArtistContext = createContext(null)
export const DurationContext = createContext(null)

export const ArtistProvider = (props) => {
  const [artist, setArtist] = useState([])
  const [duration, setDuration] = useState()

  return (
    <ArtistContext.Provider value={[artist, setArtist]}>
      <DurationContext.Provider value={[duration, setDuration]}>
        {props.children}
      </DurationContext.Provider>
    </ArtistContext.Provider>
  )
}
