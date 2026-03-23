import { Metadata } from "next"
import Page from "../page"
import Main from "@/components/home/main"

export const metadata: Metadata = {
  title: "Shafe Alam | Android & Full-Stack Developer | Fintech Specialist",
  description:
    "Full-stack developer specializing in Android (Kotlin), NestJS, and Next.js. Combining 10 years of Chief Accounting expertise with modern software engineering to build high-precision business solutions.",
  keywords: [
    "Android Developer",
    "Full-Stack Developer",
    "Kotlin",
    "Jetpack Compose",
    "NestJS",
    "Next.js",
    "Fintech Developer",
    "ERP Systems",
    "Software Engineer Dhaka",
  ],
  authors: [{ name: "Shafe Alam" }],
  openGraph: {
    title: "Shafe Alam | Android & Full-Stack Developer",
    description:
      "Building high-performance Android apps and scalable backends with a decade of financial precision.",
    url: "https://yourportfolio.com", // Replace with your actual domain
    siteName: "Shafe Alam Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Create a sage/emerald themed preview image
        width: 1200,
        height: 630,
        alt: "Shafe Alam - Android & Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shafe Alam | Android & Full-Stack Developer",
    description:
      "Fintech-minded Full-Stack Developer specializing in Android and NestJS.",
    images: ["/og-image.jpg"],
  },
}
export default function Home() {
  return (
    <Page>
      <Main />
    </Page>
  )
}
