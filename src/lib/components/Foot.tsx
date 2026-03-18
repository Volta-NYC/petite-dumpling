import Image from "next/image";
import title from "@/assets/title.png";
import {
  Phone,
  MapPin,
  Mail,
  Globe,
  Instagram,
  Facebook,
  Music2,
} from "lucide-react";
 
export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#050505] text-[#F7F1E8]">
      {/* subtle top border glow */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#EDC301]/60 to-transparent" />
 
      <div className="mx-auto flex max-w-[1600px] flex-col gap-12 px-6 py-12 sm:px-10 md:px-14 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-20 lg:py-16">
        {/* LEFT */}
        <div className="flex-1">
          <div className="max-w-[760px]">
            <p
              className="text-[13px] uppercase tracking-[0.35em] text-[#EDC301] sm:text-[14px]"
              style={{ fontFamily: "var(--font-archivo), sans-serif" }}
            >
              Petite Dumpling
            </p>
 
            <h2
              className="mt-3 text-[38px] font-extrabold uppercase leading-[0.95] text-white sm:text-[48px] md:text-[58px] lg:text-[66px]"
              style={{ fontFamily: "var(--font-archivo), sans-serif" }}
            >
              We are open
              <br />
              7 days a week
            </h2>
 
            <p
              className="mt-5 text-[20px] font-semibold text-[#F2D98D] sm:text-[24px] lg:text-[28px]"
              style={{ fontFamily: "var(--font-albert-sans), sans-serif" }}
            >
              11:30AM – 9:00PM
            </p>
 
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
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
                    <p
                      className="mt-1 text-[20px] font-semibold text-white sm:text-[22px]"
                      style={{ fontFamily: "var(--font-albert-sans), sans-serif" }}
                    >
                      718-788-5001
                    </p>
                  </div>
                </div>
              </div>
 
              <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
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
                      petitedumpling276@gmail.com
                    </p>
                  </div>
                </div>
              </div>
 
              <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:col-span-2">
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
                    <p
                      className="mt-1 text-[18px] font-semibold uppercase leading-[1.5] text-white sm:text-[20px]"
                      style={{ fontFamily: "var(--font-albert-sans), sans-serif" }}
                    >
                      276 5th Avenue
                      <br />
                      Brooklyn, NY 11215
                    </p>
                  </div>
                </div>
              </div>
 
              <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:col-span-2">
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
                      petitedumpling.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
 
            {/* socials */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://www.instagram.com/petitedumpling/?igshid=YmMyMTA2M2Y%3D"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#F7F1E8] text-black transition duration-200 hover:scale-[1.06] hover:bg-[#EDC301]"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/people/Petite-Dumpling/100087060717669/"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#F7F1E8] text-black transition duration-200 hover:scale-[1.06] hover:bg-[#EDC301]"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#F7F1E8] text-black transition duration-200 hover:scale-[1.06] hover:bg-[#EDC301]"
              >
                <Music2 size={20} />
              </a>
            </div>
          </div>
        </div>
 
        {/* RIGHT */}
        <div className="flex flex-1 items-center justify-center lg:justify-end">
          <div className="relative flex w-full max-w-[520px] items-center justify-center rounded-[34px] border border-[#EDC301]/15 bg-gradient-to-br from-[#151515] to-[#090909] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 rounded-[34px] bg-[radial-gradient(circle_at_top,rgba(237,195,1,0.08),transparent_45%)]" />
            <Image
              src={title}
              alt="Petite Dumpling title"
              priority
              className="relative z-10 h-auto w-[260px] object-contain sm:w-[320px] md:w-[380px] lg:w-[430px]"
            />
          </div>
        </div>
      </div>
 
      {/* bottom */}
      <div className="border-t border-white/8 px-6 py-5 sm:px-10 md:px-14 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p
            className="text-[13px] text-[#CBB98C] sm:text-[14px]"
            style={{ fontFamily: "var(--font-albert-sans), sans-serif" }}
          >
            © 2024 Petite Dumpling. All rights reserved.
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