"use client";
import React, { useState } from "react";
import { ChevronDown, FileText, Download, Send } from "lucide-react";

const ContactGama = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    region: "",
    categories: {
      dressings: false,
      drapes: false,
      catheters: false,
      plasters: false,
      gloves: false,
      wipes: false,
    },
    requirements: "",
    agreeToComms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      if (name.startsWith("categories.")) {
        const category = name.split(".")[1];
        setFormData((prev) => ({
          ...prev,
          categories: { ...prev.categories, [category]: checked },
        }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#FCFDFD] p-4 sm:p-6 w-full flex justify-center items-center">
      <div className="flex justify-center items-start w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
          {/* Left Column - Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 sm:p-8">
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                Get Free Product Catalog & Price List
              </h1>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Fill out the form below to receive our comprehensive product
                catalog
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name and Organization Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization *
                    </label>
                    <input
                      type="text"
                      name="organization"
                      placeholder="Hospital/Clinic Name"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                {/* Email and Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                {/* Region/Country */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Region/Country *
                  </label>
                  <div className="relative">
                    <select
                      name="region"
                      value={formData.region}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white outline-none text-gray-500 text-sm sm:text-base"
                      required
                    >
                      <option value="">Select your region</option>
                      <option value="asia">Asia</option>
                      <option value="europe">Europe</option>
                      <option value="america">America</option>
                      <option value="africa">Africa</option>
                      <option value="oceania">Oceania</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Interested Product Categories */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3 sm:mb-4">
                    Interested Product Categories
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2 sm:space-y-3">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="categories.dressings"
                          checked={formData.categories.dressings}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#FE5E0E] border-[#FE5E0E] rounded focus:ring-orange-500"
                        />
                        <span className="text-sm text-gray-700">
                          Dressings & Bandages
                        </span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="categories.drapes"
                          checked={formData.categories.drapes}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-orange-600 border-[#FE5E0E] rounded focus:ring-orange-500"
                        />
                        <span className="text-sm text-gray-700">
                          Drapes & Gowns
                        </span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="categories.catheters"
                          checked={formData.categories.catheters}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-orange-600 border-[#FE5E0E] rounded focus:ring-orange-500"
                        />
                        <span className="text-sm text-gray-700">
                          Catheters & Tubes
                        </span>
                      </label>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="categories.plasters"
                          checked={formData.categories.plasters}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                        />
                        <span className="text-sm text-gray-700">
                          Plasters & Tapes
                        </span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="categories.gloves"
                          checked={formData.categories.gloves}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                        />
                        <span className="text-sm text-gray-700">
                          Gloves & Masks
                        </span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="categories.wipes"
                          checked={formData.categories.wipes}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                        />
                        <span className="text-sm text-gray-700">
                          Wipes & Cleaning
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Additional Requirements */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    placeholder="Tell us about your specific requirements..."
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none outline-none text-sm sm:text-base"
                  />
                </div>

                {/* Agreement Checkbox */}
                <div>
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeToComms"
                      checked={formData.agreeToComms}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500 mt-0.5 flex-shrink-0"
                      required
                    />
                    <span className="text-xs sm:text-sm text-gray-600">
                      I agree to receive communications from GAMA Surgical and
                      understand that my information will be handled according
                      to the privacy policy.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <span>Get Free Catalog</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
            {/* What You'll Receive */}
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
                What You&apos;ll Receive
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <div className="bg-blue-50 p-2 rounded-lg flex-shrink-0">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">
                      Complete Product Catalog
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Detailed specifications of our entire product range with
                      high-quality images
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <div className="bg-blue-50 p-2 rounded-lg flex-shrink-0">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">
                      Technical Specifications
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Detailed technical data sheets for all products including
                      materials and dimensions
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <div className="bg-blue-50 p-2 rounded-lg flex-shrink-0">
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">
                      Custom Quote
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Personalized pricing based on your requirements and order
                      volume
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Partner with GAMA Surgical */}
            <div className="bg-[#DBF0EE] border border-[#358D8433] rounded-lg p-4 sm:p-6">
              <h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">
                Why Partner with GAMA Surgical?
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#52637A]">
                <li className="flex items-start">
                  <span className="mr-2 font-bold">•</span>
                  <span>15+ years of manufacturing excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">•</span>
                  <span>Serving 1000+ healthcare institutions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">•</span>
                  <span>Export to 25+ countries worldwide</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">•</span>
                  <span>Complete range of 500+ products</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">•</span>
                  <span>Flexible MOQ and customization options</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">•</span>
                  <span>Dedicated customer support team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactGama;
