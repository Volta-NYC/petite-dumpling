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
      <div className="absolute inset-0 bg-[rgba(244,233,226,0.78)]" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-[12%] h-40 w-40 rounded-full bg-[#F9C0B7]/20 blur-3xl sm:h-56 sm:w-56" />
        <div className="absolute right-[8%] top-[20%] h-44 w-44 rounded-full bg-[#FFEB8D]/20 blur-3xl sm:h-64 sm:w-64" />
        <div className="absolute bottom-[10%] left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-white/25 blur-3xl sm:h-72 sm:w-72" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-col items-center">
        <div data-reveal className="reveal-up text-center">
          <p className="text-[14px] font-extrabold text-[#2F7D63] sm:text-[15px]">
            handcrafted favorites
          </p>

          <h2 className="display-font mt-2 text-[62px] leading-none text-[#312312] sm:text-[84px] md:text-[104px] lg:text-[128px]">
            Full Menu
          </h2>

          <p className="mx-auto mt-4 max-w-[820px] text-center text-[16px] leading-[1.4] text-[#6F675F] sm:text-[18px] md:text-[21px]">
            Dumplings, noodles, soups, small plates, and chef specials all on
            the original illustrated menu.
          </p>
        </div>

        <div data-reveal className="reveal-up relative mt-10 w-full sm:mt-12 lg:mt-14">
          <div className="absolute inset-0 mx-auto w-[92%] max-w-[1100px] rounded-[38px] bg-[rgba(255,255,255,0.22)] blur-3xl" />

          <div
            className="
              relative mx-auto w-full max-w-[1120px]
              rounded-[28px] border-[4px]
              bg-[rgba(255,255,255,0.32)]
              p-3
              shadow-[0_25px_70px_rgba(49,35,18,0.16)]
              backdrop-blur-md
              sm:p-4
              md:p-5
              lg:p-6
            "
            style={{ borderColor: "#F9C0B7" }}
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div
                className="rounded-full border-[3px] px-5 py-2 shadow-sm"
                style={{
                  borderColor: "#FFD202",
                  backgroundColor: "#FFEB8D",
                }}
              >
                <span className="text-[14px] font-extrabold text-[#312312] sm:text-[15px]">
                  full restaurant menu
                </span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[20px] bg-[#F2E9E2] p-2 sm:p-3 md:p-4">
              <Image
                src={menuImg}
                alt="Petite Dumpling full restaurant menu with dim sum, soup dumplings, bao, noodles, soups, small platters, big platters, congee, sides, tea, and toppings."
                priority={false}
                className="
                  lift-image relative z-10 h-auto w-full rounded-[16px] object-contain
                "
              />
            </div>
          </div>
        </div>

        <p className="mt-8 max-w-[760px] text-center text-[14px] leading-[1.45] text-[#6F675F] sm:text-[15px]">
          Please tell us your allergies. Some dishes contain peanuts and sesame.
          Mala means spicy sauce made with Sichuan peppercorns.
        </p>
      </div>
    </section>
  );
}
