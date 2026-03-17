import Navbar from "@/lib/components/navbar";
import Header from "@/lib/components/Header";
import FirstSection from "@/lib/components/FirstSection";
import MenuPosterSection from "@/lib/components/MenuPosterSection";
import MenuSection from "@/lib/components/MenuSection";
import OrderFeaturesSection from "@/lib/components/OrderFeaturesSection";
import Foot from "@/lib/components/Foot";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <FirstSection />
        <MenuSection />
        <MenuPosterSection />
        <OrderFeaturesSection />
        <Foot />
      </main>
    </>
  );
}