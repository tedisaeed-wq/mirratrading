'use client';

import React from 'react';

interface MirraLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showTagline?: boolean;
}

export default function MirraLogo({
  className = 'h-12',
  variant = 'dark',
  showTagline = true,
}: MirraLogoProps) {
  // Determine colors based on the theme variant
  // Real branding colors:
  // Green: #006837 (rich emerald green)
  // Orange/Gold gradient: #f15a24 to #fbb03b
  // Red tagline: #9e1e1e
  const textColor = variant === 'dark' ? '#ffffff' : '#006837';
  const subtextColor = variant === 'dark' ? '#f59e0b' : '#006837';
  const dividerColor = variant === 'dark' ? '#f59e0b' : '#006837';
  const taglineColor = '#ef4444'; // Bright high-contrast red for digital screens

  return (
    <svg
      viewBox="0 0 350 90"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Mirra Export Trading PLC Logo"
    >
      <defs>
        {/* Orbit Swoosh Gradient */}
        <linearGradient id="orbitSwoosh" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f15a24" />
          <stop offset="60%" stopColor="#f7931e" />
          <stop offset="100%" stopColor="#fbb03b" />
        </linearGradient>

        {/* Shadow for depth */}
        <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* =======================================================
          GLOBE & LAND MASSES (LEFT ELEMENT)
          ======================================================= */}
      <g filter="url(#logoShadow)">
        {/* Globe Base - Vibrant Green */}
        <circle cx="38" cy="34" r="21" fill="#006837" />

        {/* Continents - White Vector representation */}
        {/* North & South America */}
        <path
          d="M23 22c-2-1-4 1-5 4s1 6 3 7c2 1 4 4 2 6s1 4 3 6c1 1 3 0 3-3s-2-4-2-6 2-3 3-5c1-3-2-6-5-7c-1-1-1-1-2-2z"
          fill="#ffffff"
          opacity="0.9"
        />
        {/* Africa & Europe */}
        <path
          d="M36 21c-2 0-3 3-2 5s3 3 2 6c-1 3-1 5 1 7c2 2 4 1 5-1s1-4-1-6c-2-1-1-4-1-6s-1-4-4-5z"
          fill="#ffffff"
          opacity="0.95"
        />
        {/* Asia & Australia */}
        <path
          d="M48 19c-2 0-3 2-2 4s3 2 4 3s1 3 3 2s2-3 1-5s-3-4-6-4z M52 36c-1 0-2 1-1 3s2 2 2 1s-1-4-1-4z"
          fill="#ffffff"
          opacity="0.9"
        />

        {/* Orbiting Swoosh - 3D Orange-Yellow Ring */}
        <path
          d="M14 44c-3 6 4 11 12 12c14 1 24-7 26-15c1-2-1-3-3-2c-2 6-11 12-21 12c-9 0-14-5-14-7z"
          fill="url(#orbitSwoosh)"
        />
      </g>

      {/* =======================================================
          LIVESTOCK SILHOUETTES & PASTURE (UNDER GLOBE)
          ======================================================= */}
      <g>
        {/* Pasture Hill - Natural green curve */}
        <path
          d="M10 65c12-3 34-3 48 0c4 1 4 4 4 4H10s0-3 0-4z"
          fill="#107c41"
        />

        {/* Cow Silhouette - Left */}
        <path
          d="M18 56c0-2 1-3 3-3h7c2 0 3 1 4 2l1-1h1l1 1v1h-1v4h-2v-4h-3v4h-1.5v-4h-2.5v4h-1.5v-4h-2.5v4H18v-4z"
          fill="#0a3c20"
        />

        {/* Sheep/Lamb Silhouette - Right */}
        <path
          d="M37 57c0-1.5 1-2 2-2h4c1 0 1.5.5 2 1l1-.5h.5l.5.5v.5h-.5v3h-1.5v-3h-2v3h-1v-3h-1v3h-1v-3H37v-3z"
          fill="#0d4e2a"
        />
      </g>

      {/* =======================================================
          BRANDING TYPOGRAPHY (RIGHT ELEMENT)
          ======================================================= */}
      {/* 1. Wordmark: MIRRA */}
      <text
        x="72"
        y="35"
        fill={textColor}
        fontFamily="var(--font-sans), system-ui, -apple-system, sans-serif"
        fontWeight="900"
        fontSize="30"
        letterSpacing="1.5"
        className="uppercase tracking-wider font-extrabold"
      >
        MIRRA
      </text>

      {/* 2. Star & Lines Divider Row */}
      {/* Left Line */}
      <line
        x1="72"
        y1="43"
        x2="152"
        y2="43"
        stroke={dividerColor}
        strokeWidth="1.5"
        opacity="0.8"
      />
      {/* Gold Star */}
      <polygon
        points="160,37 162,42 167,42 163,45 165,50 160,47 155,50 157,45 153,42 158,42"
        fill="#fbb03b"
      />
      {/* Right Line */}
      <line
        x1="168"
        y1="43"
        x2="330"
        y2="43"
        stroke={dividerColor}
        strokeWidth="1.5"
        opacity="0.8"
      />

      {/* 3. Subtext: EXPORT TRADING PLC */}
      <text
        x="72"
        y="54"
        fill={subtextColor}
        fontFamily="var(--font-sans), system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="10"
        letterSpacing="3.5"
        className="uppercase tracking-[0.25em] font-black"
      >
        EXPORT TRADING PLC
      </text>

      {/* 4. Optional Premium Tagline */}
      {showTagline && (
        <text
          x="72"
          y="66"
          fill={taglineColor}
          fontFamily="var(--font-sans), system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="7.5"
          letterSpacing="0.4"
          className="uppercase tracking-wide font-bold"
        >
          Premium Ethiopian Chilled Meat Exporter
        </text>
      )}
    </svg>
  );
}
