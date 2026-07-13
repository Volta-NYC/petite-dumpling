import Image from "next/image";
import type { CSSProperties } from "react";
import backfirst from "@/assets/backfirst.png";
import first from "@/assets/first.png";
import second from "@/assets/second.png";

export default function FirstSection() {
  return (
    <>
      {/* ================= FIRST SECTION ================= */}
      <section className="relative w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={backfirst}
            alt=""
            fill
            data-parallax
            className="parallax-layer object-cover object-top"
            priority={false}
          />
        </div>

        {/* Soft overlays / glow */}
        <div className="absolute inset-0 bg-[rgba(255,255,255,0.10)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(255,217,207,0.30),transparent_28%),radial-gradient(circle_at_80%_38%,rgba(255,235,141,0.18),transparent_22%)]" />

        {/* Content */}
        <div
          className="
            relative z-10 mx-auto w-full max-w-[1600px]
            flex flex-col items-center justify-between
            gap-14
            px-6
            pt-[190px] pb-20
            sm:px-8 sm:pt-[210px] sm:pb-24
            md:px-12 md:pt-[220px]
            lg:flex-row lg:items-center lg:gap-20 lg:px-16 lg:pt-[220px] lg:pb-28
            xl:px-24
          "
        >
          {/* Left text */}
          <div
            data-reveal
            className="reveal-up flex w-full max-w-[720px] flex-col items-start lg:w-[44%]"
          >
            <div
              className="
                inline-flex items-center rounded-full
                border border-[#F9C0B7]/70
                bg-[rgba(255,255,255,0.38)]
                px-4 py-1.5
                backdrop-blur-md
                shadow-[0_10px_24px_rgba(49,35,18,0.06)]
              "
            >
              <span
                className="text-[11px] sm:text-[12px]"
                style={{
                  color: "#908B83",
                  fontFamily: '"Albert Sans", sans-serif',
                  fontWeight: 800,
                }}
              >
                petite dumpling
              </span>
            </div>

            <h2
              className="
                display-font mt-5 leading-[0.95]
                text-[54px]
                sm:text-[70px]
                md:text-[86px]
                lg:text-[94px]
                xl:text-[104px]
              "
              style={{
                color: "#312312",
              }}
            >
              Welcome!
            </h2>

            <p
              className="
                mt-6 max-w-[560px]
                text-[15px] leading-[1.34]
                sm:text-[17px]
                md:text-[19px]
                lg:mt-8 lg:text-[21px]
              "
              style={{
                color: "#908B83",
                fontFamily: '"Albert Sans", sans-serif',
                fontWeight: 400,
              }}
            >
              At Petite Dumpling, dim sum, dumplings, and small plates happen all
              day. Dim sum is a Cantonese tradition of bite-sized dishes, often
              translated as food that can <strong className="font-extrabold text-[#312312]">touch the heart</strong>.
            </p>

            <div
              className="
                mt-5 max-w-[560px] border-l-[5px] border-[#C92F28]
                bg-white/54 px-5 py-4 text-[#312312]
                shadow-[0_14px_30px_rgba(49,35,18,0.07)]
                backdrop-blur-md
              "
            >
              <p
                className="display-font text-[28px] leading-[1.05] sm:text-[34px]"
              >
                Steamed, fried, baked, shared. That is the whole point.
              </p>
            </div>

            <p
              className="
                mt-5 max-w-[560px]
                text-[15px] leading-[1.34]
                sm:text-[17px]
                md:text-[19px]
                lg:text-[21px]
              "
              style={{
                color: "#6F675F",
                fontFamily: '"Albert Sans", sans-serif',
                fontWeight: 400,
              }}
            >
              Some dishes arrive in steamer baskets, others on small plates, and
              the best order is usually the one everybody reaches across the
              table for. Hong Kong dim sum keeps evolving, so we let the menu be
              playful too: classic dumplings, saucy noodles, and a few house
              twists that refuse to sit quietly.
            </p>

            {/* little info pills */}
            <div className="mt-7 flex flex-wrap gap-3 lg:mt-8">
              <div
                className="rounded-full border-[3px] px-4 py-1.5"
                style={{
                  borderColor: "#F9C0B7",
                  backgroundColor: "#FFD9CF",
                }}
              >
                <span
                  className="text-[13px] sm:text-[14px]"
                  style={{
                    color: "#908B83",
                    fontFamily: '"Albert Sans", sans-serif',
                    fontWeight: 800,
                  }}
                >
                  all-day small plates
                </span>
              </div>

              <div
                className="rounded-full border-[3px] px-4 py-1.5"
                style={{
                  borderColor: "#FFD202",
                  backgroundColor: "#FFEB8D",
                }}
              >
                <span
                  className="text-[13px] sm:text-[14px]"
                  style={{
                    color: "#908B83",
                    fontFamily: '"Albert Sans", sans-serif',
                    fontWeight: 800,
                  }}
                >
                  handcrafted daily
                </span>
              </div>
            </div>

            <a
              href="#order"
              className="
                cta-sweep group relative mt-6 inline-flex min-h-[48px] items-center gap-3 overflow-hidden
                rounded-full px-7 py-3
                text-[14px]
                sm:text-[15px]
                md:text-[16px]
                lg:mt-8 lg:px-10 lg:py-4 lg:text-[17px]
                transition duration-300 hover:scale-[1.04]
                shadow-[0_16px_34px_rgba(249,192,183,0.24)]
              "
              style={{
                backgroundColor: "#F7CDC4",
                color: "#FFFFFF",
                fontFamily: "var(--font-albert-sans), sans-serif",
                fontWeight: 800,
              }}
            >
              <span className="relative z-10">PLACE AN ORDER</span>
              <span className="relative z-10 text-[20px] leading-none sm:text-[22px]">
                ›
              </span>
            </a>
          </div>

          {/* Right image */}
          <div
            data-reveal
            className="reveal-up flex w-full justify-center lg:w-[56%] lg:justify-end"
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
          >
            <div
              className="
                group relative w-full
                max-w-[360px]
                sm:max-w-[520px]
                md:max-w-[650px]
                lg:max-w-[780px]
                xl:max-w-[840px]
              "
            >
              {/* glow blob */}
              <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFEB8D]/20 blur-3xl" />

              {/* floating label */}
              <div
                className="
                  absolute left-4 top-4 z-20 rounded-full
                  border-[3px] px-4 py-1.5
                  backdrop-blur-md
                  shadow-[0_8px_20px_rgba(49,35,18,0.08)]
                  sm:left-6 sm:top-6
                "
                style={{
                  borderColor: "#F9C0B7",
                  backgroundColor: "rgba(255,255,255,0.72)",
                }}
              >
                <span
                  className="text-[12px] sm:text-[13px]"
                  style={{
                    color: "#908B83",
                    fontFamily: '"Albert Sans", sans-serif',
                    fontWeight: 800,
                  }}
                >
                  chef spotlight
                </span>
              </div>

              {/* image frame */}
              <div
                className="
                  relative overflow-hidden rounded-[34px]
                  border-[5px] bg-[rgba(255,255,255,0.28)]
                  p-3
                  shadow-[0_28px_70px_rgba(49,35,18,0.16)]
                  backdrop-blur-md
                  sm:rounded-[40px] sm:p-4
                  lg:rounded-[44px] lg:p-5
                "
                style={{ borderColor: "#FFEB8D" }}
              >
                <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.18),transparent_45%)]" />
                <Image
                  src={first}
                  alt="Assorted dim sum served at Petite Dumpling"
                  className="
                    lift-image relative z-10 h-auto w-full object-contain
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECOND SECTION ================= */}
      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#F4E2CD" }}
      >
        {/* background accents */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(255,217,207,0.25),transparent_24%),radial-gradient(circle_at_82%_54%,rgba(255,235,141,0.16),transparent_22%)]" />

        <div
          className="
            relative z-10 mx-auto w-full max-w-[1600px]
            flex flex-col items-center justify-between
            gap-14
            px-6 py-20
            sm:px-8 sm:py-24
            md:px-12
            lg:flex-row lg:items-center lg:gap-20 lg:px-16 lg:py-28
            xl:px-24
          "
        >
          {/* LEFT IMAGE */}
          <div
            data-reveal
            className="reveal-up flex w-full justify-center lg:w-[54%] lg:justify-start"
          >
            <div
              className="
                group relative w-full
                max-w-[360px]
                sm:max-w-[520px]
                md:max-w-[650px]
                lg:max-w-[760px]
                xl:max-w-[820px]
              "
            >
              <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F9C0B7]/18 blur-3xl" />

              <div
                className="
                  relative overflow-hidden rounded-[34px]
                  border-[5px] bg-[rgba(255,255,255,0.24)]
                  p-3
                  shadow-[0_24px_60px_rgba(49,35,18,0.12)]
                  backdrop-blur-md
                  sm:rounded-[40px] sm:p-4
                  lg:rounded-[44px] lg:p-5
                "
                style={{ borderColor: "#EDC301" }}
              >
                <Image
                  src={second}
                  alt="Fresh dim sum platter with dipping sauce"
                  className="
                    lift-image h-auto w-full object-contain
                  "
                />
              </div>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div
            data-reveal
            className="reveal-up flex w-full max-w-[720px] flex-col items-start lg:w-[46%]"
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
          >
            <div
              className="
                rounded-[28px] border-[4px]
                bg-[rgba(255,255,255,0.56)]
                px-6 py-8
                shadow-[0_18px_45px_rgba(49,35,18,0.08)]
                backdrop-blur-md
                sm:px-8 sm:py-10
                lg:px-10 lg:py-12
              "
              style={{
                borderColor: "#F9C0B7",
              }}
            >
              <div
                className="
                  mb-5 inline-flex items-center rounded-full
                  border-[3px] px-4 py-1.5
                "
                style={{
                  borderColor: "#FFD202",
                  backgroundColor: "#FFEB8D",
                }}
              >
                <span
                  className="text-[13px] font-extrabold sm:text-[14px]"
                  style={{
                    color: "#908B83",
                    fontFamily: '"Albert Sans", sans-serif',
                    fontWeight: 800,
                  }}
                >
                  year of the red horse
                </span>
              </div>

              <p
                className="
                  max-w-[560px]
                  display-font text-[34px] leading-[1.08]
                  sm:text-[40px]
                  md:text-[44px]
                  lg:text-[48px]
                "
                style={{
                  color: "#312312",
                }}
              >
                “Embrace the fiery energy of the Year of the Red Horse, marked by
                bold actions and rapid progress. Balance with self-care to avoid
                burnout. It promises breakthroughs and demands wise leadership to
                harness its energy.”
              </p>
              <p
                className="mt-5 text-[15px] leading-[1.4] text-[#6F675F] sm:text-[17px]"
                style={{ fontFamily: "var(--font-albert-sans), sans-serif" }}
              >
                A little chef-note energy for the table: bold moves, steady hands,
                and enough chili oil to make the noodles wake up.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
