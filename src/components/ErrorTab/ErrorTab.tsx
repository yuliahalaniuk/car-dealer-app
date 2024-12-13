import Link from 'next/link';
import React from 'react'

const ErrorTab = ({ title }: { title?: string }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-8">
      <div className="text-center max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-red-600 mb-4">
          {title ? title : "Opps..."}
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Something went wrong. Please try again later.
        </p>
        <Link
          href={"/"}
          className="inline-block text-blue-500 hover:text-blue-700 font-semibold text-lg transition-colors duration-200"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorTab
