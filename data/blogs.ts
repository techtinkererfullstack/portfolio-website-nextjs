export interface Blog {
  id: string
  title: string
  description: string
  content: string
  slug: string
  image?: string
  author: string
  publishedAt: string
  readTime: string
  category: string
  tags: string[]
  featured?: boolean
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Mastering React Server Components",
    description:
      "Deep dive into the architecture of React Server Components, exploring how they improve performance by reducing client-side JavaScript.",
    content: `# Mastering React Server Components

React Server Components represent a paradigm shift in how we build React applications. By moving component logic to the server, we can significantly improve performance and user experience.

## What are Server Components?

Server Components are a new type of React component that runs on the server instead of the client. They allow you to:

- Reduce bundle size
- Improve initial page load times
- Access server-side resources directly
- Simplify data fetching

## Benefits

### Performance Improvements
Server Components can render on the server, reducing the amount of JavaScript sent to the client. This leads to faster initial page loads and better Core Web Vitals scores.

### Better SEO
Since Server Components render on the server, search engines can easily crawl and index your content, improving your SEO rankings.

### Simplified Data Fetching
You can fetch data directly in your components without worrying about client-side limitations.

## Implementation

\`\`\`tsx
// Server Component
async function BlogPost({ slug }: { slug: string }) {
  const post = await fetchBlogPost(slug)

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}
\`\`\`

## Conclusion

React Server Components are a powerful addition to the React ecosystem. They provide significant performance benefits and simplify the development experience.`,
    slug: "mastering-react-server-components",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    author: "Shafe Alam",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "Development",
    tags: ["React", "Server Components", "Performance"],
    featured: true,
  },
  {
    id: "2",
    title: "Building Scalable APIs with Node.js",
    description:
      "Learn how to design and implement robust, scalable APIs using Node.js, Express, and modern best practices.",
    content: `# Building Scalable APIs with Node.js

Creating scalable APIs is crucial for modern web applications. Node.js provides an excellent foundation for building high-performance backend services.

## Architecture Principles

### RESTful Design
Follow REST principles to create intuitive and maintainable APIs.

### Middleware Architecture
Use middleware to handle cross-cutting concerns like authentication, logging, and error handling.

### Database Optimization
Implement proper indexing, caching, and connection pooling for optimal performance.

## Implementation Example

\`\`\`javascript
const express = require('express')
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Routes
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
\`\`\`

## Best Practices

- Use environment variables for configuration
- Implement proper error handling
- Add request validation
- Use rate limiting
- Implement caching strategies

## Conclusion

Building scalable APIs requires careful planning and adherence to best practices. Node.js provides the tools needed to create robust backend services.`,
    slug: "building-scalable-apis-nodejs",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    author: "Shafe Alam",
    publishedAt: "2024-01-10",
    readTime: "12 min read",
    category: "Backend",
    tags: ["Node.js", "API", "Express", "Scalability"],
    featured: true,
  },
  {
    id: "3",
    title: "Modern CSS Techniques for 2024",
    description:
      "Explore the latest CSS features and techniques that are shaping modern web development.",
    content: `# Modern CSS Techniques for 2024

CSS has evolved significantly, offering powerful new features that make styling more efficient and maintainable.

## Container Queries

Container queries allow you to style elements based on their container's size, not just the viewport.

\`\`\`css
.card-container {
  container-type: inline-size;
}

.card {
  display: grid;
  gap: 1rem;
}

@container (min-width: 400px) {
  .card {
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

## CSS Grid and Subgrid

Advanced layout techniques using CSS Grid's subgrid feature for complex layouts.

## Custom Properties and Design Tokens

Using CSS custom properties to create maintainable design systems.

## Conclusion

Modern CSS provides powerful tools for creating responsive, maintainable stylesheets.`,
    slug: "modern-css-techniques-2024",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    author: "Shafe Alam",
    publishedAt: "2024-01-05",
    readTime: "10 min read",
    category: "Frontend",
    tags: ["CSS", "Web Development", "Design"],
  },
  {
    id: "4",
    title: "TypeScript Best Practices",
    description:
      "Essential TypeScript patterns and practices for writing maintainable, type-safe code.",
    content: `# TypeScript Best Practices

TypeScript enhances JavaScript with static typing, making your code more reliable and maintainable.

## Type Definitions

Always define proper types for your data structures.

\`\`\`typescript
interface User {
  id: number
  name: string
  email: string
  createdAt: Date
}

interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}
\`\`\`

## Generic Constraints

Use generics to create reusable, type-safe components.

## Utility Types

Leverage TypeScript's built-in utility types like Partial, Pick, and Omit.

## Conclusion

Following TypeScript best practices leads to more maintainable and reliable code.`,
    slug: "typescript-best-practices",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
    author: "Shafe Alam",
    publishedAt: "2023-12-28",
    readTime: "15 min read",
    category: "Development",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
  },
  {
    id: "5",
    title: "Mobile App Development with Flutter",
    description:
      "Complete guide to building cross-platform mobile applications using Flutter and Dart.",
    content: `# Mobile App Development with Flutter

Flutter enables developers to create beautiful, natively compiled applications for mobile from a single codebase.

## Widget-Based Architecture

Flutter's widget system provides a declarative way to build UIs.

## State Management

Learn different approaches to managing application state in Flutter apps.

## Platform-Specific Code

How to write platform-specific code when needed.

## Conclusion

Flutter offers a productive way to build cross-platform mobile applications.`,
    slug: "mobile-app-development-flutter",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    author: "Shafe Alam",
    publishedAt: "2023-12-20",
    readTime: "18 min read",
    category: "Mobile",
    tags: ["Flutter", "Dart", "Mobile Development"],
  },
  {
    id: "6",
    title: "Database Design Principles",
    description:
      "Learn the fundamental principles of designing efficient and scalable databases.",
    content: `# Database Design Principles

Good database design is crucial for application performance and maintainability.

## Normalization

Understanding database normalization and when to apply it.

## Indexing Strategies

How to create effective indexes for optimal query performance.

## Relationship Modeling

Designing proper relationships between entities.

## Conclusion

Following database design principles leads to better application performance.`,
    slug: "database-design-principles",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    author: "Shafe Alam",
    publishedAt: "2023-12-15",
    readTime: "14 min read",
    category: "Backend",
    tags: ["Database", "SQL", "Design"],
  },
]
