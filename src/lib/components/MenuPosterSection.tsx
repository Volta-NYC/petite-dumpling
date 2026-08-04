import Image from "next/image";
import type { StaticImageData } from "next/image";
import menuImg from "@/assets/menu.png";
import prospectMenuImg from "@/assets/prospect-menu.png";
import cuteback from "@/assets/cuteback.png";
import { MENU_LINKS } from "@/lib/restaurantInfo";

type MenuPosterCardProps = {
  title: string;
  eyebrow: string;
  description: string;
  image: StaticImageData;
  href: string;
  alt: string;
};

function MenuPosterCard({
  title,
  eyebrow,
  description,
  image,
  href,
  alt,
}: MenuPosterCardProps) {
  return (
    <article data-reveal className="reveal-up relative w-full">
      <div className="absolute inset-0 mx-auto w-[92%] rounded-[38px] bg-[rgba(255,255,255,0.22)] blur-3xl" />

      <div
        className="
          relative mx-auto w-full
          rounded-[8px] border-[4px]
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
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#2F7D63]">
              {eyebrow}
            </p>
            <h3 className="display-font mt-1 text-[42px] leading-none text-[#312312] sm:text-[54px]">
              {title}
            </h3>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="cta-sweep inline-flex min-h-[42px] items-center rounded-full bg-[#EDC301] px-5 text-[14px] font-extrabold text-white"
          >
            Open menu
          </a>
        </div>

        <p className="mb-5 max-w-[760px] text-[15px] leading-[1.42] text-[#6F675F] sm:text-[16px]">
          {description}
        </p>

        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="group block overflow-hidden rounded-[8px] bg-[#F2E9E2] p-2 transition hover:shadow-[0_16px_34px_rgba(49,35,18,0.12)] sm:p-3 md:p-4"
        >
          <Image
            src={image}
            alt={alt}
            priority={false}
            className="lift-image relative z-10 h-auto w-full rounded-[6px] object-contain"
          />
        </a>
      </div>
    </article>
  );
}

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
            Dumplings, noodles, soups, small plates, and chef specials for both
            Brooklyn locations.
          </p>
        </div>

        <div className="mt-10 grid w-full gap-8 sm:mt-12 lg:mt-14 xl:grid-cols-2">
          <MenuPosterCard
            title="Park Slope Menu"
            eyebrow="276 5th Avenue"
            description="The original Park Slope menu with noodle soup bowls, dim sum, tossed noodles, bao, big platters, daily greens, tea, sides, and toppings."
            image={menuImg}
            href={MENU_LINKS.parkSlope}
            alt="Petite Dumpling Park Slope full restaurant menu with dim sum, soup dumplings, bao, noodles, soups, small platters, big platters, congee, sides, tea, and toppings."
          />
          <MenuPosterCard
            title="Prospect Heights Menu"
            eyebrow="770 Washington Ave"
            description="The new Prospect Heights menu focuses on dim sum, soup dumplings, dumplings, bao, gua bao, congee, tossed noodles, soups, daily greens, and sides."
            image={prospectMenuImg}
            href={MENU_LINKS.prospectHeights}
            alt="Petite Dumpling Prospect Heights menu with dim sum, soup dumplings, dumplings, bao, gua bao, congee, tossed noodles, daily greens, soups, small platters, and sides."
          />
        </div>

        <p className="mt-8 max-w-[760px] text-center text-[14px] leading-[1.45] text-[#6F675F] sm:text-[15px]">
          Please tell us your allergies. Some dishes contain peanuts and sesame.
          Mala means spicy sauce made with Sichuan peppercorns.
        </p>
      </div>
    </section>
  );
}
