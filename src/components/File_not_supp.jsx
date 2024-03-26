import React from "react";

const File_not_supp = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="container max-w-xl mx-auto px-8 py-12 bg-gray-700 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Security Note
        </h1>
        <p className="text-white mb-6">
          File upload is not supported. Do not attempt to upload files.
        </p>
        <a
          href="index.html"
          className="block px-4 py-2 mx-auto bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 active:bg-orange-700 mb-6"
        >
          Go Back
        </a>
        <p className="text-orange-500 font-bold text-center">
          This website does not support file uploads.
        </p>
      </div>
    </div>
  );
};

export default File_not_supp;
