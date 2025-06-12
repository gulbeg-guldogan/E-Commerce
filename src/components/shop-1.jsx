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
    <div className="w-full flex flex-row pt-12 pb-12 gap-8 justify-center ">

      <div className="w-full h-cover md:w-1/3 md:bg-left flex px-10 py-80 bg-no-repeat bg-yellow-400" style={{
            backgroundImage: "url('/assets/bgyelpic.jpg')",
          }}>
        <div>FURNITURE</div>
        <div>5 items</div>
      </div>

      <div className='pt-20 pb-20 gap-8 w-1/2'>
        <div className="py-4 flex flex-row gap-10">
          <h2 className="font-bold">BESTSELLER PRODUCTS</h2>
          <div className="flex flex-row justify-center gap-4 mt-2 text-sm text-gray-600">
            <span className="text-blue-500 font-semibold">Men</span>
            <span>Women</span>
            <span>Accessories</span>
          </div>

          <div className="flex justify-center gap-2 mt-2">
            <button className="border px-2 py-1 rounded">{'<'}</button>
            <button className="border px-2 py-1 rounded">{'>'}</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 justify-center">
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
