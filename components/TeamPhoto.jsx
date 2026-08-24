"use client";

import { useState } from "react";

export default function TeamPhoto({ src, alt }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`team-avatar team-photo${failed ? " photo-fallback" : ""}`}>
      {!failed && (
        <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      )}
    </div>
  );
}
