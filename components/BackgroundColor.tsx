'use client'
import React from 'react'
import { useTheme } from 'next-themes'

export default function BackgroundColor() {

  const { theme } = useTheme()
  console.log(theme)

  return (
    <div className='fixed'>
      { theme === "light" ? (
        <div>
          <div className="blob w-[400px] h-[400px] rounded-full absolute top-0 right-0 z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-colorOne via-colorTwo to-colorThr"/>
          <div className="blob w-[800px] h-[250px] -rotate-45 rounded-52 absolute left-96 z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-colorFou via-colorFiv to-colorSix"/>
          <div className='blob w-[800px] h-[250px] -rotate-45 rounded-52 absolute top-40 left-96 z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-colorSev via-colorEig to-colorNin'/>
        </div>
      ) : (
        <div>
          <div className="blob w-[400px] h-[400px] rounded-full absolute top-0 right-0 z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-colorOne via-colorTwo to-colorThr"/>
          <div className="blob w-[800px] h-[250px] -rotate-45 rounded-52 absolute left-96 z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-colorFou via-colorFiv to-colorSix"/>
          <div className='blob w-[800px] h-[250px] -rotate-45 rounded-52 absolute top-40 left-96 z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-colorSev via-colorEig to-colorNin'/>
        </div>
      )}
    </div>
  )
}
