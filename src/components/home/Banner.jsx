// eslint-disable-next-line no-unused-vars
import React from 'react';

const Banner = () => {
    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
      <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
              <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text"> Get 60% Off for All Product</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
                Buy Now
              </button>
          </div>
      </div>
  </div>
    );
};

export default Banner;