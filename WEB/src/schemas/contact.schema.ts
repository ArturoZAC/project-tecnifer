import z from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "El nombre es requerido"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(7, "Teléfono inválido"),
  message: z.string().min(5, "Escribe un mensaje"),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
