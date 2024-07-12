"use client"

import React, { useState } from "react";
import styles from "./page.module.css";
import Heart from "../assets/Heart.svg";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [description, setDescription] = useState("");
  const [style, setStyle] = useState("");
  const [pickupLines, setPickupLines] = useState([]);

  const handleGenerate = async () => {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description, style }),
    });

    const data = await response.json();
    setPickupLines(data.pickupLines);
  };

  console.log(pickupLines)

  return (
    <div className={styles.main}>
      <div className="p-11 relative z-10">
        <div className="absolute right-4 sm:right-11 cursor-pointer">
          <button className="text-xl sm:text-3xl flex items-center justify-center gap-2 px-4 sm:px-6 py-2 text-center font-medium border border-none rounded-full shadow-lg cursor-pointer">
            Sign out
          </button>
        </div>

        <div className="absolute transform-translate mx-auto w-full text-center sm:p-0">
          <h1 className="text-3xl sm:text-5xl font-normal mb-4 text-primary">
            Pickup Line Generator
          </h1>

          <p className="mx-auto max-w-md text-left text-xl sm:text-2xl text-third mb-2">
            Tell us about your crush
          </p>

          <textarea
            className="textarea max-w-md mx-auto w-[512px] text-lg sm:text-xl text-primary py-2 px-4 mb-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            placeholder="Tell us about your crush..."
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <p className="text-left text-xl sm:text-2xl mx-auto max-w-md text-third mb-2">
            Style
          </p>
          <input
            type="text"
            className="textarea w-[512px] max-w-md mx-auto text-lg sm:text-xl text-primary py-2 px-4 mb-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Style (e.g., Funny)"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
          />
          <button
            className="w-[512px] h-[52px] mx-auto max-w-md flex items-center justify-center gap-2 text-center text-xl sm:text-2xl font-normal py-1.5 bg-primary text-white border border-none rounded-full shadow-lg bg-[#FF2157]"
            onClick={handleGenerate}
          >
            <Image src={Heart} alt="Heart" />
            Generate for me
            <Image src={Heart} alt="Heart" />
          </button>

          {pickupLines.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Your Pickup Lines:</h2>
              <ul>
                {pickupLines.map((line, index) => (
                  <li key={index} className="text-lg mb-2">{line}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Page;
