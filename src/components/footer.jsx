import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#2E3240] text-white px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto mt-5">
        {/* Üst Başlık */}
        <div className="md:flex justify-between items-start mb-10">
          <div>
            <h2 className="text-2xl font-bold">Consulting Agency For Your Business</h2>
            <p className="text-gray-300 mt-2">the quick fox jumps over the lazy dog</p>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md">
              Contact Us
            </button>
          </div>
        </div>

        {/* Menü Kısımları */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-sm mb-10">
          <div>
            <h4 className="font-bold mb-2">Company Info</h4>
            <ul className="space-y-1 text-gray-300">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Legal</h4>
            <ul className="space-y-1 text-gray-300">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Features</h4>
            <ul className="space-y-1 text-gray-300">
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Resources</h4>
            <ul className="space-y-1 text-gray-300">
              <li>IOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold mb-2">Get In Touch</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <FiPhone /> (480) 555-0103
              </li>
              <li className="flex items-center gap-2">
                <FiMapPin /> 4517 Washington Ave.
              </li>
              <li className="flex items-center gap-2">
                <FiMail /> debra.holt@example.com
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-600 pt-6 text-sm text-gray-400">
          <p className="mb-4 md:mb-0">Made With Love By Finland All Right Reserved</p>
          <div className="flex space-x-4 text-white text-lg">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
}
