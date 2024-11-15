import React from 'react';
import FooterLogo from '../assets/footer-logo.png';
import { Facebook, Instagram, LinkedIn, WhatsApp, Call } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="py-10 bg-custom-footer-black text-white px-10">
      <div className="container mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-start">
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

          <div className="space-y-6">
            <p className="text-3xl font-semibold">Our Address</p>
            <ul>
              <li>
                <a href="https://www.google.com/maps/place/Smile+Essentials+Dental+Clinic+L.L.C,+Best+in+Karama+Dubai/@25.245469,55.302428,3151m/data=!3m1!1e3!4m6!3m5!1s0x3e5f43278d22325f:0x8ac8539640a83c8e!8m2!3d25.2454692!4d55.3024278!16s%2Fg%2F11c4657m9k?hl=en&entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D" target='_b' className="hover:text-custom-primary">
                  Room No: 314, Al Attar Shopping Mall, Next to Karama Center, Al Karama, P.O.Box: 125706, Dubai, UAE
                </a>
              </li>
            </ul>
            <p className="text-3xl font-semibold">Location Map</p>
            <ul>
              <li>
                <iframe
                  title='View location' 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.188524152707!2d55.29985287516523!3d25.245469177679915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43278d22325f%3A0x8ac8539640a83c8e!2sSmile%20Essentials%20Dental%20Clinic%20L.L.C%2C%20Best%20in%20Karama%20Dubai!5e1!3m2!1sen!2sin!4v1731661165552!5m2!1sen!2sin" 
                  width="300" 
                  height="140" 
                  className='rounded-xl'  
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </li>
            </ul>
          </div>

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

        <hr className="w-full border-gray-600" />

        <div className="text-center pt-6">
          <p className="text-gray-600">© All rights reserved by Smile Essentials - Powered by Hoztox Technologies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
