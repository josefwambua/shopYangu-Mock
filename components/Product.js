export default function Product() {
    const handleSubmit = async (event) => {
      event.preventDefault(); // Prevent page reload
      const formData = new FormData(event.target);
  
      const productData = {
        title: formData.get("productTitle"),
        category: formData.get("productCategory"),
        image: formData.get("productImage"),
        description: formData.get("productDescription"),
        price: parseFloat(formData.get("productPrice")),
      };
  
      try {
        const response = await fetch('/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productData),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Product successfully created:', data);
          alert('Product created successfully');
        } else {
          const errorData = await response.json();
          console.error('Error creating product:', errorData);
          alert('Error creating product');
        }
      } catch (error) {
        console.error('Request failed:', error);
        alert('An error occurred. Please try again.');
      }
    };
  
    return (
      <>
        <div className="mx-auto my-4 max-w-screen-sm">
          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="mx-auto my-4">
              <label
                htmlFor="productTitle"
                className="mb-1 block text-lg font-medium text-gray-700 py-2"
              >
                Title
              </label>
              <input
                type="text"
                id="productTitle"
                name="productTitle"
                className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 p-3"
                placeholder="Product Title"
                required
              />
            </div>
  
            {/* Select Category */}
            <div className="mx-auto my-4">
              <label
                htmlFor="productCategory"
                className="mb-1 block text-lg font-medium text-gray-700 py-2"
              >
                Select Category
              </label>
              <select
                id="productCategory"
                name="productCategory"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                required
              >
                <option value="">Select a Category</option>
                <option value="japanese">Japanese</option>
                <option value="chinese">Chinese</option>
              </select>
            </div>
  
            {/* Upload Image */}
            <div className="mx-auto">
              <label
                htmlFor="productImage"
                className="mb-1 block text-lg font-medium text-gray-700 py-2"
              >
                Image URL
              </label>
              <input
                type="url"
                id="productImage"
                name="productImage"
                className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 p-3"
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>
  
            {/* Description */}
            <div className="mx-auto my-4">
              <label
                htmlFor="productDescription"
                className="mb-1 block text-lg font-medium text-gray-700 py-2"
              >
                Description
              </label>
              <textarea
                id="productDescription"
                name="productDescription"
                rows={4}
                className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 p-3"
                placeholder="Product Description"
                required
              ></textarea>
            </div>
  
            {/* Price */}
            <div className="mx-auto my-4">
              <label
                htmlFor="productPrice"
                className="mb-1 block text-lg font-medium text-gray-700 py-2"
              >
                Price
              </label>
              <input
                type="number"
                id="productPrice"
                name="productPrice"
                className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 p-3"
                placeholder="Price"
                required
                min="0"
                step="0.01"
              />
            </div>
  
            {/* Submit Button */}
            <div className="mx-auto my-4">
              <button
                type="submit"
                className="w-full rounded-md bg-primary-500 py-3 px-4 text-white shadow hover:bg-primary-700 focus:outline-none focus:ring focus:ring-primary-300 focus:ring-opacity-50"
              >
                Submit Product
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
  