import React from "react";

const Logo = (data) => (
  <svg
    width="50"
    height="50"
    viewBox="70 100 300 70"
    xmlns="http://www.w3.org/2000/svg"
    className="bg-black-700 rounded-2xl inline-block"
  >
    <defs>
      {/* Background Gradient for Logo only */}
      <linearGradient id="logoBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff5f6d" />
        <stop offset="100%" stopColor="#ffc371" />
      </linearGradient>

      {/* Left & Right Gradient */}
      <linearGradient id="gradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff5f6d" />
        <stop offset="100%" stopColor="#ffc371" />
      </linearGradient>
      <linearGradient id="gradRight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#36D1DC" />
        <stop offset="100%" stopColor="#5B86E5" />
      </linearGradient>

      {/* Jagged Cutting Mask */}
      <mask id="cutMask" x="0" y="0" width="200" height="200">
        <rect width="200" height="200" fill="white" />
        <path
          d="M0,90 L20,100 L40,80 L60,105 L80,85 L100,110 L120,90 L140,115 L160,95 L180,120 L200,100 L200,200 L0,200 Z"
          fill="black"
        />
      </mask>

      {/* Styling */}
      <style>{`
        .draw-path {
          fill: none;
          stroke: white;
          stroke-width: 4;
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: draw 3s ease forwards;
        }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        .center-line {
          stroke: #333;
          stroke-width: 3;
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: drawLine 2s ease forwards 0.5s;
        }

        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Cutting line animation */
        .cutting-line {
          fill: none;
          stroke: black;
          stroke-width: 6;
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: cutDraw 3s ease forwards;
        }

        @keyframes cutDraw {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Background circle with mask */
        .background-circle {
          fill: url(#logoBgGrad);
          mask: url(#cutMask);
          filter: drop-shadow(0 0 10px rgba(0,0,0,0.3));
        }
  .logo-text {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-weight: bold;
          font-size: 32px;
          fill: #222;
          text-anchor: middle;
          dominant-baseline: middle;
          user-select: none;
          pointer-events: none;
        }"
      `}</style>
    </defs>

    {/* Background rounded rectangle with gradient and cutting mask */}
    <rect
      x="130"
      y="30"
      width="140"
      height="140"
      rx="20"
      ry="20"
      className="background-circle"
    />

    {/* Left Half Circle with Cut Mask */}
    <circle
      cx="200"
      cy="100"
      r="70"
      fill="url(#gradLeft)"
      mask="url(#cutMask)"
    />

    {/* Right Half Circle */}
    <clipPath id="rightClip">
      <rect x="200" y="0" width="200" height="200" />
    </clipPath>
    <circle
      cx="200"
      cy="100"
      r="70"
      fill="url(#gradRight)"
      clipPath="url(#rightClip)"
    />

    {/* Animated 'D' Paths */}
    <path
      className="draw-path"
      d="M160,140 L160,60 Q185,50 190,100 Q185,150 160,140 Z"
    />
    <path
      className="draw-path"
      d="M220,140 L220,60 Q245,50 250,100 Q245,150 220,140 Z"
    />

    {/* Center Underline */}
    <path d="M120 170 Q200 190 280 170" className="center-line" />

    {/* Animated Cutting Line over the background rectangle */}
    <path
      d="M0,90 L20,100 L40,80 L60,105 L80,85 L100,110 L120,90 L140,115 L160,95 L180,120 L200,100"
      className="cutting-line"
      transform="translate(130,30)"
    />

    {/* Logo Text below the logo */}
    <text x="200" y="210" className="logo-text">
      Dheerj dwivedi
    </text>
  </svg>
);

export default Logo;
/* 
      
*/
