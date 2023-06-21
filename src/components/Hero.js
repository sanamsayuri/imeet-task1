import React from 'react'

const Hero = () => {
  return (
    <div className="bg-gray-900 flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
           Learn React.
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Discover the power of Tailwind CSS and React!
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;