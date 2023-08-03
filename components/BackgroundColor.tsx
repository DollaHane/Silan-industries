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
          <div className="blob w-[400px] h-[400px] rounded-full absolute top-0 right-0 z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-orange-100 via-yellow-50 to-amber-50 "/>
          <div className="blob w-[800px] h-[250px] -rotate-45 rounded-52 absolute left-96 z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-amber-50 via-amber-100 to-amber-300"/>
          <div className='blob w-[800px] h-[250px] -rotate-45 rounded-52 absolute top-40 left-96 z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-amber-50 via-slate-200 to-slate-400'/>
        </div>
      ) : (
        <div>
          <div className="blob w-[400px] h-[700px] rounded-full absolute top-0 right-0 z-10 blur-2xl bg-opacity-10 bg-gradient-to-r from-zinc-950 via-grey-950 to-zinc-950"/>
          <div className="blob w-[800px] h-[550px] rotate-45 rounded-full absolute top-0 left-0 z-10 blur-2xl bg-opacity-10 bg-gradient-to-r from-zinc-900 via-grey-950 to-slate-950"/>
          <div className="blob w-[800px] h-[450px] rotate-180 absolute bottom-0 right-20 z-10 blur-2xl bg-opacity-10 bg-gradient-to-r from-zinc-950 via-grey-950 to-grey-950"/>
        </div>
      )}
    </div>
  )
}
