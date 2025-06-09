import React from 'react';

const products = [
  {
    name: "Graphic Design",
    department: "English Department",
    image: "/assets/IceCream.png",
    originalPrice: 16.48,
    discountedPrice: 6.48,
  },
  {
    name: "Graphic Design",
    department: "English Department",
    image: "/assets/apple.jpg",
    originalPrice: 16.48,
    discountedPrice: 6.48,
  },
  {
    name: "Graphic Design",
    department: "English Department",
    image: "/assets/ham.jpg",
    originalPrice: 16.48,
    discountedPrice: 6.48,
  },
];

export default function ShopCard2() {
  return (
    <div className="w-full max-w-xs mx-auto border-l border-r border-blue-500">

      <div className="text-center py-4">
        <h2 className="font-bold">BESTSELLER PRODUCTS</h2>
        <div className="flex justify-center gap-4 mt-2 text-sm text-gray-600">
          <span className="text-blue-500 font-semibold">Men</span>
          <span>Women</span>
          <span>Accessories</span>
        </div>

        <div className="flex justify-center gap-2 mt-2">
          <button className="border px-2 py-1 rounded">{'<'}</button>
          <button className="border px-2 py-1 rounded">{'>'}</button>
        </div>
      </div>

    
      <div className="space-y-6 px-4 pb-4">
        {products.map((product, idx) => (
          <div key={idx} className="text-center">
            <img src={product.image} alt={product.name} className="mx-auto h-32 object-contain" />
            <p className="font-semibold text-xs mt-2">{product.name}</p>
            <p className="text-xs text-gray-500">{product.department}</p>
            <p className="text-sm">
              <span className="line-through text-gray-400">${product.originalPrice}</span>{' '}
              <span className="text-green-600 font-semibold">${product.discountedPrice}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="bg-blue-400 aspect-square flex items-center justify-center">
        <div>FURNITURE</div>
        <div>5 items</div>
        <img src="/assets/donut.jpg" alt="" className="h-full object-cover" />
      </div>
    </div>
  );
}
