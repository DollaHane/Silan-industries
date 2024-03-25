"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { useForm } from "@tanstack/react-form"
import type { FieldApi } from "@tanstack/react-form"
import { useMutation } from "@tanstack/react-query"
import { zodValidator } from "@tanstack/zod-form-adapter"
import axios from "axios"
import { motion } from "framer-motion"

import { SelectedPage } from "@/types/types"
import { FormCreationRequest, FormValidator } from "@/lib/validators/emailJs"
import {
  fromName,
  fromSurname,
  message,
  onChangeAsync,
  onChangeAsyncDebounceMs,
  subject,
  userEmail,
} from "@/lib/validators/formValidators"
import { toast } from "@/hooks/use-toast"
import { Input } from "@/components/ui/Input"
import { Button } from "../Button"
import PigeonMap from "../PigeonMap"
import { FieldLabel } from "../ui/FieldLabel"
import { Textarea } from "../ui/TextArea"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const dotenv = require("dotenv")
dotenv.config()

function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.touchedErrors ? (
        <em className="absolute top-10 text-xs italic text-rose-400">
          {field.state.meta.touchedErrors}
        </em>
      ) : null}
    </>
  )
}

function TextAreaInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.touchedErrors ? (
        <em className="absolute top-[135px] text-xs italic text-rose-400">
          {field.state.meta.touchedErrors}
        </em>
      ) : null}
    </>
  )
}

export default function ContactUs({ setSelectedPage }: Props) {
  const router = useRouter()

  // TANSTACK-HOOK-FORM
  const form = useForm({
    validatorAdapter: zodValidator,
    defaultValues: {
      from_name: "",
      from_surname: "",
      user_email: "",
      subject: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      const payload: FormCreationRequest = {
        service_id: "service_nwxafir",
        template_id: "template_rmsb1fd",
        user_id: "MFnqY65qneeSi6YL0",
        template_params: {
          from_name: value.from_name,
          from_surname: value.from_surname,
          user_email: value.user_email,
          subject: value.subject,
          message: value.message,
        },
      }
      createEmail(payload)
      console.log("Submit Payload:", payload)
    },
  })

  const { mutate: createEmail } = useMutation({
    mutationFn: async ({
      service_id,
      template_id,
      user_id,
      template_params,
    }: FormCreationRequest) => {
      const payload: FormCreationRequest = {
        service_id,
        template_id,
        user_id,
        template_params,
      }
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", payload)
    },
    onError: (error) => {
      return toast({
        title: "Something went wrong.",
        description: `Email could not be sent. Please try again.`,
        variant: "destructive",
      })
    },
    onSuccess: () => {
      form.reset()
      return toast({
        title: "Success!",
        description: "Your email has been sent successfully!",
      })
    },
  })

  return (
    <section
      id="contactus"
      className="z-40 mx-auto h-auto w-full bg-slate-400/10 p-5 md:p-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className="mx-auto mt-10 h-auto w-full"
      >
        <h1 className="mb-5 font-prompt text-2xl font-bold md:text-4xl">
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
          <p className="text-sm md:text-lg">
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
            <form
              onSubmit={(event) => {
                event.preventDefault()
                event.stopPropagation()
                void form.handleSubmit()
              }}
              className="space-y-8 p-5"
            >
              <div className="grid grid-cols-2 gap-5">
                <form.Field
                  name="from_name"
                  validators={{
                    onChange: fromName,
                    onChangeAsyncDebounceMs: onChangeAsyncDebounceMs,
                    onChangeAsync: onChangeAsync,
                  }}
                >
                  {(field) => (
                    <div className="relative w-full flex-col">
                      <Input
                        id={field.name}
                        placeholder="Name"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="w-full text-primary"
                        required
                      />
                      <FieldInfo field={field} />
                    </div>
                  )}
                </form.Field>

                <form.Field
                  name="from_surname"
                  validators={{
                    onChange: fromSurname,
                    onChangeAsyncDebounceMs: onChangeAsyncDebounceMs,
                    onChangeAsync: onChangeAsync,
                  }}
                >
                  {(field) => (
                    <div className="relative w-full flex-col">
                      <Input
                        id={field.name}
                        placeholder="Surname"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="w-full text-primary"
                        required
                      />
                      <FieldInfo field={field} />
                    </div>
                  )}
                </form.Field>
              </div>

              <form.Field
                name="user_email"
                validators={{
                  onChange: userEmail,
                  onChangeAsyncDebounceMs: onChangeAsyncDebounceMs,
                  onChangeAsync: onChangeAsync,
                }}
              >
                {(field) => (
                  <div className="relative w-full flex-col">
                    <Input
                      type="email"
                      placeholder="@"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="w-full text-primary"
                      required
                    />
                    <FieldInfo field={field} />
                  </div>
                )}
              </form.Field>

              <form.Field
                name="subject"
                validators={{
                  onChange: subject,
                  onChangeAsyncDebounceMs: onChangeAsyncDebounceMs,
                  onChangeAsync: onChangeAsync,
                }}
              >
                {(field) => (
                  <div className="relative w-full flex-col">
                    <Input
                      id={field.name}
                      placeholder="Subject"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="w-full text-primary"
                      required
                    />
                    <FieldInfo field={field} />
                  </div>
                )}
              </form.Field>

              <form.Field
                name="message"
                validators={{
                  onChange: message,
                  onChangeAsyncDebounceMs: onChangeAsyncDebounceMs,
                  onChangeAsync: onChangeAsync,
                }}
              >
                {(field) => (
                  <div className="relative w-full flex-col">
                    <Textarea
                      id={field.name}
                      placeholder="Message.."
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="h-32 w-full text-primary"
                      required
                    />
                    <TextAreaInfo field={field} />
                  </div>
                )}
              </form.Field>
              <Button
                type="submit"
                variant="outline"
                className="mt-10 w-32 border-2 border-transparent font-bold hover:border-amber-500"
              >
                SEND
              </Button>
            </form>
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
                <div className="flex flex-col gap-3">
                  <p>Plot 243 | Farm 23 | Butterfield Road</p>
                  <p>Kragga Kamma | Gqeberha</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
