import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"



import { Poppins } from 'next/font/google';

// Initialize Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: '600',
});

export default function App({ Component, pageProps : { session, ...pageProps } }) {
  return (
    <main className={poppins.className}>
      <SessionProvider session={session}>
      <Component {...pageProps} />
      </SessionProvider>
    </main>
  );
}
