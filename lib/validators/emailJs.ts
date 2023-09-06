import { z } from "zod"

export const FormValidator = z.object({
  from_name: z
    .string()
    .min(3, {
      message: "Your first name must be at least 3 characters long",
    })
    .max(25, {
      message: "Your first name must be less than 25 characters long",
    }),

  from_surname: z
    .string()
    .min(3, {
      message: "Your last name must be at least 3 characters long",
    })
    .max(25, {
      message: "Your last name must be less than 25 characters long",
    }),

  user_email: z.string(),

  subject: z
    .string()
    .min(3, {
      message: "The subject must be at least 3 characters long",
    })
    .max(255, {
      message: "The subject must be less than 255 characters long",
    }),
  message: z
    .string()
    .min(3, {
      message: "Your message must be at least 3 characters long",
    })
    .max(500, {
      message: "Your message must be less than 500 characters long",
    }),

})

export type FormCreationRequest = z.infer<typeof FormValidator>
