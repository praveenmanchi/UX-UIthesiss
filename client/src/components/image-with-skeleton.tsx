import { useState } from "react";
import { motion } from "framer-motion";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}

export default function ImageWithSkeleton({ src, alt, className = "", loading = "lazy" }: ImageWithSkeletonProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Skeleton Loader */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-muted/30 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/50 to-transparent animate-shimmer" />
        </div>
      )}
      
      {/* Actual Image */}
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        className={className}
        onLoad={() => setImageLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
