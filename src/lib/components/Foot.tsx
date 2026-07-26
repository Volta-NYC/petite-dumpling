import Image from "next/image";
import type { CSSProperties } from "react";
import title from "@/assets/title.png";
import {
  Phone,
  MapPin,
  Mail,
  Globe,
  Instagram,
  Facebook,
  Navigation,
  Sparkles,
} from "lucide-react";
import {
  LOCATIONS,
  RESTAURANT_EMAIL,
  RESTAURANT_WEBSITE,
  SOCIAL_LINKS,
} from "@/lib/restaurantInfo";

export default function Footer() {
  return (
    <footer id="contact" className="relative w-full overflow-hidden bg-[#050505] text-[#F7F1E8]">
      {/* subtle top border glow */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#EDC301]/60 to-transparent" />

      <div className="mx-auto flex max-w-[1600px] flex-col gap-12 px-6 py-12 sm:px-10 md:px-14 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-20 lg:py-16">
        {/* LEFT */}
        <div data-footer-reveal className="reveal-up flex-1">
          <div className="max-w-[760px]">
            <p
              className="text-[13px] uppercase tracking-[0.35em] text-[#EDC301] sm:text-[14px]"
              style={{ fontFamily: "var(--font-archivo), sans-serif" }}
            >
              Petite Dumpling
            </p>

            <h2
              className="display-font mt-3 text-[48px] leading-[0.95] text-white sm:text-[62px] md:text-[76px] lg:text-[88px]"
            >
              We are open
              <br />
              7 days a week
            </h2>

            <p
              className="mt-5 text-[20px] font-semibold text-[#F2D98D] sm:text-[24px] lg:text-[28px]"
              style={{ fontFamily: "var(--font-albert-sans), sans-serif" }}
            >
              Park Slope 11:30AM - 9:00PM · Prospect Heights 4:00PM - 9:00PM
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div data-reveal className="reveal-up rounded-[26px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EDC301] text-black">
                    <Phone size={20} strokeWidth={2.4} />
                  </div>
                  <div>
                    <p
                      className="text-[12px] uppercase tracking-[0.22em] text-[#CBB98C]"
                      style={{ fontFamily: "var(--font-archivo), sans-serif" }}
                    >
                      Phone
                    </p>
                    {LOCATIONS.map((location) => (
                      <p
                        key={location.id}
                        className="mt-1 text-[18px] font-semibold text-white sm:text-[20px]"
                        style={{ fontFamily: "var(--font-albert-sans), sans-serif" }}
                      >
                        {location.name}: {location.phone}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div data-reveal className="reveal-up rounded-[26px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EDC301] text-black">
                    <Mail size={20} strokeWidth={2.4} />
                  </div>
                  <div>
                    <p
                      className="text-[12px] uppercase tracking-[0.22em] text-[#CBB98C]"
                      style={{ fontFamily: "var(--font-archivo), sans-serif" }}
                    >
                      Email
                    </p>
                    <p
                      className="mt-1 break-all text-[18px] font-semibold text-white sm:text-[20px]"
                      style={{ fontFamily: "var(--font-albert-sans), sans-serif" }}
                    >
                      {RESTAURANT_EMAIL}
                    </p>
                  </div>
                </div>
              </div>

              <div data-reveal className="reveal-up rounded-[26px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EDC301] text-black">
                    <MapPin size={20} strokeWidth={2.4} />
                  </div>
                  <div>
                    <p
                      className="text-[12px] uppercase tracking-[0.22em] text-[#CBB98C]"
                      style={{ fontFamily: "var(--font-archivo), sans-serif" }}
                    >
                      Visit us
                    </p>
                    <div className="mt-1 grid gap-4 text-white sm:grid-cols-2">
                      {LOCATIONS.map((location) => (
                        <div key={location.id}>
                          <p className="text-[16px] font-extrabold uppercase tracking-[0.08em] text-[#F2D98D]">
                            {location.name}
                          </p>
                          <p
                            className="mt-1 text-[17px] font-semibold uppercase leading-[1.45] sm:text-[18px]"
                            style={{ fontFamily: "var(--font-albert-sans), sans-serif" }}
                          >
                            {location.addressLines.map((line) => (
                              <span key={line} className="block">
                                {line}
                              </span>
                            ))}
                          </p>
                          <p className="mt-1 text-[15px] text-[#CBB98C]">{location.hours}</p>
                          <a
                            href={location.mapsUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#EDC301]/30 px-4 py-2 text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#EDC301] transition hover:bg-[#EDC301] hover:text-black"
                          >
                            <Navigation size={14} />
                            Directions
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div data-reveal className="reveal-up rounded-[26px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EDC301] text-black">
                    <Globe size={20} strokeWidth={2.4} />
                  </div>
                  <div>
                    <p
                      className="text-[12px] uppercase tracking-[0.22em] text-[#CBB98C]"
                      style={{ fontFamily: "var(--font-archivo), sans-serif" }}
                    >
                      Website
                    </p>
                    <a
                      href="https://petitedumpling.com"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block text-[20px] font-semibold text-white transition hover:text-[#EDC301]"
                      style={{ fontFamily: "var(--font-albert-sans), sans-serif" }}
                    >
                      {RESTAURANT_WEBSITE}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* socials */}
            <div
              data-reveal
              className="reveal-up mt-8 rounded-[8px] border border-[#EDC301]/25 bg-[#EDC301]/10 p-5 shadow-[0_18px_50px_rgba(237,195,1,0.12)]"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-[0.22em] text-[#EDC301]">
                    <Sparkles size={16} />
                    Follow us
                  </p>
                  <p className="mt-2 text-[20px] font-extrabold text-white sm:text-[24px]">
                    Fresh dumpling drops, menu moments, and neighborhood updates.
                  </p>
                </div>
              </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="social-pop flex min-h-[58px] items-center gap-3 rounded-full border border-white/10 bg-[#F7F1E8] px-5 text-black transition duration-200 hover:scale-[1.04] hover:bg-[#EDC301]"
              >
                <Instagram size={20} />
                <span className="text-[15px] font-extrabold">Instagram</span>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noreferrer"
                className="social-pop flex min-h-[58px] items-center gap-3 rounded-full border border-white/10 bg-[#F7F1E8] px-5 text-black transition duration-200 hover:scale-[1.04] hover:bg-[#EDC301]"
              >
                <Facebook size={20} />
                <span className="text-[15px] font-extrabold">Facebook</span>
              </a>
            </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div data-footer-reveal className="reveal-up flex flex-1 items-center justify-center lg:justify-end">
          <div className="relative flex w-full max-w-[520px] items-center justify-center rounded-[34px] border border-[#EDC301]/15 bg-gradient-to-br from-[#151515] to-[#090909] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 rounded-[34px] bg-[radial-gradient(circle_at_top,rgba(237,195,1,0.08),transparent_45%)]" />
            <Image
              src={title}
              alt="Petite Dumpling"
              priority
              className="relative z-10 h-auto w-[260px] object-contain sm:w-[320px] md:w-[380px] lg:w-[430px]"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1600px] gap-5 px-6 pb-12 sm:px-10 md:px-14 lg:grid-cols-2 lg:px-20">
        {LOCATIONS.map((location, index) => (
          <div
            key={location.id}
            data-reveal
            className="reveal-up overflow-hidden rounded-[8px] border border-white/12 bg-white/[0.04] shadow-[0_24px_70px_rgba(0,0,0,0.32)]"
            style={{ "--reveal-delay": `${index * 120}ms` } as CSSProperties}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#EDC301]">
                  Google Maps
                </p>
                <h3 className="mt-1 text-[20px] font-extrabold text-white">
                  {location.name}
                </h3>
              </div>
              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 rounded-full bg-[#EDC301] px-4 text-[13px] font-extrabold text-black transition hover:scale-[1.04]"
              >
                <Navigation size={15} />
                Open map
              </a>
            </div>
            <iframe
              title={`${location.name} Google Map`}
              src={location.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[260px] w-full border-0 sm:h-[320px]"
            />
          </div>
        ))}
      </div>

      {/* bottom */}
      <div className="border-t border-white/8 px-6 py-5 sm:px-10 md:px-14 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p
            className="text-[13px] text-[#CBB98C] sm:text-[14px]"
            style={{ fontFamily: "var(--font-albert-sans), sans-serif" }}
          >
            © 2026 Petite Dumpling. All rights reserved.
          </p>
          <a
            href="https://voltanyc.org/"
            target="_blank"
            rel="noreferrer"
            className="text-[13px] text-[#CBB98C] transition hover:text-[#EDC301] sm:text-[14px]"
            style={{ fontFamily: "var(--font-albert-sans), sans-serif" }}
          >
            Made by Volta
          </a>
        </div>
      </div>
    </footer>
  );
}
