import React from 'react';

export default function MostPopular() {
  return (
    <div className='flex flex-col gap-20'>
        <div className='flex flex-row pt-12 pb-12 gap-8'>
            <div className="bg-yellow-400 aspect-square flex items-center justify-center flex-1">
                <img src="/assets/yellowmoto.jpg" alt="Hero" className="h-full w-full object-cover" />
            </div>

            <div className='pt-20 pb-20 gap-8 flex flex-col flex-1'>
                <h3>MOST POPULAR</h3>
                <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                <img src="/assets/meatbox.jpg" alt="meatBox"/>
                <p>English Department</p>
                <span>$16.48</span>{' '}
                <span>$6.48</span>

            </div>
        </div>

        <div className='flex items-center justify-center gap-10'>
            <div className='flex flex-row'>
                <div className='flex flex-row align-center'>
                    <div className='text-red-700'>
                        <h1>1.</h1>
                    </div>

                    <div className='step.1-Text'>
                        <p><strong>Easy to use</strong></p>
                        <p>Things on a very small that you have any direct</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='flex flex-row align-center'>
                    <div className='text-red-700'>
                        <h1>2.</h1>
                    </div>
                    
                    <div className='step.2-Text'>
                        <p><strong>Easy to use</strong></p>
                        <p>Things on a very small that you have any direct</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='flex flex-row align-center'>
                    <div className='text-red-700'>
                        <h1>3.</h1>
                    </div>
                    <div className='step.3-Text'>
                        <p><strong>Easy to use</strong></p>
                        <p>Things on a very small that you have any direct</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='flex flex-row align-center'>
                    <div className='text-red-700'>
                        <h1>4.</h1>
                    </div>
                    <div className='step.4-Text'>
                        <p><strong>Easy to use</strong></p>
                        <p>Things on a very small that you have any direct</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
