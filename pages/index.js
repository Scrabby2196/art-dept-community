import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Art Department Community</title>
        <meta name="description" content="Community for Bollywood art department professionals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>🎬 Welcome to the Art Department Community</h1>
        <p>
          This is a space for Bollywood movie and ad film industry professionals to connect,
          share, and collaborate!
        </p>

        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="/posts">📝 Community Posts</a>
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="/production-designers">🎨 Rated Production Designers</a>
          </li>
          <li>
            <a href="/jobs">📌 Job Listings</a>
          </li>
        </ul>
      </main>

      <footer style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.9rem' }}>
        <p>&copy; 2025 Art Dept. Community</p>
      </footer>
    </div>
  );
}
