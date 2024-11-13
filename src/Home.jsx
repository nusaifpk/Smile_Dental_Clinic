import React from 'react'
import HomeImg from './assets/HomeImg.png'
import ExpDoc1 from './assets/ExpDocs/Mask group.png'
import ExpDoc2 from './assets/ExpDocs/Mask group (1).png'
import ExpDoc3 from './assets/ExpDocs/Mask group (2).png'

const Home = () => {
  return (
    <section className="relative flex h-screen w-full">
      <div className="absolute inset-x-0 top-20 flex items-start justify-between px-10 z-10">
        <h1 className="text-7xl text-black font-bold leading-tight">
          Have a shining <br /> smile with our <br /><span className='text-custom-primary'>modern methods!</span>
        </h1>
        <div>
            <div className='flex flex-col gap-2 bg-gray-200 p-5 rounded-md max-w-56 border-gray-50 border-2'>
                <h1 className='text-custom-primary text-2xl font-bold'>15+ <span className='text-sm'>Expert Doctors</span></h1>
                <span className='flex gap-2'>
                    <img src={ExpDoc1} alt="" className='h-12' />
                    <img src={ExpDoc2} alt="" className='h-12' />
                    <img src={ExpDoc3} alt="" className='h-12' />
                </span>
                <p className='text-sm'>We take meticulous care of your dental needs to ensure a healthy, lasting smile.</p>
            </div>
        </div>
      </div>

      <div className="w-1/4 bg-white flex items-center justify-start p-10">
      </div>

      <div className="w-3/4 relative">
        <img src={HomeImg} alt="img" className="object-cover w-full h-full" />
      </div>
    </section>
  )
}

export default Home
