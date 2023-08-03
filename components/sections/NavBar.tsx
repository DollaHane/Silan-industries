'use client'
// REACT / NEXT Imports
import React, { useState } from 'react'
import Link from "../NavBarLink";
import Image from 'next/image'
import { useTheme } from 'next-themes';

// NEED TWO ICONS
import { Menu, X } from 'lucide-react';

// MISC Imports
import { SelectedPage } from '@/types/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import LogoWhite from "../assets/Silan Logo White.png";
import LogoDark from '../assets/Silan Logo Dark.png'
import { ThemeToggle } from '../theme/theme-toggle';


type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: ( value: SelectedPage ) => void
}

export default function Navbar({ isTopOfPage, selectedPage, setSelectedPage }: Props): React.JSX.Element {
  
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 786px)");
  const { theme } = useTheme()

  return (
    <nav className='z-50 w-full fixed'>
      <div className='flex w-full h-20 p-4 backdrop-blur-md border-b'>
          <div className='flex w-full'>

            {/* LEFT SIDE */}
            { theme !== "light" ? (
              <Image alt="logo" src={LogoWhite} className='w-28'/>
            ) : (
              <Image alt="logo" src={LogoDark} className='w-28'/>
            ) }

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (

              <div className='w-full h-full flex justify-between items-center'>

                {/* NAVIGATION */}
                <div className='flex w-1/2 ml-10 justify-between text-center text-lg font-semibold items-center'>
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

                <ThemeToggle/>

              </div>

            ) : (
              
              <div className='w-full h-full flex justify-end items-center'>
                <button
                  className='p-4'
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                  <Menu size={20}/>
                </button>
              </div>

            )}

          </div>
        {/* <div className=''/> ADD A DIVIDER */}
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className='absolute z-40 right-0 top-0 w-80 h-screen'>  
          <div className='flex z-40 w-80 h-full p-4 backdrop-blur-md border-l'>

            {/* CLOSE ICON */}
            <div className='absolute top-0 right-0 p-8'>
              <button 
                className=''
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                <X size={20}/>
              </button>
            </div>

            {/* NAVIGATION */}
            <div className='grid grid-cols-1 gap-5 h-40 w-full mt-5 text-center text-lg font-semibold'>
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
              <ThemeToggle/>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
