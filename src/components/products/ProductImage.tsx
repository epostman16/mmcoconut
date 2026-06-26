"use client";

import Image from "next/image";
import { useState } from "react";
import { Droplets } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductImageProps {
  src: string;
  alt: string;
  gradient: string;
  className?: string;
  iconClassName?: string;
  priority?: boolean;
}

export function ProductImage({
  src,
  alt,
  gradient,
  className,
  iconClassName,
  priority = false,
}: ProductImageProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={cn(
          `bg-gradient-to-br ${gradient} flex items-center justify-center`,
          className
        )}
      >
        <Droplets className={cn("text-white/25", iconClassName || "h-20 w-20")} />
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
        priority={priority}
        onError={() => setError(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}
