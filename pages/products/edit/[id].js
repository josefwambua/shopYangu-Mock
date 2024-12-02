import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function EditProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedProduct = {
      title: event.target.title.value,
      category: event.target.category.value,
      price: event.target.price.value,
      description: event.target.description.value,
    };

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });
      if (res.ok) {
        alert("Product updated successfully.");
        router.push("/products");
      } else {
        alert("Failed to update product.");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <label className="block mb-2">
        Title:
        <input
          type="text"
          name="title"
          defaultValue={product.title}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </label>
      <label className="block mb-2">
        Category:
        <input
          type="text"
          name="category"
          defaultValue={product.category}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </label>
      <label className="block mb-2">
        Price:
        <input
          type="number"
          name="price"
          defaultValue={product.price}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </label>
      <label className="block mb-2">
        Description:
        <textarea
          name="description"
          defaultValue={product.description}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Update Product
      </button>
    </form>
  );
}
