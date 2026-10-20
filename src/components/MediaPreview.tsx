import React from 'react';

export interface MediaPreviewProps {
  src: string;
  alt: string;
  poster?: string;
  className?: string;
  showVideoBadge?: boolean;
}

export function isVideoAsset(url: string): boolean {
  const cleanUrl = url.split('?')[0].toLowerCase();
  return cleanUrl.endsWith('.mp4') || cleanUrl.endsWith('.webm');
}

export const MediaPreview: React.FC<MediaPreviewProps> = ({
  src,
  alt,
  poster,
  className = 'w-full h-full object-cover block',
  showVideoBadge = true,
}) => {
  if (isVideoAsset(src)) {
    return (
      <div className="relative w-full h-full">
        <video
          src={src}
          poster={poster}
          aria-label={alt}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={className}
        />
        {showVideoBadge && (
          <span className="pointer-events-none absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-[#D7E2EA]/30 bg-[#0C0C0C]/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-[#D7E2EA] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Demo
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      className={className}
    />
  );
};
