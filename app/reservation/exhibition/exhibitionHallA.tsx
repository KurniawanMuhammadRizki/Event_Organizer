"use client";
import React from "react";
import PaymentSection from "@/app/payment/paymentSection";
import HallALayout from "./layout/HallA";



const ExhibitionHallA = () => {
  return (
    <div>
      <div className="mb-4 mx-auto ">
        <h1 className="mb-2 text-2xl font-bold">Hall A Details</h1>
        <HallALayout />
        <p className="mb-2">
          Layout: Large open space suitable for exhibitions and events.
        </p>
        <p className="mb-2">Total Area: 5000 square feet</p>
        <p className="mb-2">Area per Booth: 100 square feet</p>
        <h2 className="mt-4 mb-2 text-xl font-bold">Facilities</h2>
        <ul className="list-disc list-inside">
          <li>Central Air Conditioning</li>
          <li>High-speed WiFi</li>
          <li>24/7 Security</li>
          <li>Restrooms and Showers</li>
          <li>Food and Beverage Stalls</li>
          <li>Audio-Visual Equipment</li>
          <li>Ample Parking Space</li>
          <li>Emergency Medical Services</li>
          <li>Dedicated Event Management Team</li>
        </ul>
      </div>
      <PaymentSection />
    </div>
  );
};

export default ExhibitionHallA;
