export default function BlogDetails({ params }: { params: { slug: string } }) {
  const { slug } = params
  return (
    <div>
      <h1>Details for: {slug}</h1>
    </div>
  )
}
