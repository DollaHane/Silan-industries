'use client'
// REACT & TOOLS Imports
import React from 'react'
import { Button } from '../ui/button';

// MUI & TOOLS Imports
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

// COMPONENT Imports
import { SelectedPage } from '@/types/types';

type Props = {
  setSelectedPage: ( value: SelectedPage ) => void
}

export default function ContactUs({ setSelectedPage }: Props) {


  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (event: any) => {
    const isValid = await trigger();
    if (!isValid) {
      event.preventDefault();
    }
  }

  return (
    <section id="contactus" className='flex w-full h-screen p-10 z-40'>
      <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className='mt-20'
      >

        {/* HEADER */}
        <motion.div 
          className='p-2'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='text-sm md:text-base p-2'>
            For any queries, or to book a consulation, please do not hesitate to contact us by completing the form below. 
            We would really appreciate hearing from you.
          </p>
        </motion.div>

        {/* FORM & IMAGE */}
        <div className=' grid grid-cols-1 md:grid-cols-2 p-2 mt-5'>
          <motion.div 
            className=''
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >

            <form
              className='grid grid-cols-1 gap-4'
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
              method="POST"
            >
              <input
                id="name"
                className='rounded bg-transparent bg-opacity-0 border border-slate-400 text-zinc-800 text-sm p-2 shadow-md'
                type="text"
                placeholder="Full Name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className=''>
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className='rounded bg-transparent bg-opacity-0 border border-slate-400 text-zinc-800 text-sm p-2 shadow-md'
                type="text"
                id="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className=''>
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className='rounded bg-transparent bg-opacity-0 border border-slate-400 text-zinc-800 text-sm p-2 shadow-md'
                placeholder="Message.."
                rows={5}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className=''>
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <Button variant='outline' className='font-bold border border-slate-400 shadow-md'>SEND</Button>
              
            </form>

          </motion.div>

          <motion.div 
            className=''
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};
