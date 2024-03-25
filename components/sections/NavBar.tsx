"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { SelectedPage } from "@/types/types"
import useMediaQuery from "@/hooks/useMediaQuery"

import LogoDark from "../assets/Silan Logo Dark.png"
import LogoWhite from "../assets/Silan Logo White.png"
import Link from "../NavBarLink"
import { ThemeToggle } from "../theme/theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/Sheet"

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
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)")

  return (
    <nav className="fixed z-50 w-full">
      <div className="flex h-20 w-full p-4 backdrop-blur-md">
        <div className="relative flex w-full items-center justify-center">
          {/* LEFT SIDE */}

          <Image
            alt="logo"
            src={LogoDark}
            className="absolute left-0 flex w-28"
          />

          {isAboveMediumScreens ? (
            <div className="flex h-full w-full items-center justify-between">
              {/* NAVIGATION */}
              <div className="mx-auto flex w-1/2 items-center justify-between text-center text-lg font-semibold">
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                {/* <Link
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                /> */}
                <Link
                  page="Services"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Experience"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              {/* <ThemeToggle/> */}
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-end">
              <Sheet>
                <SheetTrigger>
                  <Menu size={25} />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>
                      {/* NAVIGATION */}
                      <div className="mt-5 grid h-40 w-full grid-cols-1 gap-5 text-center text-lg font-semibold text-primary">
                        <Link
                          page="Home"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                        {/* <Link
                          page="About"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        /> */}
                        <Link
                          page="Services"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                        <Link
                          page="Experience"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                        <Link
                          page="Contact Us"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
