import Image from "next/image";
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
            alt="Section background"
            fill
            className="object-cover object-top"
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
          <div className="flex w-full max-w-[720px] flex-col items-start lg:w-[44%]">
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
                className="text-[11px] uppercase tracking-[0.24em] sm:text-[12px]"
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
                mt-5 uppercase leading-[0.95]
                text-[44px]
                sm:text-[56px]
                md:text-[68px]
                lg:text-[74px]
                xl:text-[82px]
              "
              style={{
                color: "#312312",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
              }}
            >
              WELCOME!
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
              In Petite Dumpling we serve dim sum, dumplings, and small plates all
              day. Dim sum is a traditional Cantonese dish and refers to small,
              bite-sized portions. The Chinese meaning of dim sum is commonly
              translated to “touch the heart.”
              <br />
              <br />
              It is basically a very decadent breakfast that served in steamer
              baskets or on small plates, and is often pushed around in carts for
              customers to order from. Carts differentiate steamed, baked, and
              fried dishes that come with 3–4 pieces for everyone to share.
              <br />
              <br />
              Dim sum go through many renaissance phases, especially in Hong Kong,
              where dim sum is a popular and casual staple for any occasion.
              Furthermore dishes expand to include many other regional cuisines;
              fusion dishes such as bacon-wrap shrimp ball and mayo dipping sauce
              are common.
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

            <button
              className="
                group relative mt-6 inline-flex items-center gap-3 overflow-hidden
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
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
              }}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-700 group-hover:translate-x-full" />
              <span className="relative z-10">PLACE AN ORDER</span>
              <span className="relative z-10 text-[20px] leading-none sm:text-[22px]">
                ›
              </span>
            </button>
          </div>

          {/* Right image */}
          <div className="flex w-full justify-center lg:w-[56%] lg:justify-end">
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
                  alt="Dim sum"
                  className="
                    relative z-10 h-auto w-full object-contain
                    transition duration-500 ease-out
                    group-hover:scale-[1.03]
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
          <div className="flex w-full justify-center lg:w-[54%] lg:justify-start">
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
                  alt="Dim sum second"
                  className="
                    h-auto w-full object-contain
                    transition duration-500 ease-out
                    group-hover:scale-[1.03]
                  "
                />
              </div>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="flex w-full max-w-[720px] flex-col items-start lg:w-[46%]">
            <div
              className="
                rounded-[32px] border-[4px]
                bg-[rgba(255,255,255,0.42)]
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
                  className="text-[13px] sm:text-[14px]"
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
                  text-[24px] leading-[1.22]
                  sm:text-[27px]
                  md:text-[29px]
                  lg:text-[31px]
                "
                style={{
                  color: "#908B83",
                  fontFamily: '"Albert Sans", sans-serif',
                  fontWeight: 400,
                }}
              >
                “Embrace the fiery energy of the Year of the Red Horse, marked by
                bold actions and rapid progress. Balance with self-care to avoid
                burnout. It promises breakthroughs and demands wise leadership to
                harness its energy.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}