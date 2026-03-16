"use client";

import Image from "next/image";
import { useState } from "react";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  containerClassName?: string;
  imageClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fallbackText: string;
};

export default function ImageWithFallback({
  src,
  alt,
  containerClassName,
  imageClassName,
  width = 1200,
  height = 800,
  priority = false,
  fallbackText
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center rounded-xl bg-slate-200 text-center text-sm font-medium text-slate-600 ${containerClassName ?? ""}`}
      >
        {fallbackText}
      </div>
    );
  }

  return (
    <div className={containerClassName}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={imageClassName}
        onError={() => setFailed(true)}
        priority={priority}
      />
    </div>
  );
}
