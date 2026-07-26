import Image from "next/image";
import headerBack from "@/assets/headerback.png";
import letters from "@/assets/letters.png";
import deliveryLogo from "@/assets/deliverylogo.png";
import arrowLogo from "@/assets/arrowlogo.png";
import { ORDER_LINKS } from "@/lib/restaurantInfo";

export default function Header() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <h1 className="sr-only">Petite Dumpling handcrafted dumplings in Brooklyn</h1>
      {/* Background for sm/md */}
      <div
        data-parallax
        className="parallax-layer absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
        style={{
          backgroundImage: `url(${headerBack.src})`,
        }}
      />

      {/* Background for lg */}
      <div className="hidden lg:block w-full">
        <Image
          src={headerBack}
          alt=""
          priority
          data-parallax
          className="parallax-layer h-auto w-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex w-full items-center justify-center">
        <div className="flex flex-col items-center text-center">
          {/* Symbol */}
<div className="relative chinese-symbol-wrap">
  {/* Glow layer */}
  <Image
    src={letters}
    alt=""
    priority
    aria-hidden="true"
    className="
      chinese-symbol-glow
      absolute inset-0
      h-auto object-contain
      w-[22vw] min-w-[200px] max-w-[270px]
      sm:w-[20vw] sm:min-w-[250px] sm:max-w-[610px] sm:mr-[100px]
      md:w-[19vw] md:min-w-[250px] md:max-w-[660px] md:mr-[30px]
      lg:w-[11vw] lg:min-w-[205px] lg:max-w-[285px] lg:mr-[22px] lg:mt-20
    "
  />

  {/* Main symbol */}
  <Image
    src={letters}
    alt=""
    priority
    aria-hidden="true"
    className="
      chinese-symbol-main
      relative
      h-auto object-contain
      w-[22vw] min-w-[200px] max-w-[270px]
      sm:w-[20vw] sm:min-w-[250px] sm:max-w-[610px] sm:mr-[100px]
      md:w-[19vw] md:min-w-[250px] md:max-w-[660px] md:mr-[30px]
      lg:w-[11vw] lg:min-w-[205px] lg:max-w-[285px] lg:mr-[22px] lg:mt-20
    "
  />
</div>

          {/* Subtitle */}
          <p
            className="
              mt-2 text-[#F5F5F5] tracking-wider leading-none
              text-[30px]
              sm:text-[38px]
              md:text-[40px]
              lg:mt-2 lg:text-[29px]
            "
            style={{
              fontFamily: "var(--font-albert-sans), sans-serif",
              fontWeight: 400,
            }}
          >
            handcrafted dumpling
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:mt-[34px] lg:gap-6">
           <a
              href={ORDER_LINKS.parkSlopeDelivery}
              target="_blank"
              rel="noreferrer"
              className="
                cta-sweep
                flex items-center justify-center gap-2
                rounded-full bg-[#EDC301] text-white
                h-[48px] min-w-[150px] px-5
                md:h-[48px] md:min-w-[165px]
                lg:h-[56px] lg:min-w-[180px] lg:px-8
                shadow-[0_10px_28px_rgba(237,195,1,0.18)]
                transition duration-200 hover:scale-[1.03]
              "
            >
              <span
                className="text-[13px] leading-none md:text-[16px] lg:text-[17px]"
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontWeight: 800,
                  letterSpacing: "0.01em",
                }}
              >
                DELIVERY
              </span>

              <Image
                src={deliveryLogo}
                alt=""
                aria-hidden="true"
                width={20}
                height={20}
                className="object-contain md:h-[20px] md:w-[20px] lg:h-[34px] lg:w-[34px]"
              />
            </a>
            <a
              href="#locations"
              className="
                cta-sweep
                flex items-center justify-center gap-2
                rounded-full border border-[#FFEB8D]
                bg-[rgba(255,255,255,0.05)] text-[#FFEB8D]
                h-[48px] min-w-[150px] px-5
                md:h-[48px] md:min-w-[165px]
                lg:h-[56px] lg:min-w-[180px] lg:px-8
                backdrop-blur-[8px]
                shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]
                transition duration-200 hover:scale-[1.03] hover:bg-[rgba(255,255,255,0.08)]
              "
            >
              <span
                className="text-[13px] leading-none md:text-[16px] lg:text-[17px]"
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontWeight: 800,
                  letterSpacing: "0.01em",
                }}
              >
                PICK UP
              </span>

              <Image
                src={arrowLogo}
                alt=""
                aria-hidden="true"
                width={18}
                height={18}
                className="h-[14px] w-[14px] object-contain md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] lg:ml-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
