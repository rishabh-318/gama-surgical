"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import Button from "./ui/Button";
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
      <div className="bg-[#DBECFA] h-30 flex justify-between px-14 items-center border-[#DAE0E7] border">
        <div className="flex flex-col ">
          <h3 className="text-black text-lg my-2 font-bold">
            Stay Updated with Our Latest Products
          </h3>
          <p className="text-sm text-[#52637A]">
            Get product updates, industry news, and exclusive offers
          </p>
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Enter your email"
            value={userMail}
            onChange={(e) => setUserMail(e.target.value)}
            className="min-w-[3rem] bg-white rounded border-[#F0F2F5]"
          />
          <button className="w-[6rem] h-8 bg-[#FE5E0E] text-white rounded-sm shadow-sm">
            Subscribe
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 w-full px-10 py-14">
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={200} height={50} />
          </Link>
          <p className="text-[#52637A] text-sm my-3">
            ISO 9001:2015 & ISO 13485:2016 certified manufacturer of sterile &
            non-sterile disposable surgical products.
          </p>
          <div className="flex gap-4">
            <LucideFacebook className="bg-[#FCFDFD] w-8 h-8 p-2 rounded" />
            <Linkedin className="bg-[#FCFDFD] w-8 h-8 p-2 rounded" />
            <Youtube className="bg-[#FCFDFD] w-8 h-8 p-2 rounded" />
          </div>
        </div>
        <div>
          <h4 className="text-black font-bold text-[1rem] mb-4">Quick Links</h4>
          <div className="text-[#52637A] flex flex-col gap-4 text-sm">
            <Link href="/about">About Us</Link>
            <Link href="/products">Products</Link>
            <Link href="/cert">Quality & Certifications</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
        <div>
          <h4 className="text-black font-bold text-[1rem] mb-4">
            Product Categories
          </h4>
          <ul className="text-[#52637A] flex flex-col gap-4 text-sm list-none">
            <li>Dressings & Bandages</li>
            <li>Plasters & Tapes</li>
            <li>Drapes & Gowns</li>
            <li>Gloves & Masks</li>
            <li>Catheters & Tubes</li>
            <li>Wipes & Cleaning</li>
          </ul>
        </div>
        <div>
          <h4 className="text-black font-bold text-[1rem] mb-4">
            Contact Information
          </h4>
          <ul className="text-[#52637A] flex flex-col gap-2 text-sm list-none">
            <li className="flex flex-col items-start justify-center gap-2 mb-2">
              <div className="flex gap-4 text-black text-[1rem]">
                <Building2 className="text-[#FE5E0E]" />
                <p>Corporate Office</p>
              </div>
              <p className="px-10">
                305-306, Tulsi Arcade, Opp. Gabani Hospital, Lal Darwaja Road,
                Surat - 395003, Gujarat
              </p>
            </li>
            <li className="flex flex-col items-start justify-center gap-2 mb-2">
              <div className="flex gap-4">
                <Factory className="text-[#FE5E0E]" />
                <p className="text-black text-[1rem]">Factory</p>
              </div>
              <p className="px-10">
                547-548, RJD Textile Park, Hazira Road, Ichchhapore, Surat -
                394510, Gujarat
              </p>
            </li>
            <li className="flex items-center justify-start gap-4 mb-2">
              <Phone className="text-[#FE5E0E]" />
              <p>+91 98765 43210</p>
            </li>
            <li className="flex  items-center justify-start gap-4 mb-2">
              <Mail className="text-[#FE5E0E]" />
              <div>
                <p>info@gamasurgical.in</p>
                <p>inquiry@gamasurgicals.in</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr className="text-[#DAE0E7] border-2 w-[94.5%] justify-self-center" />
      <div className="flex py-8 px-8 text-lg text-[#52637A] justify-between items-center">
        <div className="flex">
          <p className="border-r-2 border-r-[#52637A] pr-4">
            © 2025 GAMA Surgical India Pvt. Ltd. All rights reserved.
          </p>
          <p className="px-4">Mfg. Lic no. MFG/MD/2023/000116</p>
        </div>
        <div className="flex gap-4 ">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Sitemap</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
