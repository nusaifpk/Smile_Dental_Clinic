import React, { useState } from 'react'

//Assets
import HomeImg from './assets/HomeImg.png'
import ExpDoc1 from './assets/ExpDocs/Mask group.png'
import ExpDoc2 from './assets/ExpDocs/Mask group (1).png'
import ExpDoc3 from './assets/ExpDocs/Mask group (2).png'
import GLogo from './assets/Google__G__Logo 1.png'
import GRating from './assets/Frame 5.png'
import star from './assets/Star 5.png'
import BottomBannerGirl from './assets/young-man-using-phone-while-standing-against-white-background-removebg-preview 1.png'
import ReviewBanner from './assets/ReviewBanner.png'
import BottomBanner from './assets/Frame 1321315051.png'

//Datas
import { services } from './datas/Servieces'
import { doctors } from './datas/Doctors'
import { offers } from './datas/Offers'
import { reviews } from './datas/Reviewcards'
import { insurances } from './datas/Insurance'
import { blogs } from './datas/Blogs'
import { faqs } from './datas/Faqs'
import { highlights } from './datas/Highlights'



const Home = () => {

  const [showAnswer, setShowAnswer] = useState(false)

  const handleShowAnswer = (id) => {
    setShowAnswer(prev => (prev === id ? null : id));
  }

  return (
    <>
      <section className="relative flex h-screen w-full">
        <div className="absolute inset-x-0 top-20 flex items-start justify-between px-10 z-10">
          <div className="text-start pl-10">
            <h1 className="text-7xl text-black font-bold leading-tight">
              Have a shining <br /> smile with our
            </h1>
            <h1 className="text-7xl text-custom-primary font-bold leading-tight">
              modern methods!
            </h1>
            <div className="mt-16 flex items-center p-2 border-t-4 border-custom-green shadow-xl max-w-56 rounded-md">
              <img src={GLogo} alt="Google logo" className="h-10" />
              <span className="flex flex-col">
                <h1 className="font-semibold text-gray-600">Google Rating</h1>
                <span className="flex items-center gap-2">
                  <h1 className="text-custom-primary font-bold text-xl">4.8</h1>
                  <img src={GRating} alt="Rating icon" className="h-4" />
                </span>
                <p className="text-xs text-gray-400 cursor-pointer">
                  See all our reviews
                </p>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 bg-gray-200 p-5 rounded-md max-w-56 border-gray-50 border-2">
            <h1 className="text-custom-primary text-2xl font-bold">
              15+ <span className="text-sm">Expert Doctors</span>
            </h1>
            <span className="flex gap-2">
              <img src={ExpDoc1} alt="Expert Doctor 1" className="h-12" />
              <img src={ExpDoc2} alt="Expert Doctor 2" className="h-12" />
              <img src={ExpDoc3} alt="Expert Doctor 3" className="h-12" />
            </span>
            <p className="text-sm">
              We take meticulous care of your dental needs to ensure a healthy,
              lasting smile.
            </p>
          </div>
        </div>

        <div className="w-1/4 bg-white flex items-center justify-start p-10" />

        <div className="w-3/4 relative">
          <img src={HomeImg} alt="Dental care promotion" className="object-cover w-full h-full" />
        </div>
      </section>

      <section className="absolute inset-x-0 top-[115vh] -translate-y-1/2 flex items-center justify-center z-30">
        <div className="flex justify-between px-20 w-[90%] bg-white p-10 border-2 text-black text-center h-36 rounded-lg shadow-xl">
          {highlights.map((list) => (
            <div key={list.id} className='flex justify-between gap-8 items-center text-start'>
            <img src={list.photo} alt="icons" className='h-14' />
            <span className='flex flex-col'>
              <h1 className='text-4xl font-bold text-custom-primary'>{list.count}</h1>
              <p className='text-gray-700 font-thin'>{list.title}</p>
            </span>
          </div>
          ))}
        </div>
      </section>

      <div className="w-full h-[30vh] bg-black relative"></div>

      <section className="relative flex min-h-screen w-full">
        <div className="text-start w-full py-20">
          <h1 className='text-5xl font-bold px-20'>Transform your smile with <br />
            veneers, whitening, and implants.</h1>
          <p className='my-10 font-sans text-xl font-semibold text-gray-500 px-20'>Lorem Ipsum available, but the majority have suffered alteration in some form,<br /> by injected humour, or randomised words which don't look even</p>
          <div className="grid grid-cols-5 gap-5 w-full px-20">
            {services.map((item) => (
              <div key={item.id} className="flex flex-col items-center gap-3 py-10 p-4 bg-custom-floral-white rounded-lg">
                <img src={item.icon} alt="icons" className='h-20 mb-2' />
                <h1 className="text-lg font-bold">{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full py-20 h-[60vh] flex flex-col  gap-5 items-center bg-black relative">
        <h1 className='text-white text-5xl font-bold'>Meet Our Team</h1>
        <p className='text-gray-400'>Lorem Ipsum available, but the majority have suffered alteration in some form,<br /> by injected humour, or randomised words which don't look even</p>
      </div>

      <section className="absolute inset-x-0 top-[330vh] -translate-y-1/2 flex flex-col items-center justify-center z-30">
        <div className="text-start w-full py-20">
          <div className="grid grid-cols-4 gap-5 w-full px-20">
            {doctors.map((doc) => (
              <div 
                key={doc.id} 
                className="flex flex-col items-center gap-3 p-4 rounded-lg"
              >
                <div
                  className="w-[300px] h-[400px] bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage: `url(${doc.photo})`,
                  }}
                ></div>
                <div className="mt-4 text-center">
                  <h1 className="text-2xl font-bold">{doc.name}</h1>
                  <p className="text-lg text-gray-500">{doc.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className='px-5 py-2 text-lg font-semibold rounded-md bg-custom-primary text-white'>View All Items</button>
      </section>

      <section className="relative flex flex-col min-h-screen w-full mt-[60vh]">
        <div className="flex text-start w-full py-20">
          <div className='flex w-1/2'>
            <h1 className="text-5xl font-bold px-20">Exclusive <br />Monthly Dental Offers</h1>
          </div>
          <div className='flex w-1/2'>
            <p className="my-10 font-sans text-lg font-semibold text-gray-400 px-20">
              Unlock your smile’s potential with our exclusive <br />
              dental offers for this month
            </p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-5 w-full px-20">
            {offers.map((offer) => (
              <div key={offer.id} className="flex flex-col items-center gap-4 py-10 p-4 bg-custom-floral-white rounded-lg">
                <img src={offer.photo} alt="icons" className='h-56 mb-2' />
                <h1 className="text-lg font-bold">{offer.title}</h1>
                <h1 className="text-4xl font-bold text-custom-primary">{offer.price} AED</h1>
                <hr className='w-full' />
                <h1 className='font-semibold text-gray-600'>{offer.Decription1}</h1>
                <hr className='w-full' />
                <h1 className='font-semibold text-gray-600'>{offer.Decription2}</h1>
                <hr className='w-full' />
                <h1 className='font-semibold text-gray-600'>{offer.Decription3}</h1>
                <button className='mt-3 px-5 py-2 rounded-md bg-black text-white'>MAKE AN APPOINTMENT</button>
              </div>
            ))}
          </div>
          <div className="overflow-hidden py-10">
            <span className="flex flex-row justify-start items-center gap-8 animate-marquee">
              <h1 className='text-2xl font-semibold'>General Denistry</h1><img src={star} alt="star" className='h-5' />
              <h1 className='text-2xl font-semibold'>Cosmetic Dentistry</h1><img src={star} alt="star" className='h-5' />
              <h1 className='text-2xl font-semibold'>Teeth Whitening</h1><img src={star} alt="star" className='h-5' />
              <h1 className='text-2xl font-semibold'>Gum Treatment</h1><img src={star} alt="star" className='h-5' />
              <h1 className='text-2xl font-semibold'>Root Canal Treatment</h1><img src={star} alt="star" className='h-5' />
            </span>
          </div>
        </div>
      </section>

      <section className="relative z-40 flex flex-col min-h-screen bg-custom-primary w-full">
        <div className="flex text-start w-full py-24">
          <div className='w-1/3'>
            <img src={ReviewBanner} alt="" className='h-[400px] ml-20 rounded-xl' />
          </div>

          <div className='w-2/3'>
            <h1 className='mt-20 ml-28 text-white text-6xl font-bold'>
              500+ Happy clients said <br /> to us they are satisfied
            </h1>
            <div className='flex gap-10 mt-24 '>
            {reviews.map((user) => (
              <div key={user.id} className="p-10 w-96 bg-gray-100 rounded-2xl shadow-xl">
                <p className='pb-10'>{user.comment}</p>
                <hr className='w-full' />
                <div className="flex mt-4 items-center gap-4"> 
                  <img src={user.photo} alt={user.name} className="h-12 w-12 rounded-full" />
                  <div className="flex flex-col">
                    <h1 className="font-semibold">{user.name}</h1>
                    <p className="text-sm text-gray-400">{user.country}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section className='relative z-40 flex flex-col min-h-screen w-full'>
        <div className='w-full py-24'>
          <div className='flex flex-col gap-10'>
            <h1 className='text-6xl font-bold'>Our Insurance Partners</h1>
            <p className='font-semibold text-gray-500'>Conveniently pay for your dental treatments with your insurance. <br />
            We accept major insurance providers.</p>

            <div className="grid grid-cols-6  px-20 place-items-center">
              {insurances.map((insurance) => (
                <div key={insurance.id} className="flex justify-center items-center border w-full h-32">
                  <img src={insurance.photo} alt="icons" className="h-20 w-20 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='relative z-40 flex flex-col min-h-screen w-full'>
        <div className='w-full py-24'>
          <div className='flex px-20 justify-between w-full gap-10'>
            <h1 className='text-6xl font-bold'>See Our Latest Blogs!</h1>
            <button className='text-xl mt-3 px-5 py-2 rounded-md bg-custom-primary text-white'>View All</button>
          </div>
          <div className='py-16 grid grid-cols-4 gap-5 px-20 text-start'>
            {blogs.map((blog) => (
              <div key={blog.id}>
                <img src={blog.photo} alt="blog-image" className='rounded-xl' />
                <h1 className='mt-5 text-md font-bold'>{blog.title}</h1>
                <p className='py-3 text-gray-700'>{blog.description}</p>
                <a href="#" className='underline'>READ MORE</a>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className='relative z-40 flex flex-col min-h-screen w-full'>
            <div className='w-full'>
                <div className='flex px-20 justify-between w-full gap-10'>
                    <h1 className='text-6xl font-bold mb-20'>FAQs</h1>
                </div>
                {faqs.map((item) => (
                    <div key={item.id} className='flex mt-3 justify-between items-center mx-20 p-10 rounded-2xl text-start border-2 border-gray-100'>
                        <div className='flex flex-col gap-5 w-3/4'>
                            <h1 className='text-3xl text-gray-600 font-semibold'>{item.question}</h1>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    showAnswer === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                {showAnswer === item.id && (
                                    <p className='text-lg'>{item.answer}</p>
                                )}
                            </div>
                        </div>
                        <div className='w-1/4 flex items-center justify-end'>
                            <button
                                onClick={() => handleShowAnswer(item.id)}
                                className="w-20 h-20 bg-custom-primary text-white rounded-full flex items-center justify-center"
                            >
                                <span className="text-4xl">{showAnswer === item.id ? '-' : '+'}</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section className='relative z-40 flex flex-col max-h-screen w-full mt-36'>
          <div className='w-full mb-28 px-20'>
            <img src={BottomBanner} alt="Bottom Banner" className="w-full" />
            <div className='absolute top-0 p-20 text-start'>
              <h1 className='text-5xl text-white font-bold'>Book an Appointment With <br />
              Your Doctor NOW!</h1>
              <p className='mt-10 text-xl font-semibold text-gray-200'>Conveniently pay for your dental treatments with your insurance. <br />
              We accept major insurance providers.</p>
              <button className='mt-5 px-5 text-xl py-2 rounded-md bg-black text-white'>BOOK NOW</button>
            </div>
            <div className='absolute top-[-90px] right-0'>
              <img src={BottomBannerGirl} alt="Bottom Banner Girl" className='h-[520px]' />
            </div>
          </div>
        </section>


    </>
  )
}

export default Home
