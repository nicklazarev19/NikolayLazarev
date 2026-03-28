import { z } from "zod/v3";

export const contactSchema = z.object({
  names: z.string().min(1, "Names are required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  phone: z
    .string()
    .min(2, "Phone is required")
    .regex(
      /^\+\d+$/,
      "Phone must start with + and contain only digits (e.g. +1234567890)",
    ),
  location: z.string().optional(),
  weddingDate: z.string().min(1, "Wedding date is required"),
  weddingVenue: z.string().min(1, "Wedding venue is required"),
  photographer: z.string().optional(),
  message: z.string().min(1, "Please share some details about your wedding"),
  howFound: z.string().optional(),
  agreeToPrivacy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the processing of your personal data",
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
