import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center" style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-gray-200 px-6 sm:px-12 md:px-16 max-w-3xl">
        <h1 className=" font-bold text-4xl md:text-5xl lg:text-6xl">
          New arrivals are here
        </h1>
        <p className="mt-4 text-lg  md:text-xl">
          The new arrivals have, newly arrived. Checkout the latest option from our summer small-batch release while they're still in stock!
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="px-6 py-3 text-gray-800 hover:text-white bg-gray-200 hover:bg-gray-300 rounded-lg text-lg md:text-xl font-medium"
          >
            Shop New Arrivlas
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
