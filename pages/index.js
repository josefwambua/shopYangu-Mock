import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center max-w-4xl m-auto">
        <p>Its about to go down</p>
        <h1 className="text-4xl font-bold max-w-lg text-center">
          Welcome to shop Yangu Admin Page
        </h1>
        <p className="font-medium my-4">Create an account</p>

        <button
          className="inline-block rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          onClick={() => signIn('google')}
        >
          Sign in With Google
        </button>
      </div>
    </>
  );
}
