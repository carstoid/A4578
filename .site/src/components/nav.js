import { Link } from "gatsby"
import React from "react"

export default function Nav({ siteTitle }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col mb-4">
        <Link to="/" className="title">
          <h1>Digital Practice Initiative</h1>
        </Link>
        <small>A project of NYC Planning's Urban Design Office</small>
      </div>
      <div className="flex flex-col mb-4">
        <strong>NYC Digital Twin</strong>
        <Link to="/digital-twin/about">About</Link>
      </div>
      <div className="flex flex-col mb-4">
        <strong>UDTools Rhino Plugin</strong>
        <Link to="/plugin/about">About</Link>
        <Link to="/plugin/install">Install</Link>
        <Link to="/plugin/quickstart">Guide</Link>
        {/* <Link to="/">Command List</Link> */}
      </div>
    </div>
  )
}
