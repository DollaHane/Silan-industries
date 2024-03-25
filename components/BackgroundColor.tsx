"use client"

import React from "react"

export default function BackgroundColor() {
  return (
    <div className="absolute z-10">
      <div>
        {/* <div className="blob bg-opacity/60 absolute top-60 z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-colorOne via-colorTwo to-colorThr blur-3xl" /> */}
        <div className="blob rounded-52 bg-opacity/30 absolute -left-[280px] top-[300px] z-10 h-[250px] w-[800px] -rotate-45 bg-gradient-to-r from-colorFou via-colorFiv to-colorSix blur-3xl" />
        <div className="blob rounded-52 bg-opacity/30 absolute -left-[280px] top-[350px] z-10 h-[250px] w-[500px] -rotate-45 bg-gradient-to-r from-colorSev via-colorEig to-colorNin blur-3xl" />
      </div>
    </div>
  )
}
