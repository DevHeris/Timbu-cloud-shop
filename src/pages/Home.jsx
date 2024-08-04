import { useState } from 'react';

function Home() {
  const [filter, setFilter] = useState('Default');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    // Apply filter logic here, e.g., sorting the products based on the selected filter
  };

  return (
    <section className="px-5 py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Featured Product</h2>
        <div className="relative">
          <select
            value={filter}
            onChange={handleFilterChange}
            className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none"
          >
            <option value="Default">Default</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
        </div>
      </div>
      {/* Product list goes here */}
    </section>
  );
}

export default Home;
