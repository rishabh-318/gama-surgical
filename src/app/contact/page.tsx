"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    requirements: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setFormData({
      companyName: "",
      contactPerson: "",
      phone: "",
      email: "",
      requirements: "",
    });
    // You can add API call or form validation logic here
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 text-[#22282A]">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#22282A] mb-4">Contact Us</h1>
          <p className="text-[#6A767C] text-lg">
            Get in touch for inquiries and bulk orders
          </p>
        </div>

        {/* Contact Content */}
        <div className="max-w-6xl mx-auto ">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Send Enquiry Form */}
            <div>
              <h2 className="text-2xl font-semibold text-[#22282A] border border-[#E8ECEE] mb-6">
                Send Enquiry
              </h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company/Hospital Name
                  </label>
                  <Input
                    type="text"
                    name="companyName"
                    placeholder="Enter organization name"
                    className="w-full"
                    value={formData.companyName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Contact Person
                    </label>
                    <Input
                      type="text"
                      name="contactPerson"
                      placeholder="Your name"
                      className="w-full"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="+91"
                      className="w-full"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    className="w-full"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Requirements
                  </label>
                  <textarea
                    name="requirements"
                    placeholder="Product details and quantity required"
                    className="flex w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    value={formData.requirements}
                    onChange={handleInputChange}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-medium py-3"
                >
                  Submit Enquiry
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-5 w-5 text-[#f97316] mt-1" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      Sales: +91 98765 43210
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Mon-Sat, 9AM-6PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-5 w-5 text-[#f97316] mt-1" />
                  </div>
                  <div>
                    <Link
                      href="mailto:info@gamasurgical.in"
                      target="_blank"
                      className="font-medium text-foreground"
                    >
                      info@gamasurgical.in
                    </Link>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[#f97316] mt-1" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">
                      Registered Office
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      301-306, Tirth Arcade, Opp Gokani Hospital,
                      <br />
                      LH Dhruva Road, Surat - 395002
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info Card */}
              <Card className="mt-8 border-l-4 border-l-[#f97316]">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Business Hours
                  </h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg text-foreground mb-4">BEAMA</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Leading provider of quality medical equipment and surgical
                instruments for healthcare professionals worldwide.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Product Categories
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Surgical Instruments
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Medical Devices
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Protective Equipment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Diagnostic Tools
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Contact Info
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>+91 98765 43210</p>
                <Link href="mailto:info@gamasurgical.in" target="_blank">
                  info@gamasurgical.in
                </Link>
                <p>Surat, Gujarat, India</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
