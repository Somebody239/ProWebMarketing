"use client";

import React from "react";
import Image from "next/image";

interface WebsiteIframeProps {
  src: string;
  title: string;
  icon: React.ReactNode;
  category: string;
  className?: string;
  previewImage: string;
}

export default function WebsiteIframe({ src, title, icon, category, className = "", previewImage }: WebsiteIframeProps) {
  return (
    <div className={`w-full relative ${className}`}>
      <Image
        src={previewImage}
        alt={`Preview of ${title}`}
        width={800}
        height={600}
        className="w-full h-auto"
        priority
      />

      {/* Simple overlay with category */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
        <div className="text-white">
          <div className="text-sm font-medium">{category}</div>
        </div>
      </div>
    </div>
  );
}
