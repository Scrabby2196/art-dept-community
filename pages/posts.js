import Link from 'next/link'

export default function Posts() {
  return (
    <div>
      <h1>Community Posts</h1>
      <p>Browse and engage with posts from other professionals in the Bollywood art department!</p>
      {/* Here you could dynamically load posts from a database like Supabase */}
      <ul>
        <li><Link href="/post/1">Post 1</Link></li>
        <li><Link href="/post/2">Post 2</Link></li>
      </ul>
    </div>
  )
}
