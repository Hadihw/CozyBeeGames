'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Header from '@/components/home/Header'
import Footer from '@/components/home/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const onSubmit = async (data) => {
    console.log(data)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#FFFAF5] text-[#5D4037] font-serif">
      <Header />
      <main className="pt-[68px]">
        <div className="relative bg-gradient-to-b from-[#F0E6D2] to-[#FFFAF5] py-24">
          <div className="absolute inset-0 opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-[#5D4037] mb-4 drop-shadow-lg">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl text-[#8D6E63] max-w-2xl mx-auto italic">
                We'd love to hear from you!
              </p>
            </motion.div>
          </div>
          <Image
            src="/assets/images/bee-flying.png"
            alt="Flying bee"
            width={100}
            height={100}
            className="absolute bottom-0 right-0 transform translate-y-1/2"
          />
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white shadow-lg overflow-hidden mb-8">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-[#8D6E63]">Send Us a Message</h2>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-[#8D6E63] text-white p-6 rounded-lg shadow-md"
                    >
                      <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                      <p>Your message has been sent successfully. We'll get back to you soon!</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#5D4037] mb-1">Name</label>
                        <Input
                          id="name"
                          placeholder="Your Name"
                          {...register("name")}
                          className="w-full border-[#8D6E63] focus:ring-[#8D6E63] focus:border-[#8D6E63]"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#5D4037] mb-1">Email</label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your Email"
                          {...register("email")}
                          className="w-full border-[#8D6E63] focus:ring-[#8D6E63] focus:border-[#8D6E63]"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#5D4037] mb-1">Message</label>
                        <Textarea
                          id="message"
                          placeholder="Your Message"
                          {...register("message")}
                          className="w-full border-[#8D6E63] focus:ring-[#8D6E63] focus:border-[#8D6E63]"
                          rows={6}
                        />
                        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-[#8D6E63] hover:bg-[#6D4C41] text-white font-bold py-3 px-4 rounded transition duration-300"
                      >
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

