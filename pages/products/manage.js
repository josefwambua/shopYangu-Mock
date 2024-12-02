import { useState, useEffect } from "react";

export default function ManageProductsPage({ products: initialProducts }) {
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    console.log("Products fetched from API:", products); // Debugging
  }, [products]);

  const handleEdit = (id) => {
    // Redirect to edit page
    window.location.href = `/products/edit/${id}`;
  };

  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure you want to delete this product?");
    if (confirmed) {
      await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      setProducts(products.filter((product) => product._id !== id));
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Products</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(products) &&
            products.map((product) => (
              <tr key={product._id}>
                <td className="border border-gray-300 px-4 py-2">{product.title}</td>
                <td className="border border-gray-300 px-4 py-2">{product.category}</td>
                <td className="border border-gray-300 px-4 py-2 flex gap-2">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => handleEdit(product._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  if (!Array.isArray(data)) {
    console.error("API did not return an array:", data);
    return { props: { products: [] } };
  }

  return { props: { products: data } };
}
