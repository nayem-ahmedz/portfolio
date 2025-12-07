"use client";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function TypewriterDesignation() {
  const [text] = useTypewriter({
    words: [
      'Front-end Developer',
      'Full-stack Web Developer',
      'MERN Stack Specialist'
    ],
    loop: true, // animation cycling indefinitely
    typeSpeed: 60,
    deleteSpeed: 30, // Speed of deleting
    delaySpeed: 2500, // Pause 2.5 seconds before starting the next word
  });

  return (
    <h2 className="text-2xl font-semibold text-amber-500 mt-2">
      <span className="">
        {text}
      </span>
      {/* The animated cursor */}
      <Cursor cursorStyle='|' cursorColor="#f59e0b" />
    </h2>
  );
}