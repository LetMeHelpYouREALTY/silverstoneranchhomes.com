'use server'

import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormState = {
  success?: boolean
  error?: string
  errors?: {
    name?: string[]
    email?: string[]
    phone?: string[]
    message?: string[]
  }
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Validate form data
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      error: 'Please check the form for errors',
    }
  }

  const { name, email, phone, message } = validatedFields.data

  try {
    // TODO: Replace with actual email sending logic
    // Example: await sendEmail({ to: 'agent@example.com', from: email, subject: `Contact from ${name}`, body: message })

    // For now, log the submission
    console.log('Contact form submission:', { name, email, phone, message })

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return {
      success: true,
    }
  } catch (error) {
    return {
      error: 'Failed to send message. Please try again.',
    }
  }
}
