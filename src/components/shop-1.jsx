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

export default function shopCard1() {
  return (
    <div className="w-full flex flex-row justify-center gap-10 border-blue-500">

      <div className="bg-yellow-400 flex flex-col items-baseline justify-baseline">
        <div>FURNITURE</div>
        <div>5 items</div>
        <img src="/assets/bgyelpic.jpg" alt="Hero" className="h-full object-cover" />
      </div>

      <div>
        <div className="py-4 flex flex-row gap-10">
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

        <div className="flex flex-row flex-wrap w-[60%] justify-center">
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
      </div>
    </div>
  );
}
