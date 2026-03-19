import Header from "@/lib/components/Header";
import FirstSection from "@/lib/components/FirstSection";
import MenuPosterSection from "@/lib/components/MenuPosterSection";
import MenuSection from "@/lib/components/MenuSection";
import OrderFeaturesSection from "@/lib/components/OrderFeaturesSection";

export default function Home() {
  return (
    <main>
      <Header />
      <FirstSection />
      <MenuSection />
      <MenuPosterSection />
      <OrderFeaturesSection />
    </main>
  );
}