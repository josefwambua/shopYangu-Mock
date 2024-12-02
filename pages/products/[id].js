import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductDetailsPage() {
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

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-screen-md mx-auto py-8">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="mt-2 text-gray-700">Category: {product.category}</p>
      <p className="mt-2 text-gray-700">Price: ${product.price}</p>
      <p className="mt-4 text-gray-700">{product.description}</p>
    </div>
  );
}
