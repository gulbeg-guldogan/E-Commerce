import React from 'react';

const products = [
  {
    name: "Graphic Design",
    department: "English Department",
    image: "/assets/bluemug.png",
    originalPrice: 16.48,
    discountedPrice: 6.48,
  },
  {
    name: "Graphic Design",
    department: "English Department",
    image: "/assets/blacksmth.jpg",
    originalPrice: 16.48,
    discountedPrice: 6.48,
  },
  {
    name: "Graphic Design",
    department: "English Department",
    image: "/assets/klorak.jpg",
    originalPrice: 16.48,
    discountedPrice: 6.48,
  }, 
  {
    name: "Graphic Design",
    department: "English Department",
    image: "/assets/wethersOrig.jpg",
    originalPrice: 16.48,
    discountedPrice: 6.48,
  },
];

export default function BestSeller() {
  return (
    <div className="w-full flex flex-col items-center mt-5 px-4">
      <div className="w-full max-w-screen-xl text-center mb-6">
        <p className="text-lg font-semibold">
          <span>BESTSELLER PRODUCTS</span>
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 w-full max-w-screen-xl">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto h-32 object-contain"
            />
            <p className="font-semibold text-sm mt-2">{product.name}</p>
            <p className="text-xs text-gray-500">{product.department}</p>
            <p className="text-sm">
              <span className="line-through text-gray-400">${product.originalPrice}</span>{' '}
              <span className="text-green-600 font-semibold">${product.discountedPrice}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

