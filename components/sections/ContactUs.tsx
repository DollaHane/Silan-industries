"use client"

// REACT & TOOLS Imports
import React from "react"
import { motion } from "framer-motion"
// MUI & TOOLS Imports
import { useForm } from "react-hook-form"

// COMPONENT Imports
import { SelectedPage } from "@/types/types"

import Footer from "../Footer"
import PigeonMap from "../PigeonMap"
import { Button } from "../ui/button"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function ContactUs({ setSelectedPage }: Props) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm()

  const onSubmit = async (event: any) => {
    const isValid = await trigger()
    if (!isValid) {
      event.preventDefault()
    }
  }

  return (
    <section
      id="contactus"
      className="z-40 mx-auto h-auto min-h-screen w-full p-10 bg-slate-400/10"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className="mx-auto mt-20 h-auto w-full"
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="mb-5 font-prompt text-3xl font-bold">Contact:</h1>
          <p className="text-sm md:text-base">
            For any queries, or to book a consulation, please do not hesitate to
            contact us by completing the form below. We would really appreciate
            hearing from you.
          </p>
        </motion.div>

        {/* FORM & IMAGE */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2">
          <motion.div
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
              className="grid grid-cols-1 gap-4 p-5"
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
              method="POST"
            >
              <input
                id="name"
                className="rounded border border-slate-400 bg-transparent p-2 text-sm text-zinc-800 shadow-md"
                type="text"
                placeholder="Full Name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className="rounded border border-slate-400 bg-transparent p-2 text-sm text-zinc-800 shadow-md"
                type="text"
                id="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className="rounded border border-slate-400 bg-transparent p-2 text-sm text-zinc-800 shadow-md"
                placeholder="Message.."
                rows={5}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <Button
                variant="outline"
                className="border border-slate-400 font-bold shadow-md"
              >
                SEND
              </Button>
            </form>
          </motion.div>

          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full p-5">
              <div className="h-[282px] w-full overflow-hidden rounded-lg shadow-lg">
                <PigeonMap />
              </div>
            </div>
          </motion.div>
        </div>

        {/* CONTACT DETAILS */}
        <div className="mt-5 grid w-full grid-cols-1 px-5 md:grid-cols-2 text-sm">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="mb-5 w-full grid grid-cols-1 gap-3">
              <div className="flex gap-5">
                <p className="w-32 font-semibold italic">General Manager:</p>
                <p>Michael Hübsch</p>
              </div>
              <div className="flex gap-5">
                <p className="w-32 font-semibold italic">Cell:</p>
                <p>+27 (0) 78 366 2886</p>
              </div>
              <div className="flex gap-5">
                <p className="w-32 font-semibold italic">Email:</p>
                <p>michael@silan.co.za</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="md:pl-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="mb-5 w-full grid grid-cols-1 gap-3">
              <div className="flex gap-5">
                <p className="w-32 font-semibold italic">Address:</p>
                <p>Portion 1 | Plot 68 | Farm 23</p>
              </div>
              <div className="flex gap-5">
                <p className="w-32 font-semibold italic"></p>
                <p>Kragga Kamma</p>
              </div>
              <div className="flex gap-5">
                <p className="w-32 font-semibold italic"></p>
                <p>Gqeberha</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
