import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Globe, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 mt-auto">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-[60px]">
        {/* Company Info */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="logo" className="h-16 drop-shadow-2xl" />
            {/* <span className="font-bold text-xl text-white leading-tight">Universal Label</span>
              <span className="text-sm text-slate-400">Company (Pvt.) LTD</span> */}
          </div>
          <p className="text-slate-400 leading-relaxed text-[15px]">
            We are a universal label company with all accessories. For
            professional, promoting high-quality custom tailored to you.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-9 h-9 bg-white/10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-secondary-light hover:-translate-y-1"
            >
              <Globe size={18} />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-white/10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-secondary-light hover:-translate-y-1"
            >
              <Globe size={18} />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-white/10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-secondary-light hover:-translate-y-1"
            >
              <Globe size={18} />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-white/10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-secondary-light hover:-translate-y-1"
            >
              <Globe size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6 relative pb-2.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:height-[2px] after:bg-secondary-light">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="/"
                className="text-slate-400 transition-all duration-300 text-[15px] hover:text-white hover:pl-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-slate-400 transition-all duration-300 text-[15px] hover:text-white hover:pl-2"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-slate-400 transition-all duration-300 text-[15px] hover:text-white hover:pl-2"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-slate-400 transition-all duration-300 text-[15px] hover:text-white hover:pl-2"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/our-work"
                className="text-slate-400 transition-all duration-300 text-[15px] hover:text-white hover:pl-2"
              >
                Our Work
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-slate-400 transition-all duration-300 text-[15px] hover:text-white hover:pl-2"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Products */}
        <div>
          <h3 className="text-xl font-bold mb-6 relative pb-2.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:height-[2px] after:bg-secondary-light">
            Our Products
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="/products/food-beverage"
                className="text-slate-400 transition-all duration-300 text-[15px] hover:text-white hover:pl-2"
              >
                Food Labels
              </Link>
            </li>
            <li>
              <Link
                href="/products/cosmetics"
                className="text-slate-400 transition-all duration-300 text-[15px] hover:text-white hover:pl-2"
              >
                Cosmetic Labels
              </Link>
            </li>
            <li>
              <Link
                href="/products/pharmaceutical"
                className="text-slate-400 transition-all duration-300 text-[15px] hover:text-white hover:pl-2"
              >
                Pharmaceutical Labels
              </Link>
            </li>
            <li>
              <Link
                href="/products/industrial"
                className="text-slate-400 transition-all duration-300 text-[15px] hover:text-white hover:pl-2"
              >
                Barcode Labels
              </Link>
            </li>
            <li>
              <Link
                href="/products/custom"
                className="text-slate-400 transition-all duration-300 text-[15px] hover:text-white hover:pl-2"
              >
                Custom Labels
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-6 relative pb-2.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:height-[2px] after:bg-secondary-light">
            Contact Info
          </h3>
          <ul className="flex flex-col gap-[18px]">
            <li className="flex gap-[15px] items-start text-slate-400 text-[15px]">
              <MapPin
                size={20}
                className="text-secondary-light shrink-0 mt-0.5"
              />
              <span>123 Industrial Area, Phase II, Karachi, Pakistan</span>
            </li>
            <li className="flex gap-[15px] items-center text-slate-400 text-[15px]">
              <Mail size={18} className="text-secondary-light shrink-0" />
              <a
                href="mailto:info@ulcps.com"
                className="hover:text-white transition-colors duration-300"
              >
                info@ulcpk.com
              </a>
            </li>
            <li className="flex gap-[15px] items-center text-slate-400 text-[15px]">
              <Phone size={18} className="text-secondary-light shrink-0" />
              <a
                href="tel:+923001234567"
                className="hover:text-white transition-colors duration-300"
              >
                +92 300 1234567
              </a>
            </li>
            <li className="flex gap-[15px] items-center text-slate-400 text-[15px]">
              <Clock size={18} className="text-secondary-light shrink-0" />
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/20 py-5 border-t border-white/5">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-[10px] text-sm text-slate-400">
          <p>© 2024 Universal Label Company (Pvt.) LTD. All Rights Reserved.</p>
          <p className="flex items-center gap-1">Designed by ITech Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
