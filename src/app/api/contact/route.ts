import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { organizationName, personName, phone, email, requirement } = body;

    // Validate required fields
    if (!organizationName || !personName || !phone || !email || !requirement) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create contact inquiry in database
    const inquiry = await prisma.contactInquiry.create({
      data: {
        organizationName,
        personName,
        phone,
        email,
        requirement,
        status: "PENDING",
      },
    });

    return NextResponse.json({
      success: true,
      data: inquiry,
      message: "Your inquiry has been submitted successfully!",
    });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}
