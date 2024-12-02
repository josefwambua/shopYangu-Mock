import Link from "next/link";
import ManageProductsPage from "./manage";

export default function Products({ products }) {
  return (
    <>
      <header>
        <div className="mx-auto max-w-screen-2xl px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-black">
                Welcome, <span className="text-green-800">All Products</span>
              </h1>
              <p className="mt-1.5 text-md text-gray-900 dark:text-gray-900">
                Create a new Product
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:hover:text-gray-200"
                href="/products/new"
              >
                <span className="text-md font-medium"> Create Products </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={0.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <span className="flex items-center">
        <span className="h-px flex-1 bg-gray-700 rounded-s-md"></span>
        <span className="pl-6"></span>
      </span>

      <div className="mx-auto max-w-screen-2xl px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
        <ManageProductsPage products={products} />
      </div>
    </>
  );
}

// Fetch products from the database at build time
export async function getServerSideProps() {
  try {
    const res = await fetch("http://localhost:3000/api/products");
    const products = await res.json();

    return {
      props: { products }, // Pass products as props
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: { products: [] }, // Return an empty array on failure
    };
  }
}
