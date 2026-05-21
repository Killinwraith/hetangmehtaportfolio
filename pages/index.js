import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Hetang Mehta — Software Engineer</title>
        <meta
          name="description"
          content="Hetang Mehta is a Software Engineer and Computer Engineering student at the University of Alberta, working across full-stack, machine learning, and cloud infrastructure."
        />
        <meta name="author" content="Hetang Mehta" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://hetangmehta.com" />

        {/* Open Graph — link previews on LinkedIn, Slack, iMessage, etc. */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hetang Mehta — Software Engineer" />
        <meta
          property="og:description"
          content="Computer Engineering student at the University of Alberta. Full-stack, ML, and cloud infrastructure."
        />
        <meta property="og:url" content="https://hetangmehta.com" />
        <meta
          property="og:image"
          content="https://hetangmehta.com/og-image.png"
        />

        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hetang Mehta — Software Engineer" />
        <meta
          name="twitter:description"
          content="Computer Engineering student at the University of Alberta. Full-stack, ML, and cloud infrastructure."
        />
      </Head>
      <Home />
    </>
  );
}
