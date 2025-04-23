import Link from 'next/link'

export default function Posts() {
  return (
    <div>
      <h1>Community Posts</h1>
      <p>Posts by Bollywood art department professionals</p>
      <ul>
        <li><Link href="/post/1">Example Post 1</Link></li>
        <li><Link href="/post/2">Example Post 2</Link></li>
      </ul>
    </div>
  )
}
