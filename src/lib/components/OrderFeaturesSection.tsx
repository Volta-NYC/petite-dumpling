"use client";
import Image from "next/image";
import type { CSSProperties } from "react";
import delivery from "@/assets/delivery.png";
import pickup from "@/assets/pickup.png";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import { Star } from "lucide-react";
import { LOCATIONS, ORDER_LINKS } from "@/lib/restaurantInfo";

type FeatureCardProps = {
  image: any;
  title: string;
  description: string;
  delay?: string;
};

type Review = {
  name: string;
  location: string;
  date: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Dani L.",
    location: "Queens, NY",
    date: "May 5, 2026",
    text: "The spinach tofu congee with egg is very comforting. They have tons of veg friendly options and it's very affordable!",
  },
  {
    name: "Ann S.",
    location: "Cincinnati, OH",
    date: "Sep 22, 2025",
    text: "The perfect spot for lunch. Chicken siumai, bao, cucumber salad, dumplings, and scallion pancakes were all delicious.",
  },
  {
    name: "Sally X.",
    location: "Brooklyn, NY",
    date: "Jan 1, 2026",
    text: "Small but very cozy. The server was friendly, funny and helpful. Soup dumplings and Filipino fried ribs were perfect for lunch.",
  },
  {
    name: "Kara E.",
    location: "Claremont, CA",
    date: "Dec 23, 2025",
    text: "The food was amazing. Highlights were har gao, barbecue pork bun, soup dumplings, and any of the pot stickers.",
  },
  {
    name: "Theresa N.",
    location: "San Francisco, CA",
    date: "Jan 31, 2026",
    text: "A surprise find during our vacation in New York. Delicious food, attentive service, and cozy ambiance.",
  },
  {
    name: "Paula R.",
    location: "Manhattan, NY",
    date: "Jun 9, 2025",
    text: "A tiny restaurant with an extensive menu. Pumpkin rice balls, salty plum iced tea, bao buns, and soup dumplings were a little gem.",
  },
  {
    name: "Sam H.",
    location: "Dallas, TX",
    date: "May 31, 2025",
    text: "Pork and chicken dumplings were delicious. I will be back to try other menu items soon.",
  },
  {
    name: "Courtney W.",
    location: "San Mateo, CA",
    date: "Jan 1, 2026",
    text: "Great fast service and delicious food. Simple dishes that deliver on quality and flavor.",
  },
  {
    name: "David O.",
    location: "Rye, NY",
    date: "Feb 25, 2025",
    text: "Food was delicious and authentic. Great seasoning with herbs made each dish a delight. Service was top-notch.",
  },
  {
    name: "Judith V.",
    location: "New York, NY",
    date: "Jul 15, 2025",
    text: "Warm interactions, an impressively done setup, and exceptional menu items. Every selection has been fantastic.",
  },
  {
    name: "Sixto A.",
    location: "Brooklyn, NY",
    date: "Sep 20, 2024",
    text: "These soup dumplings are right up there with Din Tai Fung. Everything felt fresh, and the service was fantastic.",
  },
  {
    name: "Yelena C.",
    location: "Brooklyn, NY",
    date: "Nov 2, 2022",
    text: "A cozy new place with wonderful, fast service. The food was delicious and had a homemade taste.",
  },
];

