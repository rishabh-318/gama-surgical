"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./ui/Button";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import DocumentIcon from "./CustomIcons/DocumentIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="shadow-sm">
      <div className="flex items-center justify-between px-12 text-[#1679CA] h-10 bg-[#DBECFA] border border-[#DAE0E7]">
        <div className="flex items-center justify-between gap-2 ">
          <p className="flex gap-2 items-center">
            <Phone className="w-4 h-4" /> +91 98765 43210
          </p>
          <p className="flex gap-2 items-center">
            <span>
              <Mail className="w-4 h-4" />
            </span>{" "}
            info@gamasurgical.in
          </p>
        </div>
        <div>
          <p>ISO 9001:2015 & ISO 13485:2016 Certified</p>
        </div>
      </div>
      <nav className="flex items-center justify-between px-12 h-[4.0625rem]">
        <div>
          <Image src="/logo.png" width={148} height={45} alt="logo" />
        </div>
        <div className="">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-6">
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

                  {/* Small dropdown arrow */}
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
              </nav>

              {/* Mobile menu button */}
              <button
                className="md:hidden focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <nav className="md:hidden mt-4 space-y-3 pb-4">
                <Link
                  href="/"
                  className="block text-black hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-black hover:text-blue-600 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/products"
                  className="block text-black hover:text-blue-600 transition-colors"
                >
                  Products
                </Link>
                <Link
                  href="/quality"
                  className="block text-black hover:text-blue-600 transition-colors"
                >
                  Quality & Certifications
                </Link>
                <Link
                  href="/contact"
                  className="block text-black hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </nav>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline-primary"
            textColor="#1D2530 "
            className="border border-[#DAE0E7] text-sm"
            icon=<DocumentIcon />
          >
            Download Catelog
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
      </nav>
    </div>
  );
};

export default Navbar;
