import DocumentIcon from "@/components/CustomIcons/DocumentIcon";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function LeftContact(
  { downloadCatelog } = { downloadCatelog: false }
) {
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
                Get Free Catalog
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