function FeatureCard({ image, title, description, delay = "0ms" }: FeatureCardProps) {
  return (
    <div
      data-reveal
      className="
        reveal-up group relative flex h-full flex-col overflow-hidden
        rounded-[8px] border-[4px] bg-white
        shadow-[0_18px_40px_rgba(49,35,18,0.08)]
        transition-all duration-500 ease-out
        hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(49,35,18,0.14)]
      "
      style={{ borderColor: "#F9C0B7", "--reveal-delay": delay } as CSSProperties}
    >
      <div className="relative overflow-hidden rounded-t-[22px] p-3 sm:p-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,217,207,0.28),transparent_45%)]" />
        <Image
          src={image}
          alt={title}
          className="
            lift-image relative z-10 h-[170px] w-full rounded-[6px] object-cover
            sm:h-[190px]
            lg:h-[210px]
          "
        />
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-1 sm:px-6 sm:pb-6">
        <h3
          className="display-font text-[36px] leading-[0.98] sm:text-[40px]"
          style={{
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

        <a
          href="#menu"
          className="
            cta-sweep group/btn relative mt-5 inline-flex min-h-[44px] w-fit items-center gap-2 overflow-hidden
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
          <span className="relative z-10">see menu</span>
          <span className="relative z-10 text-[18px] leading-none">→</span>
        </a>
      </div>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="review-card flex w-[310px] shrink-0 flex-col rounded-[8px] border border-white/12 bg-white/[0.07] p-5 shadow-[0_20px_48px_rgba(0,0,0,0.18)] backdrop-blur-md sm:w-[360px]">
      <div className="flex items-center gap-1 text-[#EDC301]" aria-label="5 star review">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={18} fill="currentColor" strokeWidth={1.6} aria-hidden="true" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-[16px] leading-[1.45] text-[#FFF8E7]">
        “{review.text}”
      </p>
      <div className="mt-5 border-t border-white/10 pt-4">
        <p className="text-[16px] font-extrabold text-white">{review.name}</p>
        <p className="mt-1 text-[13px] text-[#F7E9CA]">
          {review.location} · {review.date}
        </p>
      </div>
    </article>
  );
}

function ReviewsMarquee() {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div className="review-marquee mt-8" aria-label="Five star customer reviews">
      <div className="review-marquee-track">
        {duplicatedReviews.map((review, index) => (
          <div key={`${review.name}-${review.date}-${index}`} aria-hidden={index >= reviews.length}>
            <ReviewCard review={review} />
          </div>
        ))}
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
        id="order"
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
            data-auto-reveal
            className="
              display-font text-center leading-none
              text-[56px]
              sm:text-[76px]
              md:text-[94px]
              lg:text-[108px]
            "
            style={{
              color: "#312312",
            }}
          >
            Order Online
          </h2>

          <p data-auto-reveal className="mt-3 max-w-[760px] text-center text-[16px] leading-[1.42] text-[#908B83] sm:text-[19px] md:text-[22px] lg:text-[24px]">
            Park Slope and Prospect Heights are open for pickup and delivery.
          </p>

          <div
            className="
              mt-10 grid w-full max-w-[1180px] grid-cols-1 gap-6
              sm:mt-12
              lg:mt-14 lg:grid-cols-4
            "
          >
            <div
              data-reveal
              className="reveal-scale flex flex-col items-center rounded-[8px] border-[4px] border-[#EDC301] bg-white/48 p-6 shadow-[0_18px_45px_rgba(49,35,18,0.08)] backdrop-blur-md"
            >
              <div className="group relative">
                <div className="absolute inset-0 scale-90 rounded-full bg-[#FFD202]/25 blur-3xl" />
                <Image
                  src={delivery}
                  alt="Delivery order option"
                  className="
                    lift-image relative z-10 h-auto w-[190px] object-contain
                    sm:w-[220px]
                    lg:w-[250px]
                  "
                />
              </div>

              <p className="mt-4 text-center text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#6F675F]">
                Park Slope
              </p>
              <h3 className="display-font mt-2 text-center text-[42px] leading-none text-[#312312]">
                Delivery
              </h3>
              <a
                href={ORDER_LINKS.parkSlopeDelivery}
                target="_blank"
                rel="noreferrer"
    className="
      cta-sweep group relative mt-5 inline-flex min-h-[56px] items-center justify-center overflow-hidden
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
    <span className="relative z-10 whitespace-nowrap">DELIVERY</span>
  </a>
            </div>

            <div
              data-reveal
              className="reveal-scale flex flex-col items-center rounded-[8px] border-[4px] border-[#EDC301] bg-white/48 p-6 shadow-[0_18px_45px_rgba(49,35,18,0.08)] backdrop-blur-md"
              style={{ "--reveal-delay": "120ms" } as CSSProperties}
            >
              <div className="group relative">
                <div className="absolute inset-0 scale-90 rounded-full bg-[#FFD202]/25 blur-3xl" />
                <Image
                  src={pickup}
                  alt="Pickup order option"
                  className="
                    lift-image relative z-10 h-auto w-[190px] object-contain
                    sm:w-[220px]
                    lg:w-[250px]
                  "
                />
              </div>

              <p className="mt-4 text-center text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#6F675F]">
                Park Slope
              </p>
              <h3 className="display-font mt-2 text-center text-[42px] leading-none text-[#312312]">
                Pickup
              </h3>
              <a
                href={ORDER_LINKS.parkSlopePickup}
                target="_blank"
                rel="noreferrer"
                className="
                  cta-sweep group relative mt-5 inline-flex min-h-[56px] items-center justify-center overflow-hidden
                  rounded-full border-[3px] px-10 py-3.5
                  text-[22px]
                  sm:mt-6 sm:px-12 sm:py-4 sm:text-[24px]
                  lg:px-14 lg:text-[26px]
                  transition duration-300 hover:scale-[1.05]
                  shadow-[0_18px_34px_rgba(237,195,1,0.20)]
                "
                style={{
                  borderColor: "#EDC301",
                  backgroundColor: "#EDC301",
                  color: "#FFFFFF",
                  fontFamily: '"Albert Sans", sans-serif',
                  fontWeight: 800,
                }}
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
                <span className="relative z-10 whitespace-nowrap">PICK UP</span>
              </a>
            </div>

            <div
              data-reveal
              className="reveal-scale flex flex-col items-center rounded-[8px] border-[4px] border-[#2F7D63] bg-white/48 p-6 shadow-[0_18px_45px_rgba(49,35,18,0.08)] backdrop-blur-md"
              style={{ "--reveal-delay": "240ms" } as CSSProperties}
            >
              <div className="group relative">
                <div className="absolute inset-0 scale-90 rounded-full bg-[#2F7D63]/20 blur-3xl" />
                <Image
                  src={delivery}
                  alt="Prospect Heights delivery order option"
                  className="
                    lift-image relative z-10 h-auto w-[190px] object-contain
                    sm:w-[220px]
                    lg:w-[250px]
                  "
                />
              </div>

              <p className="mt-4 text-center text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#6F675F]">
                Prospect Heights
              </p>
              <h3 className="display-font mt-2 text-center text-[42px] leading-none text-[#312312]">
                Delivery
              </h3>
              <a
                href={ORDER_LINKS.prospectHeightsDelivery}
                target="_blank"
                rel="noreferrer"
                className="
                  cta-sweep group relative mt-5 inline-flex min-h-[56px] items-center justify-center overflow-hidden
                  rounded-full border-[3px] px-10 py-3.5
                  text-[22px]
                  sm:mt-6 sm:px-12 sm:py-4 sm:text-[24px]
                  lg:px-10 lg:text-[22px]
                  transition duration-300 hover:scale-[1.05]
                  shadow-[0_18px_34px_rgba(47,125,99,0.18)]
                "
                style={{
                  borderColor: "#2F7D63",
                  backgroundColor: "#2F7D63",
                  color: "#FFFFFF",
                  fontFamily: '"Albert Sans", sans-serif',
                  fontWeight: 800,
                }}
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/18 to-transparent transition duration-700 group-hover:translate-x-full" />
                <span className="relative z-10 whitespace-nowrap">DELIVERY</span>
              </a>
            </div>

            <div
              data-reveal
              className="reveal-scale flex flex-col items-center rounded-[8px] border-[4px] border-[#2F7D63] bg-white/48 p-6 shadow-[0_18px_45px_rgba(49,35,18,0.08)] backdrop-blur-md"
              style={{ "--reveal-delay": "360ms" } as CSSProperties}
            >
              <div className="group relative">
                <div className="absolute inset-0 scale-90 rounded-full bg-[#2F7D63]/20 blur-3xl" />
                <Image
                  src={pickup}
                  alt="Prospect Heights pickup order option"
                  className="
                    lift-image relative z-10 h-auto w-[190px] object-contain
                    sm:w-[220px]
                    lg:w-[250px]
                  "
                />
              </div>

              <p className="mt-4 text-center text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#6F675F]">
                Prospect Heights
              </p>
              <h3 className="display-font mt-2 text-center text-[42px] leading-none text-[#312312]">
                Pickup
              </h3>
              <a
                href={ORDER_LINKS.prospectHeightsPickup}
                target="_blank"
                rel="noreferrer"
                className="
                  cta-sweep group relative mt-5 inline-flex min-h-[56px] items-center justify-center overflow-hidden
                  rounded-full border-[3px] px-10 py-3.5
                  text-[22px]
                  sm:mt-6 sm:px-12 sm:py-4 sm:text-[24px]
                  lg:px-10 lg:text-[22px]
                  transition duration-300 hover:scale-[1.05]
                  shadow-[0_18px_34px_rgba(47,125,99,0.18)]
                "
                style={{
                  borderColor: "#2F7D63",
                  backgroundColor: "#2F7D63",
                  color: "#FFFFFF",
                  fontFamily: '"Albert Sans", sans-serif',
                  fontWeight: 800,
                }}
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/18 to-transparent transition duration-700 group-hover:translate-x-full" />
                <span className="relative z-10 whitespace-nowrap">PICK UP</span>
              </a>
            </div>
          </div>

          <div data-auto-reveal className="mt-8 grid w-full max-w-[780px] gap-3 sm:grid-cols-2">
            {LOCATIONS.map((location) => (
              <a
                key={location.id}
                href={location.menuUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-[8px] border border-[#EDC301]/35 bg-white/32 px-4 py-3 text-center text-[14px] font-extrabold text-[#312312] transition hover:border-[#EDC301] hover:bg-white/54"
              >
                View {location.name} menu
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* SOCIAL PROOF */}
      <div className="relative overflow-hidden bg-[#312312] px-6 py-14 text-white sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1500px]">
          <div data-reveal className="reveal-up flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[14px] font-extrabold text-[#FFEB8D]">
                neighborhood trusted
              </p>
              <h2 className="display-font mt-2 max-w-[900px] text-[48px] leading-[0.98] text-white sm:text-[64px] lg:text-[78px]">
                Five-star notes from people who found their dumpling spot.
              </h2>
            </div>

            <a
              href="https://www.yelp.com/biz/petite-dumpling-brooklyn?osq=Petite+Dumpling#reviews"
              target="_blank"
              rel="noreferrer"
              className="cta-sweep inline-flex min-h-[48px] w-fit items-center justify-center rounded-full bg-[#EDC301] px-6 text-[15px] font-extrabold text-white shadow-[0_14px_30px_rgba(237,195,1,0.22)]"
            >
              See all reviews
            </a>
          </div>

          <div data-reveal className="reveal-up" style={{ "--reveal-delay": "120ms" } as CSSProperties}>
            <ReviewsMarquee />
          </div>
        </div>
      </div>

      {/* MORE HANDMADE FAVORITES */}
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
            data-auto-reveal
            className="
              display-font text-center leading-none
              text-[54px]
              sm:text-[72px]
              md:text-[90px]
              lg:text-[104px]
            "
            style={{
              color: "#312312",
            }}
          >
            More Handmade Favorites
          </h2>

          <p data-auto-reveal className="mx-auto mt-4 max-w-[760px] text-center text-[16px] leading-[1.4] text-[#6F675F] sm:text-[18px]">
            A few deeper-cut dishes from the full menu, framed with the same care
            as the featured cards above.
          </p>

          <div
            className="
              mt-10 grid grid-cols-1 gap-8
              md:grid-cols-2
              xl:grid-cols-3
              lg:mt-12
            "
          >
            <FeatureCard
              image={image2}
              title="Braised Short Ribs"
              description="Slow cooked with cardamom, miso, wines and herbs"
              delay="0ms"
            />
            <FeatureCard
              image={image1}
              title="Har Gow – Shrimp Dumpling"
              description="Steamed smash shrimp wrapped in translucence skin. Sorry, there is a bit of pork lard in it!"
              delay="110ms"
            />
            <FeatureCard
              image={image3}
              title="Sichuan Bàn-Mein"
              description="Tossed Dao Xiao noodle(fettuccini) with mala spicy sauce, cucumber, shredded chicken and shiitaki mushrooms"
              delay="220ms"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
