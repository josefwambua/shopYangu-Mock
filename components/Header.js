import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const { pathname } = router;

  const active = 'text-green-400 transition p-3 bg-gray-200 rounded-md';
  const inactive = 'text-gray-900 transition';

  if (!session) {
    return null; // or a loading spinner, or fallback UI if session is not available
  }

  return (
    <header className="bg-white border-b sticky top-0">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a
              className="block text-teal-600 rounded-full p-2 border-l-blue-700 hover:bg-teal-100 transition-all"
              href="#"
            >
              <span className="sr-only">Home</span>
              <img
                src="/assets/images/logo.svg"
                alt="Home"
                className="h-10 w-10 rounded-full object-cover"
              />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-lg">
                <li>
                  <Link
                    className={pathname === '/' ? active : inactive}
                    href="#"
                  >
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link
                    className={pathname === '/shop' ? active : inactive} // Assuming this is the correct path
                    href="#"
                  >
                    Shop
                  </Link>
                </li>

                <li>
                  <Link
                    className={pathname === '/products' ? active : inactive} // Assuming this is the correct path
                    href="/Products"
                  >
                    Products
                  </Link>
                </li>

                <li>
                  <Link
                    className={pathname === '/categories' ? active : inactive} // Assuming this is the correct path
                    href="#"
                  >
                    Categories
                  </Link>
                </li>

                <li>
                  <Link
                    className={pathname === '/orders' ? active : inactive} // Assuming this is the correct path
                    href="#"
                  >
                    Orders
                  </Link>
                </li>

                <li>
                  <Link
                    className={pathname === '/settings' ? active : inactive} // Assuming this is the correct path
                    href="#"
                  >
                    Settings
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <div className="h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src={session.user.image}
                    alt="User Image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
