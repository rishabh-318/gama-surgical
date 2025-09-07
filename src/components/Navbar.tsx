"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./ui/Button";
import Link from "next/link";
import { Mail, Phone, X, Menu } from "lucide-react";
import DocumentIcon from "./CustomIcons/DocumentIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="shadow-sm">
      {/* Top Bar */}
      <div className="hidden md:flex items-center justify-between px-4 sm:px-8 lg:px-12 text-[#1679CA] h-10 bg-[#DBECFA] border border-[#DAE0E7] text-xs lg:text-sm">
        <div className="flex items-center justify-between gap-4">
          <p className="flex gap-2 items-center">
            <Phone className="w-4 h-4" /> +91 98765 43210
          </p>
          <p className="flex gap-2 items-center">
            <Mail className="w-4 h-4" />
            info@gamasurgical.in
          </p>
        </div>
        <div>
          <p>ISO 9001:2015 & ISO 13485:2016 Certified</p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex items-center justify-between px-4 sm:px-8 lg:px-12 h-16 lg:h-[4.0625rem]">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo.png"
              width={148}
              height={45}
              alt="logo"
              className="w-auto h-8 sm:h-10 lg:h-11 max-w-[120px] sm:max-w-[140px] lg:max-w-[148px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link
            href="/"
            className="text-black hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-black hover:text-blue-600 transition-colors"
          >
            About
          </Link>
          <Link href="/products" className="relative">
            <select
              name="products"
              id="products"
              defaultValue=""
              className="appearance-none border-0 outline-0 bg-transparent text-black hover:text-blue-600 transition-colors flex items-center gap-2 cursor-pointer px-2 pr-4 py-1"
            >
              <option value="" disabled>
                Products
              </option>
              <option value="a">a</option>
              <option value="b">b</option>
              <option value="c">c</option>
            </select>

            {/* Dropdown arrow */}
            <svg
              className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>

          <Link
            href="/certificate"
            className="text-black hover:text-blue-600 transition-colors"
          >
            Quality & Certifications
          </Link>
          <Link
            href="/contact"
            className="text-black hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Action Buttons - Hidden on small screens */}
        <div className="hidden lg:flex gap-2">
          <Button
            variant="outline-primary"
            textColor="#1D2530"
            className="border border-[#DAE0E7] text-sm"
            icon={<DocumentIcon />}
          >
            Download Catalog
          </Button>
          <Button
            variant="gradient-primary"
            bgColor="#1679CA"
            className="text-sm"
            textColor="white"
          >
            Request Sample
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden focus:outline-none p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-600" />
          ) : (
            <Menu className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden absolute right-0 top-0 z-50 w-full bg-black/50 h-[200vh] bg-opacity-50"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="bg-white absolute top-0 right-0 w-full max-w-sm p-2 rounded shadow-xl transform transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile menu header */}
            <div className="flex items-center justify-between p-4 border-b">
              <Image
                src="/logo.png"
                width={120}
                height={36}
                alt="logo"
                className="w-auto h-9"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Mobile menu content */}
            <div className="flex flex-col p-4 space-y-2 md:space-y-4">
              <Link
                href="/"
                className="block  text-black hover:text-blue-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-black hover:text-blue-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/products"
                className="block  text-black hover:text-blue-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/quality"
                className="block  text-black hover:text-blue-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Quality & Certifications
              </Link>
              <Link
                href="/contact"
                className="block text-black hover:text-blue-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile action buttons */}
              <div className="flex flex-col gap-3 pt-4">
                <Button
                  variant="outline-primary"
                  textColor="#1D2530"
                  className="border border-[#DAE0E7] text-sm w-full justify-center"
                  icon={<DocumentIcon />}
                >
                  Download Catalog
                </Button>
                <Button
                  variant="gradient-primary"
                  bgColor="#1679CA"
                  className="text-sm w-full justify-center"
                  textColor="white"
                >
                  Request Sample
                </Button>
              </div>

              {/* Mobile contact info */}
              <div className="pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-center gap-3 text-sm text-[#1679CA]">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#1679CA]">
                  <Mail className="w-4 h-4" />
                  <span>info@gamasurgical.in</span>
                </div>
                <p className="text-xs text-gray-600">
                  ISO 9001:2015 & ISO 13485:2016 Certified
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
