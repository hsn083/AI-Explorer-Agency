"use client";

import { useState } from "react";
import Image from "next/image";

export default function TeamPhoto({ src, alt }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`team-avatar team-photo${failed ? " photo-fallback" : ""}`}>
      {!failed && (
        <Image 
          src={src} 
          alt={alt} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover"
          quality={75}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
