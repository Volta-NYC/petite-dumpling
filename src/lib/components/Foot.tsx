import Image from "next/image";
import type { CSSProperties } from "react";
import title from "@/assets/title.png";
import {
  Facebook,
  Globe,
  Instagram,
  Mail,
  MapPin,
  Navigation,
  Phone,
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
    <footer
      id="contact"
      className="relative w-full overflow-hidden bg-[#050505] text-[#F7F1E8]"
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#EDC301]/60 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(237,195,1,0.12),transparent_28%),radial-gradient(circle_at_86%_20%,rgba(249,192,183,0.08),transparent_24%)]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-14 sm:px-10 md:px-14 lg:px-20 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div data-reveal className="reveal-up lg:col-span-7">
            <Image
              src={title}
              alt="Petite Dumpling"
              className="h-auto w-[230px] object-contain logo-glow sm:w-[300px]"
            />
            <p
              className="mt-7 text-[13px] uppercase tracking-[0.35em] text-[#EDC301] sm:text-[14px]"
              style={{ fontFamily: "var(--font-archivo), sans-serif" }}
            >
              Petite Dumpling
            </p>
            <h2 className="display-font mt-3 max-w-[780px] text-[52px] leading-[0.95] text-white sm:text-[68px] md:text-[82px] lg:text-[96px]">
              Visit, order, and keep up with us.
            </h2>
            <p
              className="mt-5 max-w-[760px] text-[19px] font-semibold leading-[1.35] text-[#F2D98D] sm:text-[23px] lg:text-[27px]"
              style={{ fontFamily: "var(--font-albert-sans), sans-serif" }}
            >
              Park Slope 11:30AM - 9:00PM · Prospect Heights 4:00PM - 9:00PM
            </p>
          </div>

          <div
            data-reveal
            className="reveal-scale rounded-[8px] border border-[#EDC301]/35 bg-[#EDC301]/12 p-6 shadow-[0_22px_70px_rgba(237,195,1,0.14)] lg:col-span-5"
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
          >
            <p className="flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-[0.24em] text-[#EDC301]">
              <Sparkles size={17} />
              Follow us
            </p>
            <h3 className="mt-3 text-[28px] font-extrabold leading-[1.12] text-white sm:text-[34px]">
              Dumpling drops, menu moments, and Brooklyn updates.
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="social-pop flex min-h-[60px] items-center justify-center gap-3 rounded-full bg-[#F7F1E8] px-5 text-[16px] font-extrabold text-black transition duration-200 hover:scale-[1.04] hover:bg-[#EDC301]"
              >
                <Instagram size={21} />
                Instagram
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noreferrer"
                className="social-pop flex min-h-[60px] items-center justify-center gap-3 rounded-full bg-[#F7F1E8] px-5 text-[16px] font-extrabold text-black transition duration-200 hover:scale-[1.04] hover:bg-[#EDC301]"
              >
                <Facebook size={21} />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          <div
            data-reveal
            className="reveal-up rounded-[8px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EDC301] text-black">
                <Phone size={20} strokeWidth={2.4} />
              </div>
              <div>
                <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#CBB98C]">
                  Phone
                </p>
                {LOCATIONS.map((location) => (
                  <p key={location.id} className="mt-2 text-[17px] font-semibold text-white">
                    {location.name}: {location.phone}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div
            data-reveal
            className="reveal-up rounded-[8px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm"
            style={{ "--reveal-delay": "80ms" } as CSSProperties}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EDC301] text-black">
                <Mail size={20} strokeWidth={2.4} />
              </div>
              <div>
                <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#CBB98C]">
                  Email
                </p>
                <p className="mt-2 break-all text-[17px] font-semibold text-white">
                  {RESTAURANT_EMAIL}
                </p>
              </div>
            </div>
          </div>

          <div
            data-reveal
            className="reveal-up rounded-[8px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm"
            style={{ "--reveal-delay": "160ms" } as CSSProperties}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EDC301] text-black">
                <Globe size={20} strokeWidth={2.4} />
              </div>
              <div>
                <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#CBB98C]">
                  Website
                </p>
                <a
                  href="https://petitedumpling.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-[18px] font-semibold text-white transition hover:text-[#EDC301]"
                >
                  {RESTAURANT_WEBSITE}
                </a>
              </div>
            </div>
          </div>

          <div
            data-reveal
            className="reveal-up rounded-[8px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm"
            style={{ "--reveal-delay": "240ms" } as CSSProperties}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EDC301] text-black">
                <MapPin size={20} strokeWidth={2.4} />
              </div>
              <div>
                <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#CBB98C]">
                  Locations
                </p>
                <p className="mt-2 text-[17px] font-semibold text-white">
                  Park Slope + Prospect Heights
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {LOCATIONS.map((location, index) => (
            <article
              key={location.id}
              data-reveal
              className="reveal-up rounded-[8px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm"
              style={{ "--reveal-delay": `${index * 100}ms` } as CSSProperties}
            >
              <p className="text-[13px] font-extrabold uppercase tracking-[0.24em] text-[#EDC301]">
                {location.status}
              </p>
              <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="display-font text-[44px] leading-none text-white sm:text-[56px]">
                    {location.name}
                  </h3>
                  <p className="mt-3 text-[18px] font-semibold uppercase leading-[1.45] text-[#FFF8E7]">
                    {location.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <p className="mt-2 text-[16px] text-[#CBB98C]">{location.hours}</p>
                </div>
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[46px] w-fit items-center gap-2 rounded-full border border-[#EDC301]/35 px-5 text-[14px] font-extrabold uppercase tracking-[0.08em] text-[#EDC301] transition hover:bg-[#EDC301] hover:text-black"
                >
                  <Navigation size={16} />
                  Directions
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
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
                className="h-[280px] w-full border-0 sm:h-[330px]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 border-t border-white/8 px-6 py-5 sm:px-10 md:px-14 lg:px-20">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-[13px] text-[#CBB98C] sm:text-[14px]">
            © 2026 Petite Dumpling. All rights reserved.
          </p>
          <a
            href="https://voltanyc.org/"
            target="_blank"
            rel="noreferrer"
            className="text-[13px] text-[#CBB98C] transition hover:text-[#EDC301] sm:text-[14px]"
          >
            Made by Volta
          </a>
        </div>
      </div>
    </footer>
  );
}
