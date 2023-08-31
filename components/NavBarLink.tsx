"use client"

import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { SelectedPage } from "@/types/types"

type Props = {
  page: string
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

export default function NavbarLink({
  page,
  selectedPage,
  setSelectedPage,
}: Props): React.JSX.Element {
  const lowerCasePage = page
    .toLocaleLowerCase()
    .replace(/ /g, "") as SelectedPage

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-amber-400" : ""}`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}
