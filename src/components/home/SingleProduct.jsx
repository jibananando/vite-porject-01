import React from 'react';

const SingleProduct = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
      <div className="card w-full max-w-sm bg-white shadow-xl rounded-lg overflow-hidden">
        <figure className="px-10 pt-10">
          <img src="https://placeimg.com/400/225/arch" alt="Architecture" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-12 h-12 rounded-full">
                <img src="https://placeimg.com/100/100/people" alt="Profile" />
              </div>
            </div>
            <div className="ml-4">
              <h2 className="card-title">John Doe</h2>
              <p className="text-gray-500">Architect</p>
            </div>
          </div>
          <p className="mt-4">John is a renowned architect known for his modern designs and innovative use of space. He has won several awards for his outstanding contributions to the field.</p>
          <div className="card-actions justify-between mt-4">
            <div>
            <button className="btn btn-outline hover:scale-105 hover:bg-gradient-to-r from-orange-400 to-red-500 ml-2">Details</button>
              <button className="btn btn-outline hover:scale-105 hover:bg-gradient-to-r from-orange-400 to-red-500 ml-2">Buy Now</button>
            </div>
            <div className="flex space-x-2">
              <button className="btn btn-circle btn-sm btn-ghost">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="btn btn-circle btn-sm btn-ghost">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="btn btn-circle btn-sm btn-ghost">
                <i className="fab fa-linkedin-in"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SingleProduct;