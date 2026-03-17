"use client";
import Link from "next/link";
import Image from "next/image";
import delivery from "@/assets/delivery.png";
import pickup from "@/assets/pickup.png";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";

type FeatureCardProps = {
  image: any;
  title: string;
  description: string;
};

function FeatureCard({ image, title, description }: FeatureCardProps) {
  return (
    <div
      className="
        group relative flex h-full flex-col overflow-hidden
        rounded-[28px] border-[4px] bg-white
        shadow-[0_18px_40px_rgba(49,35,18,0.08)]
        transition-all duration-500 ease-out
        hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(49,35,18,0.14)]
      "
      style={{ borderColor: "#F9C0B7" }}
    >
      <div className="relative overflow-hidden rounded-t-[22px] p-3 sm:p-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,217,207,0.28),transparent_45%)]" />
        <Image
          src={image}
          alt={title}
          className="
            relative z-10 h-[170px] w-full rounded-[20px] object-cover
            transition duration-500 group-hover:scale-[1.05]
            sm:h-[190px]
            lg:h-[210px]
          "
        />
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-1 sm:px-6 sm:pb-6">
        <h3
          className="text-[26px] leading-[1.05] sm:text-[28px]"
          style={{
            fontFamily: '"Albert Sans", sans-serif',
            fontWeight: 800,
            color: "#312312",
          }}
        >
          {title}
        </h3>

        <p
          className="mt-3 max-w-[95%] text-[15px] leading-[1.32] sm:text-[16px]"
          style={{
            fontFamily: '"Albert Sans", sans-serif',
            fontWeight: 400,
            color: "#908B83",
          }}
        >
          {description}
        </p>

        <button
          className="
            group/btn relative mt-5 inline-flex w-fit items-center gap-2 overflow-hidden
            rounded-full px-5 py-2.5
            text-[14px] transition duration-300 hover:scale-[1.04]
          "
          style={{
            backgroundColor: "#F7CDC4",
            color: "#FFFFFF",
            fontFamily: '"Albert Sans", sans-serif',
            fontWeight: 800,
          }}
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-700 group-hover/btn:translate-x-full" />
          <span className="relative z-10">see more</span>
          <span className="relative z-10 text-[18px] leading-none">→</span>
        </button>
      </div>
    </div>
  );
}

