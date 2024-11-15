import React from 'react'
import { highlights } from './datas/Highlights'

const Test = () => {
  return (
    <>
    <section className=" flex items-center justify-center z-30 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 w-full max-w-screen-xl bg-white p-8 md:p-12 border-2 text-black text-center h-auto rounded-lg shadow-lg">
          {highlights.map((list) => (
            <div key={list.id} className="flex flex-col md:flex-row md:items-center md:justify-center gap-10 md:gap-8 items-center w-full">
              <img src={list.photo} alt="icons" className="h-12 md:h-12" />
              <span className="flex flex-col items-center md:items-start">
                <h1 className="text-3xl md:text-4xl font-extrabold text-custom-primary leading-tight">{list.count}</h1>
                <p className="text-lg md:text-xl text-gray-700 font-light mt-2">{list.title}</p>
              </span>
            </div>
          ))}
        </div>
      </section>
    <div className="w-full h-[30vh] bg-black relative"></div>
    </>
  )
}

export default Test