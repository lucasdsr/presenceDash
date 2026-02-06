export default function PartnerLogoCard({ src, alt }) {
  return (
    <div
      className="relative isolate w-partner-card h-partner-card bg-white shrink-0 flex items-center justify-center"
      aria-hidden
    >
      <img
        src="/assets/partners/logo-base.svg"
        alt=""
        width={92}
        height={68}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        aria-hidden
      />
      <div className="relative z-10 flex items-center justify-center p-2 w-full h-full">
        <img
          src={src}
          alt={alt}
          width={92}
          height={53}
          className="max-w-[92px] max-h-[53px] w-auto h-auto object-contain object-center grayscale [image-rendering:-webkit-optimize-contrast]"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  )
}
