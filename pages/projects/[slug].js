import Head from "next/head";
import Link from "next/link";
import { HeroObject } from "@/components/hero/HeroObject";
import { Layout } from "@/components/layout/Layout";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import styles from "@/components/sections/ProjectPage.module.css";

export default function ProjectPage({ slug }) {
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const title = `${project.title} — ${site.name}`;
  const url = `${site.url}/projects/${project.slug}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={project.description} />
        <meta name="author" content={site.name} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={project.description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${site.url}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={project.description} />
      </Head>
      <Layout center={<Link href="/#projects">All projects</Link>}>
        <article className={styles.page}>
          <div className={styles.copy}>
            <h1>{project.title}</h1>
            <p className={styles.tech}>{project.tech.join(" - ")}</p>
            <p className={styles.description}>{project.description}</p>
            {project.details.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <h2>
              Project Links<span aria-hidden="true">.</span>
            </h2>
            <p className={styles.links}>
              <a href={project.code} target="_blank" rel="noreferrer">
                source code
              </a>
              {project.projectLink ? (
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  live project
                </a>
              ) : null}
            </p>
            <nav className={styles.pager} aria-label="More projects">
              <Link href={`/projects/${previous.slug}`}>← {previous.title}</Link>
              <Link href={`/projects/${next.slug}`}>{next.title} →</Link>
            </nav>
          </div>
          <div className={styles.stage}>
            <div className={styles.object}>
              <HeroObject items={projects} selectedIndex={index} />
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
}

export const getStaticPaths = () => ({
  paths: projects.map((project) => ({ params: { slug: project.slug } })),
  fallback: false,
});

export const getStaticProps = ({ params }) => ({
  props: { slug: params.slug },
});
