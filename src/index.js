import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import App from "./App"
import ArtistEvents from "./routes/ArtistEvents"
import { ArtistProvider } from "./context/ArtistContext"

ReactDOM.render(
  <React.StrictMode>
    <ArtistProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="events" element={<ArtistEvents />} />
        </Routes>
      </BrowserRouter>
    </ArtistProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
