import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion";

// COMPONENT Imports
import { SelectedPage } from '@/types/types';

// IMAGE Imports
import ServicesOne from '../assets/ServicesOne.jpeg'
import ServicesTwo from '../assets/ServicesTwo.jpeg'
import ServicesThree from '../assets/ServicesThree.jpeg'
import ServicesFour from '../assets/ServicesFour.jpeg'

type Props = {
  setSelectedPage: ( value: SelectedPage ) => void
}

export default function Services({ setSelectedPage }: Props) {
  return (
    <section id='services' className='w-full h-full p-10 z-30 bg-slate-400 bg-opacity-10 '>
      <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
        className='mt-20 w-full h-auto min-h-screen'
      >

        {/* SERVICES & IMAGES */}
        <div className=' grid grid-cols-1 p-2'>

          {/* SERVICES */}
          <motion.div 
            className='grid grid-cols-1 md:grid-cols-2 gap-4 p-5 text-center md:text-left'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div>
              <h1 className='mb-5'>Services:</h1>
              <p className='mb-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus tortor sed lectus lacinia, sed sagittis nunc blandit. 
                Morbi luctus, leo vitae ullamcorper tincidunt, erat quam dictum erat, ac aliquet lectus justo sed augue. 
                Integer et ipsum et justo ultricies volutpat. 
                Nunc at tellus rhoncus, porta nulla a, lacinia tellus.
              </p>
            </div>
            <div>
              <h1 className='mb-5'>Services:</h1>
              <p className='mb-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus tortor sed lectus lacinia, sed sagittis nunc blandit. 
                Morbi luctus, leo vitae ullamcorper tincidunt, erat quam dictum erat, ac aliquet lectus justo sed augue. 
                Integer et ipsum et justo ultricies volutpat. 
                Nunc at tellus rhoncus, porta nulla a, lacinia tellus.
              </p>
            </div>
          </motion.div>

          {/* IMAGES */}
          <motion.div 
            className='h-full'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <div className='grid grid-cols-2 gap-5'>

                <div className='relative h-80'>
                  <div className='flex group hover:transform hover:scale-90 transition duration-500'>
                    <Image alt='design' src={ServicesOne}  className='flex h-80 md:h-44 object-cover rounded-tl-[50px] rounded-lg shadow-lg z-30'/>
                    <div className='absolute flex w-36 h-20 top-0 left-0 rounded-tl-[50px] rounded bg-amber-300 z-20 shadow-lg items-start justify-end hover:transform group-hover:-translate-y-10 transition duration-500'>
                      <p className='flex text-zinc-900 text-md font-bold text-center p-2'>From concept..</p>
                    </div>
                  </div>
                </div>

                <div className='relative h-80'>
                  <div className='flex group hover:transform hover:scale-90 transition duration-500 justify-center'>
                    <Image alt='process' src={ServicesTwo}  className='flex h-80 md:h-60 object-cover rounded-lg shadow-lg z-30 items-start justify-center'/>
                    <div className='absolute flex w-36 h-20 top-0 rounded bg-amber-300 z-20 shadow-lg items-start justify-center hover:transform group-hover:-translate-y-10 transition duration-500'>
                      <p className='flex text-zinc-900 text-md font-bold text-center p-2'>to..</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className='relative h-60'>
                <div className='flex group hover:transform hover:scale-90 transition duration-500'>
                  <Image alt='tooling' src={ServicesFour} className='flex h-60 md:h-80 object-cover rounded-br-[50px] rounded-lg shadow-lg z-30'/>
                  <div className='absolute flex w-64 h-20 bottom-0 right-0 rounded-br-[50px] rounded bg-amber-300 z-20 shadow-lg items-end justify-center hover:transform group-hover:translate-y-10 transition duration-500'>
                    <p className='flex text-zinc-900 text-md font-bold text-center p-2'>production.</p>
                  </div>
                </div>
              </div>

            </div>

          </motion.div>

        </div>

      </motion.div>
    </section>
  )
}

/*
<div className='relative h-60'>
                <div className='group flex h-60 overflow-hidden rounded-br-[50px] rounded shadow-lg hover:transform hover:scale-110 transition duration-500'>
                  <Image
                    alt='tooling'
                    src={ServicesFour}
                    className='object-cover w-full h-full '
                  />
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='w-full h-full opacity-70 hover:transform hover:bg-gradient-to-t from-slate-100 to-opacity-0 transition duration-500'>
                      <p className='w-full absolute bottom-5 text-zinc-900 text-xl font-bold opacity-0 group-hover:opacity-100 text-center'>...to production</p>
                    </div>
                  </div>
                </div>
              </div>
*/
