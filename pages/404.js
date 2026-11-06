import Head from "next/head";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import styles from "@/components/sections/NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found — Hetang Mehta</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Layout>
        <div className={styles.page}>
          <div className={styles.circle}>
            <h1>404</h1>
            <p>Nothing on the dial here.</p>
            <Link href="/">Back home</Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
