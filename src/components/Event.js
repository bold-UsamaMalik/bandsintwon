import "./Event.css"
import React from "react"

export default function Event({ country, city, name, date }) {
  //event container for the frontend.
  return (
    <div class="card">
      <div class="container">
        <h3>{country}</h3>
        <h4>{city}</h4>
        <p>{name}</p>
        <p>{date}</p>
      </div>
    </div>
  )
}
