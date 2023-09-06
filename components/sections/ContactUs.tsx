"use client"

import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { SelectedPage } from "@/types/types"
import { FormCreationRequest, FormValidator } from "@/lib/validators/emailJs"
import { toast } from "@/hooks/use-toast"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/Form"
import { Input } from "@/components/ui/Input"

import PigeonMap from "../PigeonMap"
import { Button } from "../ui/button"
import { Textarea } from "../ui/TextArea"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

type FormData = z.infer<typeof FormValidator>

const dotenv = require("dotenv")
dotenv.config()

export default function ContactUs({ setSelectedPage }: Props) {

  const router = useRouter()

  const form = useForm<FormData>({
    resolver: zodResolver(FormValidator),
    defaultValues: {
      from_name: "",
      from_surname: "",
      user_email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit({
    from_name,
    from_surname,
    user_email,
    subject,
    message,
  }: FormCreationRequest) {
    const data = {
      service_id: 'service_nwxafir',
      template_id: 'template_rmsb1fd',
      user_id: 'MFnqY65qneeSi6YL0',
      template_params: {
        from_name: from_name,
        from_surname: from_surname,
        user_email: user_email,
        subject: subject,
        message: message,
      },
    }

    try {
      axios
        .post("https://api.emailjs.com/api/v1.0/email/send", data)
        .then(() => {
          return toast({
            description: "Your email has been sent successfully!",
          })
        })
        router.refresh()
    } catch (error) {
      return toast({
        title: "Something went wrong.",
        description: `Email not sent: ${error}. Please try again.`,
        variant: "destructive",
      })
    }
  }

  return (
    <section
      id="contactus"
      className="z-40 mx-auto h-auto min-h-screen w-full bg-slate-400/10 p-5 md:p-10"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className="mx-auto mt-16 h-auto w-full"
      >
        <h1 className="mb-5 font-prompt text-2xl font-bold md:text-3xl">
          Contact:
        </h1>
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="text-sm md:text-base">
            For any queries, or to book a consulation, please do not hesitate to
            contact us by completing the form below. We would really appreciate
            hearing from you.
          </p>
        </motion.div>

        {/* ---------- FORM ---------- */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2">
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
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 p-5"
              >
                <div className="grid grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="from_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Name"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="from_surname"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Surname"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="user_email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="@"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Subject"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Type your message here."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="italic text-primary">
                        We are looking forward to hearing from you.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  variant="outline"
                  className="w-32 font-bold"
                >
                  SEND
                </Button>
              </form>
            </Form>
          </motion.div>

          {/* MAP */}
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="w-full p-5">
              <div className="h-[320px] w-full overflow-hidden rounded-lg shadow-lg">
                <PigeonMap />
              </div>
            </div>
          </motion.div>
        </div>

        {/* CONTACT DETAILS */}
        <div className="mt-5 grid w-full grid-cols-1 overflow-hidden px-5 text-sm md:grid-cols-2">
          {/* RIGHT */}
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
            <div className="mb-5 grid w-full grid-cols-1 gap-3">
              <div className="flex flex-wrap">
                <p className="w-20 font-semibold italic">Contact:</p>
                <p>Michael Hübsch</p>
              </div>
              <div className="flex flex-wrap">
                <p className="w-20 font-semibold italic">Cell:</p>
                <p>+27 (0) 78 366 2886</p>
              </div>
              <div className="flex flex-wrap">
                <p className="w-20 font-semibold italic">Email:</p>
                <p>michael@silan.co.za</p>
              </div>
              <div className="flex flex-wrap">
                <p className="w-20 font-semibold italic">Address:</p>
              </div>
              <div className="flex flex-wrap">
                <p>Portion 1 | Plot 68 | Farm 23</p>
              </div>
              <div className="flex flex-wrap">
                <p>Kragga Kamma | Gqeberha</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
