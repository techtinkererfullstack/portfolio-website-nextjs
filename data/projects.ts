export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  slug: string
  image?: string
  liveUrl?: string
  codeUrl?: string
  detailedDescription?: string
  features?: string[]
  technologies?: string[]
  categorySlug?: string
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Distribution Management System",
    description: "An enterprise-grade DMS for high-staff automation.",
    tags: ["Next.js", "NestJS", "Kotlin"],
    slug: "dms-project",
    image: "/dms-screenshot.png",
    liveUrl: "#",
    codeUrl: "#",
    categorySlug: "Mobile",
    detailedDescription:
      "A comprehensive distribution management system built with modern web technologies to automate high-staff operations. Features include real-time inventory tracking, automated order processing, and advanced analytics dashboard.",
    features: [
      "Real-time inventory management",
      "Automated order processing",
      "Advanced analytics dashboard",
      "Multi-user role management",
      "API integrations",
    ],
    technologies: ["Next.js", "NestJS", "Kotlin", "PostgreSQL", "Redis"],
  },
  {
    id: "2",
    title: "Unique Fragrance Dashboard",
    description: "E-commerce admin panel for perfume brand management.",
    tags: ["React", "Tailwind", "Emerald UI"],
    slug: "perfume-admin",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1ZjubHpL1a6i6hpEoPFKsT_VYWYsWHuuSh9JqCofAMNa1D8roarY6gCrby_biriSqrYv_gZ2TmwdjlyOB8_V9pHsLsDlqId7pOhrN2cudBRtHeyaJFa0OZvVFGS0uX7CLAOPLt8yRQ5rD5U-CJIFnFWgGmkiA1tJrb4mkg1rcn0DkpWDOEQkVA8gW1GdW-7hwdqcCl03L-aB9RI1ID5zpElJHaLbnhCNga4OHu9-37sF3l1BEbXNjpp1ZKQwW-Nrki7CkNFquObI",
    categorySlug: "Backend",
    liveUrl: "#",
    codeUrl: "#",
    detailedDescription:
      "A sophisticated admin dashboard for managing an e-commerce perfume brand. Includes product catalog management, order tracking, customer analytics, and marketing tools.",
    features: [
      "Product catalog management",
      "Order tracking and fulfillment",
      "Customer analytics",
      "Marketing campaign tools",
      "Inventory synchronization",
    ],
    technologies: ["React", "Tailwind CSS", "Emerald UI", "Node.js", "MongoDB"],
  },
  {
    id: "3",
    title: "Unique Fragrance Dashboard",
    description: "E-commerce admin panel for perfume brand management.",
    tags: ["React", "Tailwind", "Emerald UI"],
    slug: "perfume-admin",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1ZjubHpL1a6i6hpEoPFKsT_VYWYsWHuuSh9JqCofAMNa1D8roarY6gCrby_biriSqrYv_gZ2TmwdjlyOB8_V9pHsLsDlqId7pOhrN2cudBRtHeyaJFa0OZvVFGS0uX7CLAOPLt8yRQ5rD5U-CJIFnFWgGmkiA1tJrb4mkg1rcn0DkpWDOEQkVA8gW1GdW-7hwdqcCl03L-aB9RI1ID5zpElJHaLbnhCNga4OHu9-37sF3l1BEbXNjpp1ZKQwW-Nrki7CkNFquObI",
    liveUrl: "#",
    codeUrl: "#",
    detailedDescription:
      "A sophisticated admin dashboard for managing an e-commerce perfume brand. Includes product catalog management, order tracking, customer analytics, and marketing tools.",
    features: [
      "Product catalog management",
      "Order tracking and fulfillment",
      "Customer analytics",
      "Marketing campaign tools",
      "Inventory synchronization",
    ],
    technologies: ["React", "Tailwind CSS", "Emerald UI", "Node.js", "MongoDB"],
  },
  {
    id: "4",
    title: "Unique Fragrance Dashboard",
    description: "E-commerce admin panel for perfume brand management.",
    tags: ["React", "Tailwind", "Emerald UI"],
    slug: "perfume-admin",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1ZjubHpL1a6i6hpEoPFKsT_VYWYsWHuuSh9JqCofAMNa1D8roarY6gCrby_biriSqrYv_gZ2TmwdjlyOB8_V9pHsLsDlqId7pOhrN2cudBRtHeyaJFa0OZvVFGS0uX7CLAOPLt8yRQ5rD5U-CJIFnFWgGmkiA1tJrb4mkg1rcn0DkpWDOEQkVA8gW1GdW-7hwdqcCl03L-aB9RI1ID5zpElJHaLbnhCNga4OHu9-37sF3l1BEbXNjpp1ZKQwW-Nrki7CkNFquObI",
    liveUrl: "#",
    codeUrl: "#",
    detailedDescription:
      "A sophisticated admin dashboard for managing an e-commerce perfume brand. Includes product catalog management, order tracking, customer analytics, and marketing tools.",
    features: [
      "Product catalog management",
      "Order tracking and fulfillment",
      "Customer analytics",
      "Marketing campaign tools",
      "Inventory synchronization",
    ],
    technologies: ["React", "Tailwind CSS", "Emerald UI", "Node.js", "MongoDB"],
  },
  {
    id: "5",
    title: "Unique Fragrance Dashboard",
    description: "E-commerce admin panel for perfume brand management.",
    tags: ["React", "Tailwind", "Emerald UI"],
    slug: "perfume-admin",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1ZjubHpL1a6i6hpEoPFKsT_VYWYsWHuuSh9JqCofAMNa1D8roarY6gCrby_biriSqrYv_gZ2TmwdjlyOB8_V9pHsLsDlqId7pOhrN2cudBRtHeyaJFa0OZvVFGS0uX7CLAOPLt8yRQ5rD5U-CJIFnFWgGmkiA1tJrb4mkg1rcn0DkpWDOEQkVA8gW1GdW-7hwdqcCl03L-aB9RI1ID5zpElJHaLbnhCNga4OHu9-37sF3l1BEbXNjpp1ZKQwW-Nrki7CkNFquObI",
    liveUrl: "#",
    codeUrl: "#",
    detailedDescription:
      "A sophisticated admin dashboard for managing an e-commerce perfume brand. Includes product catalog management, order tracking, customer analytics, and marketing tools.",
    features: [
      "Product catalog management",
      "Order tracking and fulfillment",
      "Customer analytics",
      "Marketing campaign tools",
      "Inventory synchronization",
    ],
    technologies: ["React", "Tailwind CSS", "Emerald UI", "Node.js", "MongoDB"],
  },
  {
    id: "6",
    title: "Unique Fragrance Dashboard",
    description: "E-commerce admin panel for perfume brand management.",
    tags: ["React", "Tailwind", "Emerald UI"],
    slug: "perfume-admin",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1ZjubHpL1a6i6hpEoPFKsT_VYWYsWHuuSh9JqCofAMNa1D8roarY6gCrby_biriSqrYv_gZ2TmwdjlyOB8_V9pHsLsDlqId7pOhrN2cudBRtHeyaJFa0OZvVFGS0uX7CLAOPLt8yRQ5rD5U-CJIFnFWgGmkiA1tJrb4mkg1rcn0DkpWDOEQkVA8gW1GdW-7hwdqcCl03L-aB9RI1ID5zpElJHaLbnhCNga4OHu9-37sF3l1BEbXNjpp1ZKQwW-Nrki7CkNFquObI",
    liveUrl: "#",
    codeUrl: "#",
    detailedDescription:
      "A sophisticated admin dashboard for managing an e-commerce perfume brand. Includes product catalog management, order tracking, customer analytics, and marketing tools.",
    features: [
      "Product catalog management",
      "Order tracking and fulfillment",
      "Customer analytics",
      "Marketing campaign tools",
      "Inventory synchronization",
    ],
    technologies: ["React", "Tailwind CSS", "Emerald UI", "Node.js", "MongoDB"],
  },
  {
    id: "7",
    title: "Unique Fragrance Dashboard",
    description: "E-commerce admin panel for perfume brand management.",
    tags: ["React", "Tailwind", "Emerald UI"],
    slug: "perfume-admin",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1ZjubHpL1a6i6hpEoPFKsT_VYWYsWHuuSh9JqCofAMNa1D8roarY6gCrby_biriSqrYv_gZ2TmwdjlyOB8_V9pHsLsDlqId7pOhrN2cudBRtHeyaJFa0OZvVFGS0uX7CLAOPLt8yRQ5rD5U-CJIFnFWgGmkiA1tJrb4mkg1rcn0DkpWDOEQkVA8gW1GdW-7hwdqcCl03L-aB9RI1ID5zpElJHaLbnhCNga4OHu9-37sF3l1BEbXNjpp1ZKQwW-Nrki7CkNFquObI",
    liveUrl: "#",
    codeUrl: "#",
    detailedDescription:
      "A sophisticated admin dashboard for managing an e-commerce perfume brand. Includes product catalog management, order tracking, customer analytics, and marketing tools.",
    features: [
      "Product catalog management",
      "Order tracking and fulfillment",
      "Customer analytics",
      "Marketing campaign tools",
      "Inventory synchronization",
    ],
    technologies: ["React", "Tailwind CSS", "Emerald UI", "Node.js", "MongoDB"],
  },
  {
    id: "8",
    title: "Unique Fragrance Dashboard",
    description: "E-commerce admin panel for perfume brand management.",
    tags: ["React", "Tailwind", "Emerald UI"],
    slug: "perfume-admin",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1ZjubHpL1a6i6hpEoPFKsT_VYWYsWHuuSh9JqCofAMNa1D8roarY6gCrby_biriSqrYv_gZ2TmwdjlyOB8_V9pHsLsDlqId7pOhrN2cudBRtHeyaJFa0OZvVFGS0uX7CLAOPLt8yRQ5rD5U-CJIFnFWgGmkiA1tJrb4mkg1rcn0DkpWDOEQkVA8gW1GdW-7hwdqcCl03L-aB9RI1ID5zpElJHaLbnhCNga4OHu9-37sF3l1BEbXNjpp1ZKQwW-Nrki7CkNFquObI",
    liveUrl: "#",
    codeUrl: "#",
    detailedDescription:
      "A sophisticated admin dashboard for managing an e-commerce perfume brand. Includes product catalog management, order tracking, customer analytics, and marketing tools.",
    features: [
      "Product catalog management",
      "Order tracking and fulfillment",
      "Customer analytics",
      "Marketing campaign tools",
      "Inventory synchronization",
    ],
    technologies: ["React", "Tailwind CSS", "Emerald UI", "Node.js", "MongoDB"],
  },
]
