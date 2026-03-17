import Image from "next/image";
import menuImg from "@/assets/menu.png";
import cuteback from "@/assets/cuteback.png";

export default function MenuPosterSection() {
  return (
    <section
      id="menu"
      className="
        relative w-full overflow-hidden
        px-4 py-16
        sm:px-6 sm:py-20
        md:px-10 md:py-24
        lg:px-14 lg:py-28
      "
      style={{
        backgroundImage: `url(${cuteback.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "cover",
      }}
    >
      {/* soft overlay so text reads better */}
      <div className="absolute inset-0 bg-[rgba(244,233,226,0.78)]" />

      {/* extra glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-[12%] h-40 w-40 rounded-full bg-[#F9C0B7]/20 blur-3xl sm:h-56 sm:w-56" />
        <div className="absolute right-[8%] top-[20%] h-44 w-44 rounded-full bg-[#FFEB8D]/20 blur-3xl sm:h-64 sm:w-64" />
        <div className="absolute bottom-[10%] left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-white/25 blur-3xl sm:h-72 sm:w-72" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-col items-center">
        {/* heading */}
        <div className="text-center">
          <p
            className="
              text-[14px] uppercase tracking-[0.35em]
              sm:text-[15px]
            "
            style={{
              fontFamily: '"Albert Sans", sans-serif',
              fontWeight: 800,
              color: "#908B83",
            }}
          >
            handcrafted favorites
          </p>

          <h2
            className="
              mt-3 leading-none
              text-[52px]
              sm:text-[72px]
              md:text-[92px]
              lg:text-[116px]
            "
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              color: "#312312",
            }}
          >
            MENU
          </h2>

          <p
            className="
              mx-auto mt-5 max-w-[860px]
              text-center leading-[1.3]
              text-[16px]
              sm:text-[18px]
              md:text-[22px]
              lg:text-[24px]
            "
            style={{
              fontFamily: '"Albert Sans", sans-serif',
              fontWeight: 400,
              color: "#908B83",
            }}
          >
            Explore our full spread of dumplings, noodles, soups, and small
            plates, all gathered into one illustrated menu with playful details
            and bold flavor.
          </p>
        </div>

        {/* accent pills */}
        <div
          className="
            mt-8 flex flex-wrap items-center justify-center gap-3
            sm:mt-10 sm:gap-4
          "
        >
          <div
            className="rounded-full border-[3px] px-4 py-2 sm:px-5"
            style={{ borderColor: "#F9C0B7", backgroundColor: "#FFD9CF" }}
          >
            <span
              className="text-[14px] sm:text-[16px]"
              style={{
                fontFamily: '"Albert Sans", sans-serif',
                fontWeight: 800,
                color: "#908B83",
              }}
            >
              dim sum classics
            </span>
          </div>

          <div
            className="rounded-full border-[3px] px-4 py-2 sm:px-5"
            style={{ borderColor: "#FFD202", backgroundColor: "#FFEB8D" }}
          >
            <span
              className="text-[14px] sm:text-[16px]"
              style={{
                fontFamily: '"Albert Sans", sans-serif',
                fontWeight: 800,
                color: "#908B83",
              }}
            >
              noodles + soups
            </span>
          </div>

          <div
            className="rounded-full border-[3px] px-4 py-2 sm:px-5"
            style={{ borderColor: "#EDC301", backgroundColor: "#FFF8D2" }}
          >
            <span
              className="text-[14px] sm:text-[16px]"
              style={{
                fontFamily: '"Albert Sans", sans-serif',
                fontWeight: 800,
                color: "#908B83",
              }}
            >
              chef specials
            </span>
          </div>
        </div>

        {/* main poster area */}
        <div
          className="
            relative mt-10 w-full
            sm:mt-12
            lg:mt-14
          "
        >
          {/* outer glow frame */}
          <div className="absolute inset-0 mx-auto w-[92%] max-w-[1100px] rounded-[38px] bg-[rgba(255,255,255,0.22)] blur-3xl" />

          <div
            className="
              relative mx-auto w-full max-w-[1120px]
              rounded-[32px] border-[4px]
              bg-[rgba(255,255,255,0.32)]
              p-3
              shadow-[0_25px_70px_rgba(49,35,18,0.16)]
              backdrop-blur-md
              sm:rounded-[36px] sm:p-4
              md:p-5
              lg:rounded-[40px] lg:p-6
            "
            style={{
              borderColor: "#F9C0B7",
            }}
          >
            {/* top badge */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div
                className="rounded-full border-[3px] px-5 py-2 shadow-sm"
                style={{
                  borderColor: "#FFD202",
                  backgroundColor: "#FFEB8D",
                }}
              >
                <span
                  className="text-[14px] sm:text-[15px]"
                  style={{
                    fontFamily: '"Albert Sans", sans-serif',
                    fontWeight: 800,
                    color: "#312312",
                  }}
                >
                  full restaurant menu
                </span>
              </div>
            </div>

            {/* poster */}
            <div
              className="
                group relative overflow-hidden rounded-[24px]
                bg-[#F2E9E2]
                p-2
                sm:rounded-[28px] sm:p-3
                md:p-4
              "
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute left-[12%] top-[12%] h-28 w-28 rounded-full bg-[#FFEB8D]/20 blur-2xl" />
                <div className="absolute bottom-[10%] right-[10%] h-36 w-36 rounded-full bg-[#F9C0B7]/20 blur-3xl" />
              </div>

              <Image
                src={menuImg}
                alt="Petite Dumpling full menu"
                priority={false}
                className="
                  relative z-10 h-auto w-full rounded-[18px] object-contain
                  transition duration-500 ease-out
                  group-hover:scale-[1.01]
                "
              />
            </div>
          </div>
        </div>

        {/* bottom helper text */}
        <div className="mt-8 text-center sm:mt-10">

        </div>
      </div>
    </section>
  );
}