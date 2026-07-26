import type { CSSProperties } from "react";
import { Clock, MapPin, Menu, Phone, ShoppingBag } from "lucide-react";
import { LOCATIONS } from "@/lib/restaurantInfo";

export default function LocationsSection() {
  return (
    <section
      id="locations"
      className="relative w-full overflow-hidden bg-[#312312] px-6 py-16 text-[#F7F1E8] sm:px-8 sm:py-20 md:px-12 lg:px-16 lg:py-24 xl:px-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(237,195,1,0.14),transparent_28%),radial-gradient(circle_at_86%_48%,rgba(249,192,183,0.12),transparent_24%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div data-reveal className="reveal-up max-w-[900px]">
          <p className="text-[14px] font-extrabold uppercase tracking-[0.28em] text-[#FFEB8D]">
            Brooklyn locations
          </p>
          <h2 className="display-font mt-3 text-[56px] leading-none text-white sm:text-[76px] md:text-[94px]">
            Park Slope and Prospect Heights
          </h2>
          <p className="mt-5 max-w-[760px] text-[17px] leading-[1.45] text-[#F7E9CA] sm:text-[19px]">
            Petite Dumpling is now serving from the original Park Slope spot and
            the new Prospect Heights location. Prospect Heights is pickup only
            for now.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {LOCATIONS.map((location, index) => (
            <article
              key={location.id}
              data-reveal
              className="reveal-up relative overflow-hidden rounded-[8px] border border-white/12 bg-white/[0.07] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-md sm:p-8"
              style={{ "--reveal-delay": `${index * 120}ms` } as CSSProperties}
            >
              <div className="absolute right-0 top-0 h-36 w-36 translate-x-10 -translate-y-10 rounded-full bg-[#EDC301]/12 blur-3xl" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-[13px] font-extrabold uppercase tracking-[0.24em] text-[#EDC301]">
                      {location.status}
                    </p>
                    <h3 className="display-font mt-2 text-[46px] leading-none text-white sm:text-[58px]">
                      {location.name}
                    </h3>
                  </div>
                  <div className="rounded-full border border-[#EDC301]/30 bg-[#EDC301] px-4 py-2 text-[13px] font-extrabold uppercase tracking-[0.08em] text-black">
                    {location.orderOptions.join(" + ")}
                  </div>
                </div>

                <div className="mt-7 grid gap-4 text-[16px] text-[#FFF8E7] sm:grid-cols-2">
                  <div className="flex gap-3">
                    <MapPin className="mt-1 shrink-0 text-[#EDC301]" size={20} />
                    <p className="font-semibold leading-[1.45]">
                      {location.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="mt-1 shrink-0 text-[#EDC301]" size={20} />
                    <p className="font-semibold leading-[1.45]">{location.hours}</p>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="mt-1 shrink-0 text-[#EDC301]" size={20} />
                    <p className="font-semibold leading-[1.45]">{location.phone}</p>
                  </div>
                  <div className="flex gap-3">
                    <ShoppingBag className="mt-1 shrink-0 text-[#EDC301]" size={20} />
                    <p className="font-semibold leading-[1.45]">
                      {location.orderOptions.join(", ")}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={location.pickupUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cta-sweep inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#EDC301] px-6 text-[15px] font-extrabold text-white shadow-[0_14px_30px_rgba(237,195,1,0.20)]"
                  >
                    Pickup
                  </a>
                  {location.deliveryUrl && (
                    <a
                      href={location.deliveryUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="cta-sweep inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#FFEB8D] px-6 text-[15px] font-extrabold text-[#FFEB8D]"
                    >
                      Delivery
                    </a>
                  )}
                  <a
                    href={location.menuUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-white/16 px-6 text-[15px] font-extrabold text-white transition hover:border-[#EDC301] hover:text-[#EDC301]"
                  >
                    <Menu size={17} />
                    Menu
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
