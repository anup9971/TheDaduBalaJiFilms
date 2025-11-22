
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo / About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">The Dadu BalaJi Films</h2>
            <p className="text-gray-400">
              We provide top-notch services to help your business grow. Connect with us on our social platforms!
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/services" className="hover:text-white">Oor Project</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/faq" className="hover:text-white">FAQ</a></li>
              <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/help" className="hover:text-white">Help Center</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-gray-400">B-4, First Floor, Prehlad Market, DB Gupta Rd, Karol Bagh, New Delhi, 110005</p>
            <p className="text-gray-400 mt-2">Phone: <a href="tel:+919971522879" className="hover:text-white">+91 9971522879</a></p>
            <p className="text-gray-400 mt-2">Email: <a href="mailto:info@perfectconsultancy.co" className="hover:text-white">info@perfectconsultancy.co</a></p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} The Dadu BalaJi Films. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
