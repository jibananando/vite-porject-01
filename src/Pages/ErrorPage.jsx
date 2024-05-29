import React from 'react';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <button
        className="bg-gradient-to-r px-4bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
        onClick={() => window.location.href = "/"}
      >
        Go Home
      </button>
    </div>
    );
};

export default ErrorPage;