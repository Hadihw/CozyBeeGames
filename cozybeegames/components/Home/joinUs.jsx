'use client'

import { Button } from "@/components/ui/button"

export default function JoinOurHive() {
  return (
    <section className="text-center mb-16 bg-muted p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6">Join Our Hive</h2>
      <p className="mb-6 text-lg">
        Become part of our buzzing community! Share your creations, make new friends, and stay updated on all things cozy.
      </p>
      <div className="flex justify-center space-x-4">
        <Button className="bg-primaryButton text-white hover:bg-primaryButtonHover hover:scale-105 transform transition-all duration-300">
          Discord
        </Button>
        <Button className="bg-textPrimary text-white hover:bg-textPrimaryHover hover:scale-105 transform transition-all duration-300">
          Join Newsletter
        </Button>
      </div>
    </section>
  )
}
