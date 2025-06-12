import React from 'react';

export default function WoCard() {
  return (
    <div className='w-full flex flex-col items-center mt-5'>
        <div className='w-full h-auto flex flex-row justify-center items-stretch'>
            <div className='w-1/2 flex flex-col justify-center items-center'>
                <h3>MOST POPULAR</h3>
                <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                <img src="/assets/caramel.png" alt="meatBox"/>
                <p>English Department</p>

                <div className="flex gap-2 items-center justify-center mt-4">
                  <img className="w-5 h-5" src="./assets/downloadicon.png" alt="" />
                  <label className="text-[14px] font-bold text-[#737373]" htmlFor="">
                    15
                  </label>
                  <label className="text-[14px] font-bold text-[#737373]" htmlFor="">
                    Sales
                  </label>
                </div>

                <div>
                  <span className="line-through text-gray-400">$16.48</span>{' '}
                  <span className="text-green-600 font-semibold">$6.48</span>
                </div>

                <div className='flex flex-row justify-center  gap-2'>
                  <span className='w-3 h-3 rounded-full bg-amber-950'></span>
                  <span className='w-3 h-3 rounded-full bg-amber-950'></span>
                  <span className='w-3 h-3 rounded-full bg-amber-950'></span>
                  <span className='w-3 h-3 rounded-full bg-amber-950'></span>
                </div>

                
            </div>

            <div className="w-1/2 h-auto flex items-stretch">
                <img src="/assets/womenSand.jpg" alt="Hero" className="h-full w-full object-cover" />
            </div>
        </div>
    </div>
  );
}
