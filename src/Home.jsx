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
import { Call, WhatsApp } from '@mui/icons-material'



const Home = () => {

  const [showAnswer, setShowAnswer] = useState(false)

  const handleShowAnswer = (id) => {
    setShowAnswer(prev => (prev === id ? null : id));
  }

  return (
    <>
      {/* good */}
      <section className="relative flex flex-col lg:flex-row h-screen w-full">
        <div className="absolute inset-x-0 top-20 flex items-start justify-between px-6 sm:px-10 z-10 flex-col lg:flex-row lg:px-10">
          <div className="text-start pl-10 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl text-black font-bold leading-tight">
              Have a shining <br className="hidden sm:block" /> smile with our
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl text-custom-primary font-bold leading-tight">
              modern methods!
            </h1>

            <div className="mt-16 flex items-center p-2 border-t-4 border-custom-green shadow-xl max-w-56 rounded-md sticky top-0">
              <img src={GLogo} alt="Google logo" className="h-10" />
              <span className="flex flex-col ml-2">
                <h1 className="font-semibold text-gray-600">Google Rating</h1>
                <span className="flex items-center gap-2">
                  <h1 className="text-custom-primary font-bold text-xl">4.8</h1>
                  <img src={GRating} alt="Rating icon" className="h-4" />
                </span>
                <p className="text-xs text-gray-400 cursor-pointer">See all our reviews</p>
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
              We take meticulous care of your dental needs to ensure a healthy, lasting smile.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/4 bg-white flex items-center justify-start p-6 lg:p-10"></div>

        <div className="w-full lg:w-3/4 relative">
          <img src={HomeImg} alt="Dental care promotion" className="object-cover w-full h-full" />
        </div>
        <a
            href="mailto:info@smiledentaldubai.com"
            target="_blank"
            className="fixed bottom-20 right-5 lg:bottom-24 lg:right-10 border-2 border-custom-green bg-custom-floral-white p-3 rounded-full shadow-lg z-50"
            aria-label="WhatsApp"
        >
          <Call/>
        </a>
        <a
            href="#"
            target="_blank"
            className="fixed bottom-5 right-5 lg:bottom-10 lg:right-10 bg-green-500 p-3 rounded-full shadow-lg z-50"
            aria-label="WhatsApp"
        >
          <WhatsApp/>
        </a>
        
      </section>




      {/* Not Okay */}
      <section className="relative flex items-center justify-center z-30 w-full">
        <div className="w-full h-[25vh] sm:h-[30vh] bg-black flex items-center justify-center relative">
          <div className="flex xl:mt-[-200px] flex-col md:flex-row justify-between items-center w-full max-w-screen-xl bg-white p-6 sm:p-8 md:p-12 border-2 border-gray-300 text-black text-center rounded-lg shadow-lg gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {highlights.map((list) => (
              <div
                key={list.id}
                className="flex flex-col items-center md:flex-row gap-4 sm:gap-6 md:gap-8 w-full md:w-auto"
              >
                <img src={list.photo} alt="icon" className="h-10 sm:h-12 md:h-14 lg:h-16" />
                <span className="flex flex-col items-center md:items-start">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-custom-primary leading-tight">
                    {list.count}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-light mt-2">
                    {list.title}
                  </p>
                </span>
              </div>
            ))}
          </div>
        </div>
       </section>


        





      {/* Okay */}
      <section className="relative flex min-h-screen w-full">
        <div className="w-full py-10 sm:py-20 mt-[200px] sm:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold px-4 sm:px-10 lg:px-20 text-start">
            Transform your smile with <br />
            veneers, whitening, and implants.
          </h1>
          <p className="my-6 sm:my-10 text-lg sm:text-xl md:text-2xl font-semibold text-gray-500 px-4 sm:px-10 lg:px-20 text-start">
            Lorem Ipsum available, but the majority have suffered alteration in some form, <br />
            by injected humour, or randomised words which don't look even.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full px-4 sm:px-10 lg:px-20">
            {services.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center gap-2 sm:gap-3 py-6 sm:py-8 p-3 sm:p-4 bg-custom-floral-white rounded-lg"
              >
                <img src={item.icon} alt="icons" className="h-12 sm:h-16 lg:h-20 mb-2" />
                <h1 className="text-xs sm:text-sm md:text-lg font-bold">{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>


      <div className="w-full lg:py-10 sm:h-[60vh] flex flex-col gap-5 items-center bg-black">
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mt-10">Meet Our Team</h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg text-center px-4 sm:px-10 lg:px-20">
          Lorem Ipsum available, but the majority have suffered alteration in some form, <br />
          by injected humour, or randomised words which don't look even.
        </p>
      </div>

      <section className="relative xl:mt-[-200px] flex flex-col items-center justify-center z-30">
        <div className="w-full py-10 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-4 sm:px-10 lg:px-20">
            {doctors.map((doc) => (
              <div key={doc.id} className="flex flex-col items-center gap-4 p-4 rounded-lg">
                <div
                  className="w-[200px] sm:w-[250px] md:w-[280px] lg:w-[300px] h-[300px] sm:h-[350px] md:h-[380px] lg:h-[400px] bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url(${doc.photo})` }}
                ></div>
                <div className="mt-4 text-center">
                  <h1 className="text-lg sm:text-xl md:text-2xl font-bold">{doc.name}</h1>
                  <p className="text-sm sm:text-md md:text-lg text-gray-500">{doc.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="my-10 px-6 py-3 text-base sm:text-lg font-semibold rounded-md bg-custom-primary text-white">
          View All Items
        </button>
      </section>




      {/* okay */}
      <section className="relative flex flex-col min-h-screen w-full">
        <div className="flex flex-col md:flex-row w-full py-20 px-6 md:px-20">
          <div className="flex w-full md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Exclusive <br />Monthly Dental Offers
            </h1>
          </div>
          <div className="flex w-full md:w-1/2">
            <p className="my-10 font-sans text-lg font-semibold text-gray-400">
              Unlock your smile’s potential with our exclusive <br />
              dental offers for this month
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="flex flex-col items-center gap-4 py-10 p-4 bg-custom-floral-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img src={offer.photo} alt="icons" className="h-56 mb-4 object-cover" />
              <h1 className="text-lg font-bold">{offer.title}</h1>
              <h1 className="text-3xl font-bold text-custom-primary">{offer.price} AED</h1>
              <hr className="w-full my-2" />
              <h1 className="font-semibold text-gray-600">{offer.Decription1}</h1>
              <hr className="w-full my-2" />
              <h1 className="font-semibold text-gray-600">{offer.Decription2}</h1>
              <hr className="w-full my-2" />
              <h1 className="font-semibold text-gray-600">{offer.Decription3}</h1>
              <button className="mt-4 px-6 py-3 rounded-md bg-black text-white hover:bg-gray-800 transition-colors duration-300">
                MAKE AN APPOINTMENT
              </button>
            </div>
          ))}
        </div>
        <div className="overflow-hidden py-10">
          <span className="flex flex-row justify-start items-center gap-8 animate-marquee">
            <h1 className="text-2xl font-semibold">General Dentistry</h1>
            <img src={star} alt="star" className="h-5" />
            <h1 className="text-2xl font-semibold">Cosmetic Dentistry</h1>
            <img src={star} alt="star" className="h-5" />
            <h1 className="text-2xl font-semibold">Teeth Whitening</h1>
            <img src={star} alt="star" className="h-5" />
            <h1 className="text-2xl font-semibold">Gum Treatment</h1>
            <img src={star} alt="star" className="h-5" />
            <h1 className="text-2xl font-semibold">Root Canal Treatment</h1>
            <img src={star} alt="star" className="h-5" />
          </span>
        </div>
      </section>
      <section className="relative z-40 flex flex-col min-h-screen bg-custom-primary w-full">
        <div className="flex flex-col lg:flex-row w-full py-24 px-6 md:px-20">
          <div className="w-full lg:w-1/3 mb-12 lg:mb-0 lg:ml-20">
            <img src={ReviewBanner} alt="Review Banner" className="w-full h-[400px] rounded-xl object-cover" />
          </div>
          <div className="w-full lg:w-2/3 mt-12 lg:mt-0 lg:ml-28">
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
              500+ Happy clients said <br /> to us they are satisfied
            </h1>
            <div className="flex flex-col lg:flex-row gap-10 mt-16">
              {reviews.map((user) => (
                <div key={user.id} className="p-6 w-full lg:w-96 bg-gray-100 rounded-2xl shadow-xl flex flex-col">
                  <p className="pb-6 text-gray-700">{user.comment}</p>
                  <hr className="w-full border-gray-300" />
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



      {/* Okay */}
      <section className='relative z-40 flex flex-col min-h-screen w-full'>
        <div className='w-full py-24 px-6 md:px-20'>
          <div className='flex flex-col gap-10'>
            <h1 className='text-4xl md:text-6xl font-bold text-center'>
              Our Insurance Partners
            </h1>
            <p className='font-semibold text-gray-500 text-center'>
              Conveniently pay for your dental treatments with your insurance. <br />
              We accept major insurance providers.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center mt-12">
              {insurances.map((insurance) => (
                <div key={insurance.id} className="flex justify-center items-center border w-full h-32 p-4 rounded-lg shadow-lg">
                  <img src={insurance.photo} alt="insurance logo" className="h-16 w-16 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>




      {/* Okay */}
      <section className='relative z-40 flex flex-col min-h-screen w-full'>
        <div className='w-full py-24 px-6 md:px-20'>
          <div className='flex flex-col md:flex-row justify-between w-full gap-10'>
            <h1 className='text-4xl md:text-6xl font-bold text-center md:text-left'>
              See Our Latest Blogs!
            </h1>
            <button className='text-xl mt-3 px-5 py-2 rounded-md bg-custom-primary text-white self-center md:self-start'>
              View All
            </button>
          </div>
          <div className='py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {blogs.map((blog) => (
              <div key={blog.id} className='flex flex-col bg-white rounded-xl shadow-lg'>
                <img src={blog.photo} alt="blog-image" className='rounded-t-xl object-cover h-56 w-full' />
                <div className='px-5 py-4'>
                  <h1 className='text-xl font-semibold'>{blog.title}</h1>
                  <p className='py-3 text-gray-700'>{blog.description}</p>
                  <a href="#" className='text-custom-primary font-semibold underline'>READ MORE</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Okay */}
      <section className='relative z-40 flex flex-col min-h-screen w-full'>
        <div className='w-full'>
          <div className='flex flex-col px-6 md:px-20 justify-between w-full gap-10'>
            <h1 className='text-4xl md:text-6xl font-bold mb-10 text-center md:text-left'>FAQs</h1>

            {faqs.map((item) => (
              <div key={item.id} className='flex flex-col md:flex-row justify-between items-center mx-6 md:mx-20 p-6 md:p-10 mb-6 rounded-2xl text-start border-2 border-gray-100'>
                <div className='flex flex-col gap-5 w-full md:w-3/4'>
                  <h1 className='text-2xl md:text-3xl text-gray-600 font-semibold'>{item.question}</h1>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${showAnswer === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    {showAnswer === item.id && (
                      <p className='text-lg'>{item.answer}</p>
                    )}
                  </div>
                </div>
                <div className='w-full md:w-1/4 flex items-center justify-center md:justify-end'>
                  <button
                    onClick={() => handleShowAnswer(item.id)}
                    className="w-12 h-12 md:w-20 md:h-20 bg-custom-primary text-white rounded-full flex items-center justify-center"
                  >
                    <span className="text-3xl md:text-4xl">{showAnswer === item.id ? '-' : '+'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

.
      {/* Not Okay */}
      <section className='relative z-40 flex flex-col max-h-screen w-full mt-36'>
        <div className='w-full mb-28 px-6 md:px-20'>
          <img src={BottomBanner} alt="Bottom Banner" className="w-full" />
          <div className='absolute top-0 p-6 md:p-20 text-start'>
            <h1 className='text-3xl md:text-5xl text-white font-bold'>
              Book an Appointment With <br />
              Your Doctor NOW!
            </h1>
            <p className='mt-5 text-lg md:text-xl font-semibold text-gray-200'>
              Conveniently pay for your dental treatments with your insurance. <br />
              We accept major insurance providers.
            </p>
            <button className='mt-5 px-5 text-lg md:text-xl py-2 rounded-md bg-black text-white'>
              BOOK NOW
            </button>
          </div>
          <div className='absolute top-[-90px] right-0 md:top-[-132px]'>
            <img src={BottomBannerGirl} alt="Bottom Banner Girl" className='h-[320px] md:h-[520px]' />
          </div>
        </div>
      </section>
      



    </>
  )
}

export default Home
