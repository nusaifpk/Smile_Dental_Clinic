import React from 'react';
import FooterLogo from '../assets/footer-logo.png';
import { Facebook, Instagram, LinkedIn, WhatsApp, Call } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="py-10 bg-custom-footer-black text-white px-10">
      <div className="container mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-start">
          {/* Contact Information Section */}
          <div className="space-y-6">
            <img src={FooterLogo} alt="logo" className="h-14 mx-auto md:mx-0" />
            <p className="text-3xl font-semibold mt-10">Get In Touch</p>
            <p className="text-md font-medium mt-5 mb-1">Contact no:</p>
            <ul>
              <li><a href="#" className="hover:text-custom-primary">+971 4 2979464</a></li>
              <li><a href="#" className="hover:text-custom-primary">+971 56 4848613</a></li>
            </ul>
            <p className="text-md font-medium mt-5">Email:</p>
            <ul>
              <li><a href="mailto:info@smiledentaldubai.com" className="hover:text-custom-primary">info@smiledentaldubai.com</a></li>
            </ul>
            <span className="flex gap-3 mt-2">
              <Facebook className="cursor-pointer" />
              <Instagram className="cursor-pointer" />
              <LinkedIn className="cursor-pointer" />
              <WhatsApp className="cursor-pointer" />
              <Call className="cursor-pointer" />
            </span>
          </div>

          {/* Address and Location Map Section */}
          <div className="space-y-6">
            <p className="text-3xl font-semibold">Our Address</p>
            <ul>
              <li>
                <a href="#" className="hover:text-custom-primary">
                  Room No: 314, Al Attar Shopping Mall, Next to Karama Center, Al Karama, P.O.Box: 125706, Dubai, UAE
                </a>
              </li>
            </ul>
            <p className="text-3xl font-semibold">Location Map</p>
            <ul>
              <li>
                <a href="#" className="hover:text-custom-primary">
                  Room No: 314, Al Attar Shopping Mall, Next to Karama Center, Al Karama, P.O.Box: 125706, Dubai, UAE
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <p className="text-3xl font-semibold">Quick Links</p>
            <ul>
              <li><a href="#" className="hover:text-custom-primary">Home</a></li>
              <li><a href="#" className="hover:text-custom-primary">About Us</a></li>
              <li><a href="#" className="hover:text-custom-primary">Services</a></li>
              <li><a href="#" className="hover:text-custom-primary">Gallery</a></li>
              <li><a href="#" className="hover:text-custom-primary">Blogs</a></li>
              <li><a href="#" className="hover:text-custom-primary">Contact Us</a></li>
            </ul>
          </div>

          {/* Services and Hours Section */}
          <div className="space-y-6">
            <p className="text-3xl font-semibold">Services</p>
            <ul>
              <li><a href="#" className="hover:text-custom-primary">Children's Dentistry</a></li>
              <li><a href="#" className="hover:text-custom-primary">General Dentistry</a></li>
            </ul>
            <p className="text-3xl font-semibold">Working Hours</p>
            <ul>
              <li><a href="#" className="hover:text-custom-primary">Open all 7 days</a></li>
              <li><a href="#" className="hover:text-custom-primary">9:00 AM to 9:00 PM</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Divider */}
        <hr className="w-full border-gray-600" />

        {/* Footer Bottom */}
        <div className="text-center pt-6">
          <p className="text-gray-600">© All rights reserved by Smile Essentials - Powered by Hoztox Technologies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
