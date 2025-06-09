import React from 'react';

export default function WoCard() {
  return (
    <div className='flex flex-col items-center'>
        <div className='w-[1069px] h-auto flex flex-row justify-center items-center'>
            <div className='w-[401px] h-[784px]'>
                <h3>MOST POPULAR</h3>
                <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                <img src="/assets/caramel.png" alt="meatBox"/>
                <p>English Department</p>
                <span>$16.48</span>{' '}
                <span>$6.48</span>
            </div>

            <div className="w-[674px] h-[784px]">
                <img src="/assets/womenSand.jpg" alt="Hero" className="h-full w-full object-cover" />
            </div>
        </div>
    </div>
  );
}
