"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import DocumentIcon from "@/components/CustomIcons/DocumentIcon";

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
export function LeftContact({ downloadCatelog } = { downloadCatelog: false }) {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    requirements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          organizationName: formData.companyName,
          personName: formData.contactPerson,
          phone: formData.phone,
          email: formData.email,
          requirement: formData.requirements,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage("✅ Your inquiry has been submitted successfully!");
        setFormData({
          companyName: "",
          contactPerson: "",
          phone: "",
          email: "",
          requirements: "",
        });
      } else {
        setSubmitMessage("❌ " + (data.error || "Failed to submit inquiry"));
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage("❌ An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#22282A] mb-6">
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

        {submitMessage && (
          <div
            className={`p-3 rounded-md ${
              submitMessage.startsWith("✅")
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {submitMessage}
          </div>
        )}
        <div className="flex sm:flex-row justify-center items-center flex-col gap-4">
          {downloadCatelog && (
            <a
              href="/catalog/ProductCatelog.pdf"
              download
              className="w-fit h-full flex items-center justify-center "
            >
              <Button
                variant="outline-primary"
                textColor="#1D2530"
                className="border border-[#DAE0E7] text-sm w-full justify-center"
                icon={<DocumentIcon />}
              >
                Download Catalog
              </Button>
            </a>
          )}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full min-w-fit bg-[#f97316] hover:bg-[#ea580c] text-white font-medium py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </Button>
        </div>
      </form>
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
