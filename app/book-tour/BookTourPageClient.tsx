'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { trackEvent } from '@/lib/analytics'

const bookTourSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Phone number is required'),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().optional(),
})

type BookTourFormData = z.infer<typeof bookTourSchema>

export default function BookTourPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookTourFormData>({
    resolver: zodResolver(bookTourSchema),
  })

  const onSubmit = async (data: BookTourFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/book-tour', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        trackEvent('form_submission', {
          form_id: 'book-tour',
          form_name: 'Book Tour Form',
          status: 'success',
        })
        setIsSuccess(true)
        reset()
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      console.error('Error:', error)
      trackEvent('form_submission', {
        form_id: 'book-tour',
        form_name: 'Book Tour Form',
        status: 'error',
      })
      alert('Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Book a Silverstone Ranch Home Tour (89131)</h1>
        <p className="text-lg text-gray-600">Schedule a private tour of Silverstone Ranch homes and community amenities</p>
      </div>

      {isSuccess ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tour Scheduled!</h2>
          <p className="text-gray-600 mb-6">We&apos;ve received your tour request. Our team will contact you shortly to confirm your preferred date and time.</p>
          <button onClick={() => setIsSuccess(false)} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Book Another Tour
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                {...register('name')}
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone *
              </label>
              <input
                {...register('phone')}
                type="tel"
                id="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date
                </label>
                <input
                  {...register('preferredDate')}
                  type="date"
                  id="preferredDate"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Time
                </label>
                <input
                  {...register('preferredTime')}
                  type="time"
                  id="preferredTime"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Notes
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Any special requests or questions..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? 'Submitting...' : 'Book My Tour'}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
