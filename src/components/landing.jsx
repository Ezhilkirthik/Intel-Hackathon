import React from 'react';

const Landing = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-purple-600 to-blue-600">
            <div className="text-center p-10 rounded-lg shadow-lg bg-opacity-75 bg-white h-[350px] w-[800px]">
                <h1 className="text-3xl mb-8 text-gray-800">Welcome to DNS Threat Intelligence</h1>
                <p className="text-lg mb-16 text-gray-800">Comprehensive analysis of DNS traffic to identify potential threats.</p>
                <div className="flex justify-center">
                    <a href="/login">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-14 rounded-md mr-4 transition duration-300 ease-in-out">Login</button>
                    </a>
                    <a href="/signup">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-14 rounded-md transition duration-300 ease-in-out">Sign Up</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Landing;