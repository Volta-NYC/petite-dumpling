"use client";

import Image, { StaticImageData } from "next/image";
import type { CSSProperties } from "react";
import third from "@/assets/third.png";

import img1 from "@/assets/img1.png";
import spicy from "@/assets/spicy.png";
import soup from "@/assets/soup.png";
import dumpling from "@/assets/dumpling.png";

import foodimg1 from "@/assets/foodimg1.png";
import foodimg2 from "@/assets/foodimg2.png";
import foodimg3 from "@/assets/foodimg3.png";
import foodimg4 from "@/assets/foodimg4.png";
import foodimg5 from "@/assets/foodimg5.png";

type MenuCardProps = {
  title: string;
  tag: string;
  tagIcon: StaticImageData;
  foodImage: StaticImageData;
  description?: string;
  showDescription?: boolean;
  className?: string;
  delay?: string;
};

function MenuCard({
  title,
  tag,
  tagIcon,
  foodImage,
  description,
  showDescription = false,
  className = "",
  delay = "0ms",
}: MenuCardProps) {
  return (
    <div
      data-reveal
      className={`
        reveal-up group relative w-full max-w-[330px]
        rounded-[16px] border-[3px] bg-[#FFF9F0]
        px-6 pt-7 pb-6
        min-h-[355px]
        overflow-hidden
        shadow-[0_18px_44px_rgba(49,35,18,0.08)]
        ${className}
      `}
      style={{ borderColor: "#EDC301", "--reveal-delay": delay } as CSSProperties}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#FFEB8D]/18 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center">
        <h3
          className="display-font text-center leading-[0.98] text-[36px] sm:text-[40px]"
          style={{
            color: "#312312",
          }}
        >
          {title}
        </h3>

        <div
          className="
            mt-4 inline-flex items-center justify-center gap-1.5
            rounded-full px-4 py-1 min-h-[34px]
          "
          style={{ backgroundColor: "#FFD202" }}
        >
          <span
            className="text-[16px] leading-none"
            style={{
              fontFamily: '"Albert Sans", sans-serif',
              fontWeight: 800,
              color: "#FFFFFF",
            }}
          >
            {tag}
          </span>

          <Image
            src={tagIcon}
            alt=""
            aria-hidden="true"
            className="h-[22px] w-[22px] object-contain sm:h-[26px] sm:w-[26px]"
          />
        </div>

        <div className="mt-5 flex flex-1 items-end justify-center rounded-[12px] border border-[#EDC301]/12 bg-[#F7F1E8] px-4 py-5">
          <Image
            src={foodImage}
            alt={title}
            className="
              lift-image h-auto w-[78%] object-contain mix-blend-multiply
            "
          />
        </div>

        {showDescription && (
          <p
            className="
              mt-4 max-w-[250px] text-center
              text-[12px] leading-[1.25]
              sm:text-[13px]
            "
            style={{
              fontFamily: '"Albert Sans", sans-serif',
              fontWeight: 400,
              color: "#908B83",
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function MenuSection() {
  return (
    <section className="w-full overflow-hidden">
      {/* TOP INTRO */}
      <div
        className="relative overflow-hidden"
        style={{ backgroundColor: "#F2E9E2" }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute left-[8%] top-[14%] h-44 w-44 rounded-full bg-[#F9C0B7]/20 blur-3xl" />
          <div className="absolute right-[10%] top-[20%] h-52 w-52 rounded-full bg-[#FFEB8D]/15 blur-3xl" />
        </div>

        <div
          className="
            relative z-10 mx-auto flex w-full max-w-[1600px] flex-col items-center
            px-5 pt-10 pb-14
            sm:px-8 sm:pt-12 sm:pb-16
            md:px-12 md:pt-14 md:pb-18
            lg:px-16 lg:pt-16 lg:pb-20
            xl:px-24
          "
        >
          <h2
            data-auto-reveal
            className="
              display-font text-center leading-none
              text-[58px]
              sm:text-[76px]
              md:text-[94px]
              lg:text-[108px]
            "
            style={{
              color: "#312312",
            }}
          >
            Chef&apos;s Picks
          </h2>

          <div
            data-auto-reveal
            className="
              relative mt-8 w-full max-w-[1120px]
              rounded-[38px] border-[6px]
              px-6 pt-10 pb-16
              sm:px-10 sm:pt-12 sm:pb-16
              md:px-14 md:pt-14 md:pb-18
              lg:mt-10 lg:px-16 lg:pt-14 lg:pb-18
              shadow-[0_20px_50px_rgba(49,35,18,0.06)]
            "
            style={{
              borderColor: "#F9C0B7",
              backgroundColor: "#F2E9E2",
            }}
          >
            <p
              className="
                mx-auto max-w-[860px] text-center
                text-[18px] leading-[1.3]
                sm:text-[24px]
                md:text-[32px]
                lg:text-[36px]
              "
              style={{
                fontFamily: '"Albert Sans", sans-serif',
                fontWeight: 400,
                color: "#908B83",
              }}
            >
              Welcome, new visitors and returning friends. With Prospect Heights
              now open, Chef Mei Chau&apos;s menu keeps moving between classic dim
              sum, neighborhood comfort, and bold plates made for sharing.
            </p>

            <Image
              src={third}
              alt=""
              aria-hidden="true"
              className="
                absolute bottom-[-12px] right-4
                h-auto w-[92px]
                sm:w-[112px]
                md:w-[130px]
                lg:w-[150px]
                animate-[floatY_4s_ease-in-out_infinite]
              "
            />
          </div>
        </div>
      </div>

      {/* SMALL PLATES */}
      <div
        className="relative overflow-hidden"
        style={{ backgroundColor: "#F3E4D0" }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute left-[15%] top-[18%] h-56 w-56 rounded-full bg-[#FFD9CF]/35 blur-3xl" />
          <div className="absolute right-[8%] bottom-[8%] h-56 w-56 rounded-full bg-[#FFEB8D]/20 blur-3xl" />
        </div>

        <div
          className="
            relative z-10 mx-auto w-full max-w-[1600px]
            px-5 pt-14 pb-18
            sm:px-8 sm:pt-16 sm:pb-20
            md:px-12 md:pt-18 md:pb-20
            lg:px-16 lg:pt-20 lg:pb-24
            xl:px-24
          "
        >
          <h2
            data-auto-reveal
            className="
              display-font text-center leading-none
              text-[50px]
              sm:text-[66px]
              md:text-[82px]
              lg:text-[94px]
            "
            style={{
              color: "#312312",
            }}
          >
            Small Plate Stars
          </h2>

          <div
            data-auto-reveal
            className="
              mt-8 inline-flex items-center rounded-[8px]
              border px-5 py-2
              sm:mt-10 sm:px-6 sm:py-2.5
              shadow-[0_12px_30px_rgba(49,35,18,0.06)]
            "
            style={{
              borderColor: "rgba(249,192,183,0.72)",
              backgroundColor: "rgba(255,249,240,0.72)",
            }}
          >
            <span
              className="text-[20px] sm:text-[24px] md:text-[26px]"
              style={{
                fontFamily: '"Albert Sans", sans-serif',
                fontWeight: 800,
                color: "#908B83",
              }}
            >
              Our featured small plates:
            </span>
          </div>

          <div
            className="
              mt-10 grid grid-cols-1 justify-items-center gap-8
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            <MenuCard
              title="CRISPY DUCK ROLLS"
              tag="popular"
              tagIcon={img1}
              foodImage={foodimg2}
              delay="0ms"
              className="lg:pt-10"
            />
            <MenuCard
              title="SAVORY LAMB DUMPLINGS"
              tag="dumpling"
              tagIcon={dumpling}
              foodImage={foodimg1}
              delay="110ms"
            />
            <MenuCard
              title="SPICY CHICKEN GUA BAO"
              tag="spicy"
              tagIcon={spicy}
              foodImage={foodimg3}
              delay="220ms"
            />
          </div>
        </div>
      </div>

      {/* MAIN COURSES */}
      <div
        className="relative overflow-hidden"
        style={{ backgroundColor: "#F2E9E2" }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute left-[8%] top-[20%] h-64 w-64 rounded-full bg-[#FFEB8D]/20 blur-3xl" />
          <div className="absolute right-[10%] top-[28%] h-56 w-56 rounded-full bg-[#FFD202]/18 blur-3xl" />
          <div className="absolute left-1/2 bottom-[8%] h-40 w-40 -translate-x-1/2 rounded-full bg-[#F9C0B7]/20 blur-3xl" />
        </div>

        <div
          className="
            relative z-10 mx-auto w-full max-w-[1600px]
            px-5 pt-12 pb-20
            sm:px-8 sm:pt-14
            md:px-12 md:pt-16 md:pb-20
            lg:px-16 lg:pt-18 lg:pb-24
            xl:px-24
          "
        >
          <div
            data-auto-reveal
            className="
              inline-flex items-center rounded-[8px]
              border px-5 py-2
              sm:px-6 sm:py-2.5
              shadow-[0_12px_30px_rgba(49,35,18,0.06)]
            "
            style={{
              borderColor: "rgba(237,195,1,0.42)",
              backgroundColor: "rgba(255,249,240,0.72)",
            }}
          >
            <span
              className="text-[20px] sm:text-[24px] md:text-[26px]"
              style={{
                fontFamily: '"Albert Sans", sans-serif',
                fontWeight: 800,
                color: "#908B83",
              }}
            >
              Our featured main courses:
            </span>
          </div>

          <div
            className="
              mt-10 grid grid-cols-1 gap-8
              lg:grid-cols-12 lg:gap-10
            "
          >
            {/* LEFT FEATURED CARD */}
            <div
              data-reveal
              className="reveal-up lg:col-span-7"
            >
              <div
                className="
                  group relative overflow-hidden
                  rounded-[16px] border-[3px] bg-[#FFF9F0]
                  px-6 py-7
                  shadow-[0_18px_45px_rgba(49,35,18,0.08)]
                  sm:px-8 sm:py-8
                  lg:min-h-[460px]
                "
                style={{ borderColor: "#EDC301" }}
              >
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FFEB8D]/18 to-transparent" />
                </div>

                <div className="relative z-10 flex h-full flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                  <div className="flex max-w-[360px] flex-col items-start">
                    <h3
                      className="
                        display-font leading-[0.94]
                        text-[52px]
                        sm:text-[62px]
                        lg:text-[72px]
                      "
                      style={{
                        color: "#312312",
                      }}
                    >
                      SICHUAN BAN
                      <br />
                      MEIN
                    </h3>

                    <div
                      className="
                        mt-5 inline-flex items-center justify-center gap-2
                        rounded-full px-5 py-2
                      "
                      style={{ backgroundColor: "#FFD202" }}
                    >
                      <span
                        className="text-[18px] leading-none"
                        style={{
                          fontFamily: '"Albert Sans", sans-serif',
                          fontWeight: 800,
                          color: "#FFFFFF",
                        }}
                      >
                        spicy
                      </span>
                      <Image
                        src={spicy}
                        alt=""
                        aria-hidden="true"
                        className="h-[24px] w-[24px] object-contain sm:h-[28px] sm:w-[28px]"
                      />
                    </div>

                    <p
                      className="
                        mt-6 max-w-[320px]
                        text-[16px] leading-[1.35]
                        sm:text-[17px]
                        lg:text-[18px]
                      "
                      style={{
                        fontFamily: '"Albert Sans", sans-serif',
                        fontWeight: 400,
                        color: "#908B83",
                      }}
                    >
                      Dao Xiao noodles tossed with mala spicy sauce, cucumber,
                      shredded chicken, and shiitake mushrooms for a dish with
                      serious personality.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-1 justify-center lg:mt-0 lg:justify-end">
                    <div className="relative rounded-[14px] border border-[#EDC301]/12 bg-[#F7F1E8] px-5 py-6">
                      <div className="absolute inset-0 rounded-[14px] bg-[#FFEB8D]/10" />
                      <Image
                        src={foodimg4}
                        alt="Sichuan Ban Mein"
                        className="
                          lift-image relative h-auto w-[260px] object-contain mix-blend-multiply
                          sm:w-[300px]
                          lg:w-[360px]
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT STACKED CARD */}
            <div
              data-reveal
              className="reveal-up lg:col-span-5 lg:pt-2"
              style={{ "--reveal-delay": "140ms" } as CSSProperties}
            >
              <div
                className="
                  group relative overflow-hidden
                  rounded-[16px] border-[3px] bg-[#FFF9F0]
                  px-6 py-7
                  shadow-[0_16px_40px_rgba(49,35,18,0.07)]
                  sm:px-8
                  lg:min-h-[420px]
                "
                style={{ borderColor: "#EDC301" }}
              >
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#FFEB8D]/18 to-transparent" />
                </div>

                <div className="relative z-10 flex h-full flex-col items-center text-center">
                  <h3
                    className="
                      display-font leading-[0.94]
                      text-[48px]
                      sm:text-[56px]
                      lg:text-[64px]
                    "
                    style={{
                      color: "#312312",
                    }}
                  >
                    NOODLE SOUP
                    <br />
                    BOWL
                  </h3>

                  <div
                    className="
                      mt-5 inline-flex items-center justify-center gap-2
                      rounded-full px-5 py-2
                    "
                    style={{ backgroundColor: "#FFD202" }}
                  >
                    <span
                      className="text-[18px] leading-none"
                      style={{
                        fontFamily: '"Albert Sans", sans-serif',
                        fontWeight: 800,
                        color: "#FFFFFF",
                      }}
                    >
                        soup
                      </span>
                      <Image
                        src={soup}
                        alt=""
                        aria-hidden="true"
                        className="h-[24px] w-[24px] object-contain sm:h-[28px] sm:w-[28px]"
                      />
                    </div>

                  <div className="relative mt-5 rounded-[14px] border border-[#EDC301]/12 bg-[#F7F1E8] px-5 py-5">
                    <div className="absolute inset-0 rounded-[14px] bg-[#FFEB8D]/10" />
                    <Image
                      src={foodimg5}
                      alt="Noodle Soup Bowl"
                      className="
                        lift-image relative h-auto w-[230px] object-contain mix-blend-multiply
                        sm:w-[260px]
                        lg:w-[290px]
                      "
                    />
                  </div>

                  <p
                    className="
                      mt-6 max-w-[320px]
                      text-[15px] leading-[1.3]
                      sm:text-[16px]
                    "
                    style={{
                      fontFamily: '"Albert Sans", sans-serif',
                      fontWeight: 400,
                      color: "#908B83",
                    }}
                  >
                    Choose a noodle, toppings, and a soup base like chicken bone
                    broth, mala spicy soup, coconut curry soup, or veggie broth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
