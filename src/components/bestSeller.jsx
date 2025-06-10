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
    <div className='flex flex-col items-center mt-5'>
        <div className='w-[1069px] h-auto flex flex-col justify-center items-center'>

            <div>
                <p><span>BESTSELLER PRODUCTS</span></p>
            </div>

           <div className="flex flex-row gap-20 space-y-6 px-4 pb-4">
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
