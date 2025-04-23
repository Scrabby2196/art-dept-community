import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Art Department Community</title>
        <meta name="description" content="Community for Bollywood art department professionals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to the Art Department Community</h1>
        <p>This is a space for Bollywood movie and ad film industry professionals to connect, share, and collaborate!</p>
        <a href="/posts">Check out the latest posts</a>
      </main>

      <footer>
        <p>&copy; 2025 Art Dept. Community</p>
      </footer>
    </div>
  )
}
