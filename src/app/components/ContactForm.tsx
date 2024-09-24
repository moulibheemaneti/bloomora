import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';

const ContactForm = () => {
    return (
        <div className="px-8 md:px-32 py-16 flex gap-8 justify-center md:justify-between items-center flex-wrap">
            {/* Left Section */}
            <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">Contact Us</h2>
                <p className="text-lg">Let’s Build Something Amazing <span className="font-bold">Together</span></p>

                {/* Social Media Icons */}
                <div className="flex space-x-4 mt-6">
                    <a href="https://twitter.com" aria-label="Twitter">
                        <FaTwitter className="text-purple-500 w-8 h-8 hover:text-purple-600 transition" />
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram">
                        <FaInstagram className="text-purple-500 w-8 h-8 hover:text-purple-600 transition" />
                    </a>
                    <a href="https://linkedin.com" aria-label="LinkedIn">
                        <FaLinkedin className="text-purple-500 w-8 h-8 hover:text-purple-600 transition" />
                    </a>
                    <a href="https://youtube.com" aria-label="YouTube">
                        <FaYoutube className="text-purple-500 w-8 h-8 hover:text-purple-600 transition" />
                    </a>
                    <a href="https://facebook.com" aria-label="Facebook">
                        <FaFacebook className="text-purple-500 w-8 h-8 hover:text-purple-600 transition" />
                    </a>
                </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="bg-[#1E1E20] p-8 rounded-lg shadow-lg border border-purple-500 w-1/2 max-w-lg" style={{
                minWidth: "488px",
                border: '2px solid',
                borderImage: 'linear-gradient(to bottom, #FF2CDF, #0014FF) 1',
            }}>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium" htmlFor="name">
                            Name*
                        </label>
                        <input
                            id="name"
                            type="text"
                            required
                            className="w-full p-3 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium" htmlFor="email">
                            Email*
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            className="w-full p-3 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium" htmlFor="message">
                            Message*
                        </label>
                        <textarea
                            id="message"
                            required
                            rows={4}
                            className="w-full p-3 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div className="mb-4 flex items-start">
                        <input
                            id="updates"
                            type="checkbox"
                            className="mt-1 mr-2 rounded bg-gray-700 focus:ring-purple-500"
                        />
                        <label htmlFor="updates" className="text-sm text-nowrap">
                            I would like to receive updates and offers via email.
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-300"
                    >
                        Send message →
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
