"use client"

import { SignupForm } from "@/components/signup-form"
import { GalleryVerticalEndIcon } from "lucide-react"
import Image from "next/image"

export default function SignupPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/android_mirror.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          width={900}
          height={900}
          style={{
            transform: `rotate(${"180"}deg) scaleX(${""} ? -1 : 1})`,
            objectFit: "contain", // Optional: ensures the whole image is visible within the container
            transition: "transform 0.3s ease", // Optional: for smooth transitions
          }}
        />
      </div>
    </div>
  )
}
