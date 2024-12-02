import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";

// Initialize Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <main className={`${poppins.className} mx-auto max-w-screen-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8`}>
      <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  );
}
