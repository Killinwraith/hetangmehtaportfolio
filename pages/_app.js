import "@/styles/tokens.css";
import "@/styles/globals.css";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";

const sans = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export default function App({ Component, pageProps }) {
  return (
    <div id="root" className={`${sans.variable} ${mono.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
