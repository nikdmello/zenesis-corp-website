import Image from "next/image";

import { partnerLogos } from "@/lib/site-content";

export function PremierClientsCarousel() {
  const repeatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <div className="premier-clients-carousel" aria-label="Selected Zenesis clients">
      <div className="premier-clients-track">
        {repeatedLogos.map((logo, index) => (
          <div
            key={`${logo.label}-${index}`}
            className="premier-client-logo"
            aria-hidden={index >= partnerLogos.length}
          >
            <Image
              src={logo.src}
              alt={index < partnerLogos.length ? `${logo.label} logo` : ""}
              width={320}
              height={140}
              loading="eager"
              draggable={false}
              sizes="(min-width: 1280px) 18vw, (min-width: 768px) 25vw, 58vw"
              className={`w-auto max-w-full object-contain ${
                "isEmphasized" in logo && logo.isEmphasized
                  ? "h-[5.75rem] md:h-[6.25rem]"
                  : "h-[4.5rem] md:h-[5rem]"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
