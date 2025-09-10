"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import Image from "next/image";
import {
  Building2,
  Factory,
  Linkedin,
  LucideFacebook,
  Mail,
  Phone,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const [userMail, setUserMail] = useState<string>("");
  return (
    <footer className="bg-[#F3F5F7] pb-8">
      {/* Newsletter Section */}
      <div className="bg-[#DBECFA] flex flex-col lg:flex-row justify-between px-4 sm:px-8 lg:px-14 items-start lg:items-center py-6 lg:py-0 lg:h-30 border-[#DAE0E7] border gap-4 lg:gap-0">
        <div className="flex flex-col w-full lg:w-auto">
          <h3 className="text-black text-lg my-2 font-bold">
            Stay Updated with Our Latest Products
          </h3>
          <p className="text-sm text-[#52637A]">
            Get product updates, industry news, and exclusive offers
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 ">
          <Input
            placeholder="Enter your email"
            value={userMail}
            onChange={(e) => setUserMail(e.target.value)}
            className="min-w-[15rem] bg-white rounded border-[#F0F2F5] flex-1 sm:flex"
          />
          <button className="w-full sm:w-[6rem] h-8 bg-[#FE5E0E] text-white rounded-sm shadow-sm">
            Subscribe
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-4 sm:px-6 lg:px-10 py-8 lg:py-14">
        {/* Company Info */}
        <div className="lg:col-span-1">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={200}
              height={50}
              className="w-auto h-auto max-w-[200px]"
            />
          </Link>
          <p className="text-[#52637A] text-sm my-3">
            ISO 9001:2015 & ISO 13485:2016 certified manufacturer of sterile &
            non-sterile disposable surgical products.
          </p>
          <div className="flex gap-4">
            <LucideFacebook className="bg-[#FCFDFD] w-8 h-8 p-2 rounded cursor-pointer hover:bg-gray-100" />
            <Linkedin className="bg-[#FCFDFD] w-8 h-8 p-2 rounded cursor-pointer hover:bg-gray-100" />
            <Youtube className="bg-[#FCFDFD] w-8 h-8 p-2 rounded cursor-pointer hover:bg-gray-100" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-black font-bold text-[1rem] mb-4">Quick Links</h4>
          <div className="text-[#52637A] flex flex-col gap-4 text-sm">
            <Link
              href="/about"
              className="hover:text-[#FE5E0E] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/products"
              className="hover:text-[#FE5E0E] transition-colors"
            >
              Products
            </Link>
            <Link
              href="/cert"
              className="hover:text-[#FE5E0E] transition-colors"
            >
              Quality & Certifications
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#FE5E0E] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Product Categories */}
        <div>
          <h4 className="text-black font-bold text-[1rem] mb-4">
            Product Categories
          </h4>
          <ul className="text-[#52637A] flex flex-col gap-4 text-sm list-none">
            <li className="hover:text-[#FE5E0E] transition-colors cursor-pointer">
              Dressings & Bandages
            </li>
            <li className="hover:text-[#FE5E0E] transition-colors cursor-pointer">
              Plasters & Tapes
            </li>
            <li className="hover:text-[#FE5E0E] transition-colors cursor-pointer">
              Drapes & Gowns
            </li>
            <li className="hover:text-[#FE5E0E] transition-colors cursor-pointer">
              Gloves & Masks
            </li>
            <li className="hover:text-[#FE5E0E] transition-colors cursor-pointer">
              Catheters & Tubes
            </li>
            <li className="hover:text-[#FE5E0E] transition-colors cursor-pointer">
              Wipes & Cleaning
            </li>
            <li className="hover:text-[#FE5E0E] transition-colors cursor-pointer">
              Others
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-black font-bold text-[1rem] mb-4">
            Contact Information
          </h4>
          <ul className="text-[#52637A] flex flex-col gap-2 text-sm list-none">
            <li className="flex flex-col items-start justify-center gap-2 mb-2">
              <div className="flex gap-4 text-black text-[1rem]">
                <Building2 className="text-[#FE5E0E] flex-shrink-0 mt-1" />
                <p>Corporate Office</p>
              </div>
              <p className="pl-8">
                305-306, Tulsi Arcade, Opp. Gabani Hospital, Lal Darwaja Road,
                Surat - 395003, Gujarat
              </p>
            </li>
            <li className="flex flex-col items-start justify-center gap-2 mb-2">
              <div className="flex gap-4">
                <Factory className="text-[#FE5E0E] flex-shrink-0 mt-1" />
                <p className="text-black text-[1rem]">Factory</p>
              </div>
              <p className="pl-8">
                547-548, RJD Textile Park, Hazira Road, Ichchhapore, Surat -
                394510, Gujarat, India
              </p>
            </li>
            <li className="flex items-center justify-start gap-4 mb-2">
              <Phone className="text-[#FE5E0E] flex-shrink-0" />
              <p>+91 98765 43210</p>
            </li>
            <li className="flex  justify-start gap-4 mb-2 items-center">
              <Mail className="text-[#FE5E0E] flex-shrink-0 mt-1" />
              <div className="flex flex-col">
                <Link
                  href="mailto:gamasurgicalrjdoffice@gmail.com"
                  target="_blank"
                >
                  gamasurgicalrjdoffice@gmail.com
                </Link>
                <Link href="mailto:info.gamasurgical@gmail.com" target="_blank">
                  info.gamasurgical@gmail.com
                </Link>

                <Link href="mailto:inquiry.gama@gmail.com" target="_blank">
                  inquiry.gama@gmail.com
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="text-[#DAE0E7] border-2 w-[94.5%] mx-auto" />
      <div className="flex flex-col lg:flex-row py-8 px-4 sm:px-8 text-sm lg:text-lg text-[#52637A] justify-between items-start lg:items-center gap-4 lg:gap-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <p className="border-r-0 sm:border-r-2 border-r-[#52637A] pr-0 sm:pr-4 mb-2 sm:mb-0">
            © 2025 GAMA Surgical India Pvt. Ltd. All rights reserved.
          </p>
          <p className="px-0 sm:px-4">Mfg. Lic no. MFG/MD/2023/000116</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <p className="hover:text-[#FE5E0E] transition-colors cursor-pointer">
            Privacy Policy
          </p>
          <p className="hover:text-[#FE5E0E] transition-colors cursor-pointer">
            Terms of Service
          </p>
          <p className="hover:text-[#FE5E0E] transition-colors cursor-pointer">
            Sitemap
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
