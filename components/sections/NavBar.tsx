"use client"

// REACT / NEXT Imports
import React, { useState } from "react"
import Image from "next/image"
// NEED TWO ICONS
import { Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

// MISC Imports
import { SelectedPage } from "@/types/types"
import useMediaQuery from "@/hooks/useMediaQuery"

import LogoDark from "../assets/Silan Logo Dark.png"
import LogoWhite from "../assets/Silan Logo White.png"
import Link from "../NavBarLink"
import { ThemeToggle } from "../theme/theme-toggle"

type Props = {
  isTopOfPage: boolean
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

export default function Navbar({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: Props): React.JSX.Element {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery("(min-width: 786px)")
  const { theme } = useTheme()

  return (
    <nav className="fixed z-50 w-full">
      <div className="flex h-20 w-full border-b p-4 backdrop-blur-md">
        <div className="flex w-full">
          {/* LEFT SIDE */}
          {theme !== "light" ? (
            <Image alt="logo" src={LogoWhite} className="w-28" />
          ) : (
            <Image alt="logo" src={LogoDark} className="w-28" />
          )}

          {/* RIGHT SIDE */}
          {isAboveMediumScreens ? (
            <div className="flex h-full w-full items-center justify-between">
              {/* NAVIGATION */}
              <div className="ml-10 flex w-1/2 items-center justify-between text-center text-lg font-semibold">
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Services"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-end">
              <button
                className="p-4"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Menu size={20} />
              </button>
            </div>
          )}
        </div>
        {/* <div className=''/> ADD A DIVIDER */}
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="absolute right-0 top-0 z-40 h-screen w-80">
          <div className="z-40 flex h-full w-80 border-l p-4 backdrop-blur-md">
            {/* CLOSE ICON */}
            <div className="absolute right-0 top-0 p-8">
              <button
                className=""
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <X size={20} />
              </button>
            </div>

            {/* NAVIGATION */}
            <div className="mt-5 grid h-40 w-full grid-cols-1 gap-5 text-center text-lg font-semibold">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Services"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
