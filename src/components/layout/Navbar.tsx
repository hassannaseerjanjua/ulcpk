"use client";
import React, { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, Clock, Globe, ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      {
        name: "Products",
        href: "/products",
        hasDropdown: true,
        dropdownItems: [
          { name: "Food & Beverage", href: "/products/food-beverage" },
          { name: "Pharmaceutical", href: "/products/pharmaceutical" },
          { name: "Cosmetics", href: "/products/cosmetics" },
          { name: "Industrial & Barcode", href: "/products/industrial" },
          { name: "Custom Solutions", href: "/products/custom" },
        ],
      },
      { name: "Services", href: "/services" },
      { name: "Our Work", href: "/our-work" },
      { name: "Contact Us", href: "/contact" },
    ],
    [],
  );

  const isActive = useCallback((href: string) => pathname === href, [pathname]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="w-full  top-0 z-[1000] shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
      {/* Top Bar */}
      <div className="bg-secondary text-white py-2.5 text-[13px]">
        <div className="container flex justify-between items-center">
          <div className="flex gap-6">
            <a
              href="mailto:info@ulcps.com"
              className="flex items-center gap-2 text-slate-300 transition-colors duration-300 hover:text-white"
            >
              <Mail size={14} />
              <span>info@ulcpk.com</span>
            </a>
            <a
              href="tel:+923001234567"
              className="flex items-center gap-2 text-slate-300 transition-colors duration-300 hover:text-white"
            >
              <Phone size={14} />
              <span>+92 300 1234567</span>
            </a>
            <div className="hidden md:flex items-center gap-2 text-slate-300 border-l border-white/10 pl-6 ml-2">
              <Clock size={14} />
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
          <div className="max-md:hidden flex gap-4">
            <a
              href="#"
              className="text-slate-300 transition-all duration-300 hover:text-white hover:-translate-y-0.5"
            >
              <Globe size={14} />
            </a>
            <a
              href="#"
              className="text-slate-300 transition-all duration-300 hover:text-white hover:-translate-y-0.5"
            >
              <Globe size={14} />
            </a>
            <a
              href="#"
              className="text-slate-300 transition-all duration-300 hover:text-white hover:-translate-y-0.5"
            >
              <Globe size={14} />
            </a>
            <a
              href="#"
              className="text-slate-300 transition-all duration-300 hover:text-white hover:-translate-y-0.5"
            >
              <Globe size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white py-4">
        <div className="container flex justify-between items-center">
          <div className="logo">
            <Link href="/">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="logo" className="h-16" />
                {/* <div className="flex flex-col">
                  <span className="font-bold text-xl text-secondary leading-tight tracking-tight uppercase">
                    Universal Label
                  </span>
                  <span className="text-[13px] text-gray-500 font-bold tracking-wider">
                    Company (Pvt.) LTD
                  </span>
                </div> */}
              </div>
            </Link>
          </div>

          <ul className="hidden lg:flex gap-[35px]">
            {navLinks.map((link) => (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`nav-link relative py-2 flex items-center gap-1.5 ${
                    isActive(link.href) ? "text-secondary font-bold" : ""
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className="mt-0.5 group-hover:rotate-180 transition-transform duration-300"
                    />
                  )}

                  {/* Hover/Active Underline Animation */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>

                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl py-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 border border-gray-50">
                    <ul className="flex flex-col">
                      {link.dropdownItems?.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-secondary hover:bg-primary/50 block transition-all"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <Link
            href="/get-quote"
            className="hidden md:flex cta-button scale-105 hover:scale-110 active:scale-95 shadow-lg shadow-secondary/20"
          >
            Get A Quote
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-secondary p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-[2000] bg-black/50 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-[300px] bg-white shadow-2xl transition-transform duration-300 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-8">
              <img src="/logo.png" alt="logo" className="h-12" />
              <button className="text-secondary p-1" onClick={closeMenu}>
                <X size={24} />
              </button>
            </div>

            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.href} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      className={`text-lg font-semibold transition-colors ${
                        isActive(link.href)
                          ? "text-secondary-light"
                          : "text-secondary"
                      }`}
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <button className="p-2 text-secondary">
                        <ChevronDown size={18} />
                      </button>
                    )}
                  </div>

                  {link.hasDropdown && (
                    <ul className="pl-4 mt-2 flex flex-col gap-3 border-l-2 border-primary">
                      {link.dropdownItems?.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="text-sm font-medium text-gray-500 hover:text-secondary-light transition-colors"
                            onClick={closeMenu}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8 border-t border-gray-100">
              <Link
                href="/get-quote"
                className="cta-button w-full text-center block"
                onClick={closeMenu}
              >
                Get A Quote
              </Link>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="tel:+923001234567"
                  className="flex items-center gap-3 text-sm text-gray-600"
                >
                  <Phone size={16} className="text-secondary-light" />
                  <span>+92 300 1234567</span>
                </a>
                <a
                  href="mailto:info@ulcps.com"
                  className="flex items-center gap-3 text-sm text-gray-600"
                >
                  <Mail size={16} className="text-secondary-light" />
                  <span>info@ulcpk.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Navbar);
