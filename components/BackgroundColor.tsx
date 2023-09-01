"use client"

import React from "react"
import { useTheme } from "next-themes"

export default function BackgroundColor() {
  const { theme } = useTheme()
  console.log(theme)

  return (
    <div className="fixed">
      {theme === "light" ? (
        <div>
          <div className="blob absolute right-0 top-0 z-10 h-[400px] w-[400px] rounded-full bg-opacity/60 bg-gradient-to-r from-colorOne via-colorTwo to-colorThr blur-3xl" />
          <div className="blob rounded-52 absolute left-96 z-10 h-[250px] w-[800px] -rotate-45 bg-opacity/60 bg-gradient-to-r from-colorFou via-colorFiv to-colorSix blur-3xl" />
          <div className="blob rounded-52 absolute left-96 top-40 z-10 h-[250px] w-[800px] -rotate-45 bg-opacity/60 bg-gradient-to-r from-colorSev via-colorEig to-colorNin blur-3xl" />
        </div>
      ) : (
        <div>
          <div className="blob absolute right-0 top-0 z-10 h-[400px] w-[400px] rounded-full bg-opacity/60 bg-gradient-to-r from-colorOne via-colorTwo to-colorThr blur-3xl" />
          <div className="blob rounded-52 absolute left-96 z-10 h-[250px] w-[800px] -rotate-45 bg-opacity/60 bg-gradient-to-r from-colorFou via-colorFiv to-colorSix blur-3xl" />
          <div className="blob rounded-52 absolute left-96 top-40 z-10 h-[250px] w-[800px] -rotate-45 bg-opacity/60 bg-gradient-to-r from-colorSev via-colorEig to-colorNin blur-3xl" />
        </div>
      )}
    </div>
  )
}
