"use client"

import React, { useState } from "react"
import { Map, Marker, ZoomControl } from "pigeon-maps"
import { maptiler } from "pigeon-maps/providers"

export default function PigeonMap() {
  const [hue, setHue] = useState(355)

  const apiKey = process.env.MY_API_KEY
  const maptilerProvider = maptiler("MIKhojEDOxVHSfIx0O8y", "streets")
  const color = `hsl(${hue % 360}deg 100% 45%)`

  return (
    <Map
      provider={maptilerProvider}
      dprs={[1, 2]} // this provider supports HiDPI tiles
      defaultCenter={[-33.968, 25.442]}
      defaultZoom={10}
    >
      <ZoomControl />
      <Marker
        width={50}
        anchor={[-33.968, 25.442]}
        color={color}
        onClick={() => setHue(hue + 20)}
      />
    </Map>
  )
}

// Lat 30 58.2 65
// Long 25 26.28 90