export default function OrderFeaturesSection() {
  return (
    <section className="w-full overflow-hidden">
      {/* ORDER ONLINE */}
      <div
        className="relative overflow-hidden"
        style={{ backgroundColor: "#F4E2CD" }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-[20%] h-48 w-48 rounded-full bg-[#FFD9CF]/28 blur-3xl" />
          <div className="absolute right-[8%] top-[18%] h-56 w-56 rounded-full bg-[#FFEB8D]/20 blur-3xl" />
        </div>

        <div
          className="
            relative z-10 mx-auto flex w-full max-w-[1600px] flex-col items-center
            px-6 py-16
            sm:px-8 sm:py-18
            md:px-12 md:py-20
            lg:px-16 lg:py-24
            xl:px-24
          "
        >
          <h2
            className="
              text-center uppercase leading-none
              text-[44px]
              sm:text-[58px]
              md:text-[70px]
              lg:text-[78px]
            "
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              color: "#312312",
            }}
          >
            ORDER ONLINE
          </h2>

          <p
            className="
              mt-3 text-center
              text-[16px]
              sm:text-[19px]
              md:text-[22px]
              lg:text-[24px]
            "
            style={{
              fontFamily: '"Albert Sans", sans-serif',
              fontWeight: 400,
              color: "#908B83",
            }}
          >
            click order button an online order page will pop up
          </p>

          <div
            className="
              mt-10 grid w-full max-w-[980px] grid-cols-1 gap-10
              sm:mt-12
              md:grid-cols-2 md:gap-14
              lg:mt-14 lg:gap-20
            "
          >
            {/* DELIVERY */}
            <div className="flex flex-col items-center">
              <div className="group relative">
                <div className="absolute inset-0 scale-90 rounded-full bg-[#FFD202]/25 blur-3xl" />
                <Image
                  src={delivery}
                  alt="Delivery"
                  className="
                    relative z-10 h-auto w-[190px] object-contain
                    transition duration-500 group-hover:scale-[1.06] group-hover:-translate-y-1
                    sm:w-[220px]
                    lg:w-[250px]
                  "
                />
              </div>

 <Link href="https://www.grubhub.com/restaurant/petite-dumpling-276-5th-avenue-ste-a-brooklyn/4840112?classicAffiliateId=%2Fr%2Fw%2F4840112%2F&utm_source=internal.restaurant.grubhub.com&utm_medium=OOL&utm_campaign=order%20online&utm_content=4840112">
  <button
    className="
      group relative mt-5 inline-flex items-center justify-center overflow-hidden
      rounded-full px-10 py-3.5
      text-[22px]
      sm:mt-6 sm:px-12 sm:py-4 sm:text-[24px]
      lg:px-14 lg:text-[26px]
      transition duration-300 hover:scale-[1.05]
      shadow-[0_18px_34px_rgba(237,195,1,0.20)]
    "
    style={{
      backgroundColor: "#EDC301",
      color: "#FFFFFF",
      fontFamily: '"Albert Sans", sans-serif',
      fontWeight: 800,
    }}
  >
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
    <span className="relative z-10">DELIVERY</span>
  </button>
</Link>
            </div>

            {/* PICK UP */}
            <div className="flex flex-col items-center">
              <div className="group relative">
                <div className="absolute inset-0 scale-90 rounded-full bg-[#F9C0B7]/25 blur-3xl" />
                <Image
                  src={pickup}
                  alt="Pick up"
                  className="
                    relative z-10 h-auto w-[190px] object-contain
                    transition duration-500 group-hover:scale-[1.06] group-hover:-translate-y-1
                    sm:w-[220px]
                    lg:w-[250px]
                  "
                />
              </div>
<Link href="https://order.snackpass.co/673beea78cacfab5b17d4e88?utm_source=qr">
              <button
                className="
                  group relative mt-5 inline-flex items-center justify-center overflow-hidden
                  rounded-full border-[3px] px-10 py-3.5
                  text-[22px]
                  sm:mt-6 sm:px-12 sm:py-4 sm:text-[24px]
                  lg:px-14 lg:text-[26px]
                  transition duration-300 hover:scale-[1.05]
                  bg-[rgba(255,255,255,0.30)] backdrop-blur-md
                "
                style={{
                  borderColor: "#EDC301",
                  color: "#EDC301",
                  fontFamily: '"Albert Sans", sans-serif',
                  fontWeight: 800,
                }}
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#FFEB8D]/25 to-transparent transition duration-700 group-hover:translate-x-full" />
                <span className="relative z-10">PICK UP</span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* MORE FEATURES */}
      <div
        className="relative overflow-hidden"
        style={{ backgroundColor: "#F2E9E2" }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[12%] bottom-[12%] h-52 w-52 rounded-full bg-[#FFD9CF]/24 blur-3xl" />
          <div className="absolute right-[10%] top-[18%] h-52 w-52 rounded-full bg-[#FFEB8D]/18 blur-3xl" />
        </div>

        <div
          className="
            relative z-10 mx-auto w-full max-w-[1600px]
            px-6 py-16
            sm:px-8 sm:py-18
            md:px-12 md:py-20
            lg:px-16 lg:py-24
            xl:px-24
          "
        >
          <h2
            className="
              text-center uppercase leading-none
              text-[44px]
              sm:text-[58px]
              md:text-[70px]
              lg:text-[78px]
            "
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              color: "#312312",
            }}
          >
            MORE FEATURES
          </h2>

          <div
            className="
              mt-10 grid grid-cols-1 gap-8
              md:grid-cols-2
              xl:grid-cols-3
              lg:mt-12
            "
          >
            <FeatureCard
              image={image1}
              title="Braised Short Ribs"
              description="Slow cooked with cardamom, miso, wines and herbs"
            />
            <FeatureCard
              image={image2}
              title="Har Gow – Shrimp Dumpling"
              description="Steamed smash shrimp wrapped in translucence skin. Sorry, there is a bit of pork lard in it!"
            />
            <FeatureCard
              image={image3}
              title="Sichuan Bàn-Mein"
              description="Tossed Dao Xiao noodle(fettuccini) with mala spicy sauce, cucumber, shredded chicken and shiitaki mushrooms"
            />
          </div>
        </div>
      </div>
    </section>
  );
}