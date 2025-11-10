"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import LeftContact from "../../components/contact/LeftContact";

export default function ContactMe() {
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
            <LeftContact downloadCatelog={false} />
            {/* Contact Information */}
            <RightContact />
          </div>
        </div>
      </div>
    </div>
  );
}

function RightContact() {
  return (
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
            <p className="font-medium text-foreground">Sales: +91 9978974208</p>
            <p className="text-sm text-muted-foreground">Mon-Sat, 9AM-6PM</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Mail className="h-5 w-5 text-[#f97316] mt-1" />
          </div>
          <div>
            <Link
              href="mailto:inquiry.gama@gmail.com"
              target="_blank"
              className="font-medium text-foreground"
            >
              inquiry.gama@gmail.com
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
              301-306, Tulsi Arcade, Opp Gokani Hospital,
              <br />
              LH Dhruva Road, Surat, Gujarat, India - 395002
            </p>
          </div>
        </div>
      </div>

      {/* Additional Info Card */}
      <Card className="mt-8 border-l-4 border-l-[#f97316]">
        <CardContent className="p-6">
          <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
