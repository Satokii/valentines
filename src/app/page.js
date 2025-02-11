"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function ValentinePage() {
  const [rejected, setRejected] = useState(false);
  const yesButtonRef = useRef(null);

  const moveYesButton = () => {
    if (yesButtonRef.current) {
      const x = (Math.random() - 0.5) * 400;
      const y = (Math.random() - 0.5) * 400;
      yesButtonRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100">
      {!rejected ? (
        <>
          <h1 className="text-2xl font-bold text-red-600">
            Will you be my Valentine?
          </h1>
          <div className="mt-6 flex gap-4">
            <button
              ref={yesButtonRef}
              className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md"
              onMouseEnter={moveYesButton}
            >
              Yes
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-md"
              onClick={() => setRejected(true)}
            >
              No
            </button>
          </div>
        </>
      ) : (
        <h1 className="text-2xl font-bold text-gray-700">
          I thought you would have said yes...
        </h1>
      )}
    </div>
  );
}
