import React, { useState } from 'react'

//Carousel
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

//Assets
import HomeImg from './assets/file.png';
import ExpDoc1 from './assets/ExpDocs/Mask group.png';
import ExpDoc2 from './assets/ExpDocs/Mask group (1).png';
import ExpDoc3 from './assets/ExpDocs/Mask group (2).png';
import GLogo from './assets/Google__G__Logo 1.png';
import GRating from './assets/Frame 5.png';
import star from './assets/Star 5.png'
import BottomBannerGirl from './assets/young-man-using-phone-while-standing-against-white-background-removebg-preview 1.png'
import ReviewBanner from './assets/ReviewBanner.png'
import BottomBanner from './assets/Frame 1321315051.png'
import CallOutlined from './assets/Icons/CallOutlined.png'
import WhatsApp from './assets/Icons/WhatsApp.png'

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
      {/* good */}
      <section className="flex flex-col items-center px-4 lg:px-10 bg-gradient-to-r from-white via-gray-200 to-gray-300 min-h-screen">
      <div className="flex flex-col lg:flex-row items-center w-full lg:justify-between py-10 gap-8">
        <div className="flex flex-col items-start gap-8 w-full lg:w-1/2 text-start font-custom-atyp">
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight text-gray-800">
            Have a shining <br /> smile with our <br />
            <span className="text-orange-500">modern methods! yy</span>
          </h1>
          <div className="flex items-center p-4  border-custom-green rounded-lg shadow-lg gap-4 bg-white border-t-4">
            <img src={GLogo} alt="Google logo" className="h-10" />
            <div>
              <h2 className="text-gray-600 font-medium">Google Rating</h2>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-orange-500">4.8</span>
                <img src={GRating} alt="Rating stars" className="h-4" />
              </div>
              <p className="text-xs text-gray-500 cursor-pointer">See all our reviews</p>
            </div>
          </div>
        </div>


        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img src={HomeImg} alt="Smiling woman" className="w-full lg:min-h-[590px]" />
        </div>

   
        <div className="flex flex-col items-start text-start p-5 bg-gray-200 shadow-lg rounded-lg mt-8 lg:mt-0 border-2 border-gray-100 w-full lg:max-w-60">
          <h2 className="text-2xl font-semibold text-orange-500">15+ <span className="text-lg">Expert Doctors</span></h2>
          <div className="flex gap-2 mt-4">
            <img src={ExpDoc1} alt="Expert Doctor 1" className="h-14 w-14 rounded-full" />
            <img src={ExpDoc2} alt="Expert Doctor 2" className="h-14 w-14 rounded-full" />
            <img src={ExpDoc3} alt="Expert Doctor 3" className="h-14 w-14 rounded-full" />
          </div>
          <p className="font-custom-kido text-sm text-custom-atyp mt-4">
            We take meticulous care of <br />your dental needs to ensure a healthy, lasting smile.
          </p>
        </div>
      </div>
      <a
          href="#"
          target="_blank"
          className="fixed bottom-20 right-5 lg:bottom-24 lg:right-10 border-2 border-custom-green bg-custom-floral-white p-3 rounded-full shadow-lg z-50"
          aria-label="Call"
        >
          <img src={CallOutlined} alt="call-icon" className='h-6' />
        </a>
        <a
          href="#"
          target="_blank"
          className="fixed bottom-5 right-5 lg:bottom-10 lg:right-10 border-2 border-custom-green bg-custom-floral-white p-3 rounded-full shadow-lg z-50"
          aria-label="WhatsApp"
        >
          <img src={WhatsApp} alt="whatsapp-icon" className='h-6' />
        </a>
    </section>
      <div className='lg:absolute flex items-center justify-center w-full '>
        <div className="grid grid-cols-2 lg:px-0 px-5 mt-5  lg:grid-cols-4 lg:mt-[-60px] w-full max-w-7xl border-b border-r  ">
          {highlights.map((highlight) => (
              <div key={highlight.id} className="flex justify-center items-center text-start gap-5 bg-white p-6 shadow-lg ">
                  <img src={highlight.photo} alt="highlite-icon" className='lg:h-14 h-8' />
                  <span>
                      <span className="text-orange-500 lg:text-4xl font-custom-atyp">{highlight.count}</span>
                      <p className="text-gray-600 font-thin">{highlight.title}</p>
                  </span>
              </div>
          ))}
        </div>
      </div>


        <section className=''>
          <div className='flex w-screen lg:min-h-[25vh] bg-black'>

          </div>
        </section>
      





      {/* Services */}
      <section className="relative flex min-h-screen w-full">
        <div className="w-full py-10 sm:py-20 sm:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-custom-atyp font-semibold px-4 sm:px-10 lg:px-20 text-start">
            Transform your smile with <br />
            veneers, whitening, and implants.
          </h1>
          <p className="my-6 sm:my-10 text-lg sm:text-xl md:text-lg font-poppins text-gray-500 px-4 sm:px-10 lg:px-20 text-start">
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
                <h1 className="text-xs sm:text-sm md:text-lg font-custom-atyp font-semibold">{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <div className="w-full lg:py-10 sm:h-[60vh] flex flex-col gap-5 items-center bg-black">
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-custom-atyp mt-10">Meet Our Team</h1>
        <p className="mb-10 text-gray-400 text-sm sm:text-base font-poppins font-light md:text-lg text-center px-4 sm:px-10 lg:px-20">
          Lorem Ipsum available, but the majority have suffered alteration in some form, <br />
          by injected humour, or randomised words which don't look even.
        </p>
      </div>


      {/* Doctors */}
      <section className="relative xl:mt-[-200px] flex flex-col items-center justify-center z-30">
        <div className="w-full py-10 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-4 sm:px-10 lg:px-20">
            {doctors.map((doc) => (
              <div key={doc.id} className="flex flex-col items-center lg:items-start gap-4 p-4 rounded-lg">
                <div
                  className="w-[200px] sm:w-[250px] md:w-[280px] lg:w-[300px] h-[300px] sm:h-[350px] md:h-[380px] lg:h-[400px] bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url(${doc.photo})` }}
                ></div>
                <div className="mt-4 text-start">
                  <h1 className="text-lg sm:text-xl md:text-2xl font-custom-atyp font-semibold">{doc.name}</h1>
                  <p className="text-sm sm:text-md md:text-lg font-poppins text-gray-500">{doc.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="my-10 px-6 py-3 text-base sm:text-lg font-semibold rounded-md bg-custom-primary text-white">
          View All Items
        </button>
      </section>




      {/* Offers */}
      <section className="relative flex flex-col min-h-screen w-full">
        <div className="flex flex-col md:flex-row w-full py-20 px-6 md:px-20">
          <div className="flex w-full md:w-1/2 mb-6 md:mb-0 text-start">
            <h1 className="text-4xl md:text-5xl font-custom-atyp text-black leading-tight">
              Exclusive <br />Monthly Dental Offers
            </h1>
          </div>
          <div className="flex w-full md:w-1/2">
            <p className="my-10  text-lg font-poppins font-regular text-gray-400">
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
              <h1 className="text-lg font-custom-atyp font-normal">{offer.title}</h1>
              <h1 className="text-3xl font-custom-atyp text-custom-primary">{offer.price} AED</h1>
              <hr className="w-full my-2" />
              <h1 className="font-poppins text-gray-500">{offer.Decription1}</h1>
              <hr className="w-full my-2" />
              <h1 className="font-poppins text-gray-500">{offer.Decription2}</h1>
              <hr className="w-full my-2" />
              <h1 className="font-poppins text-gray-500">{offer.Decription3}</h1>
              <button className="mt-4 px-6 py-3 rounded-md font-custom-atyp font-light bg-black text-white hover:bg-gray-800 transition-colors duration-300">
                MAKE AN APPOINTMENT
              </button>
            </div>
          ))}
        </div>
        <div className="overflow-hidden py-10">
          <span className="flex flex-row justify-start items-center gap-8 animate-marquee">
            <h1 className="text-2xl font-kumbh">General Dentistry</h1>
            <img src={star} alt="star" className="h-5" />
            <h1 className="text-2xl font-kumbh">Cosmetic Dentistry</h1>
            <img src={star} alt="star" className="h-5" />
            <h1 className="text-2xl font-kumbh">Teeth Whitening</h1>
            <img src={star} alt="star" className="h-5" />
            <h1 className="text-2xl font-kumbh">Gum Treatment</h1>
            <img src={star} alt="star" className="h-5" />
            <h1 className="text-2xl font-kumbh">Root Canal Treatment</h1>
            <img src={star} alt="star" className="h-5" />
          </span>
        </div>
      </section>


      {/* Reviews */}
      <section className="relative z-40 flex flex-col min-h-screen bg-custom-primary w-full">
        <div className="flex flex-col lg:flex-row w-full py-24 px-6 md:px-20">
          <div className="w-full lg:w-1/3 mb-12 lg:mb-0 lg:ml-20">
            <img
              src={ReviewBanner}
              alt="Review Banner"
              className="w-full h-[400px] rounded-xl object-cover"
            />
          </div>

          <div className="w-full lg:w-2/3 mt-12 lg:mt-0 lg:ml-28">
            <h1 className="text-white text-4xl md:text-6xl font-custom-atyp font-semibold leading-tight">
              500+ Happy clients said <br /> to us they are satisfied
            </h1>

            <div className="mt-16">
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass="p-4"
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 2, 
                    slidesToSlide: 2, 
                  },
                  tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 1,
                    slidesToSlide: 1,
                  },
                  mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 1,
                    slidesToSlide: 1,
                  },
                }}
                showDots={false}
                sliderClass=""
                swipeable
              >
                {reviews.map((user) => (
                  <div
                    key={user.id}
                    className="p-6 bg-gray-100 rounded-2xl shadow-lg flex flex-col text-start"
                  >
                    <p className="pb-6 text-gray-700">{user.comment}</p>
                    <hr className="w-full border-gray-300" />
                    <div className="flex mt-4 items-center gap-4">
                      <img
                        src={user.photo}
                        alt={user.name}
                        className="h-12 w-12 rounded-full"
                      />
                      <div className="flex flex-col">
                        <h1 className="font-semibold">{user.name}</h1>
                        <p className="text-sm text-gray-400">{user.country}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>












      {/* Insurance */}
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




      {/* Blogs */}
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



      {/* Faqs */}
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


      
      {/* Banner */}
      <section className="relative">
        <div className="relative">
          <div className="px-6 md:px-20 py-20">
            <img src={BottomBanner} alt="Bottom Banner" className="w-full" />
          </div>

          <div className="absolute m-10 xl:m-36 top-0 mb-6 mr-6 text-start pr-">
            <h1 className="text-md mt-12 sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl text-white font-bold">
              Book an Appointment With <br />
              Your Doctor NOW!
            </h1>
            
            <p className="mt-5 text-[8px] sm:text-xl md:text-2xl lg:text-xl font-semibold text-gray-200">
              Conveniently pay for your dental treatments with your insurance. <br />
              We accept major insurance providers.
            </p>
            <button class="mt-5 px-6 py-2 rounded-md bg-black text-white text-lg sm:text-xl md:text-2xl">
              BOOK NOW
            </button>
          </div>

          <div className="absolute bottom-[56px] right-10 mb-6 md:mr-6 mr-[-30px] ">
            <img src={BottomBannerGirl} alt="Bottom Banner Girl" className="h-36 md:h-[450px] object-cover" />
          </div>
        </div>
      </section>


    </>
  )
}

export default Home

