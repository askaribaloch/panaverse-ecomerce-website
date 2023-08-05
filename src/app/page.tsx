import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import EmailSubscription from "@/views/EmailSubscription";
import EventsBanner from "@/views/EventsBanner";
import { Hero } from "@/views/Hero";
import ProductList from "@/views/ProductList";
import FeaturesBanner from "@/views/ProductOverview";

export default async function Home() {
  return (
    <div className="EcommerceHomepage absolute bg-white">
      <Hero />
      <EventsBanner />
      <ProductList />
      <FeaturesBanner />
      <EmailSubscription />
      <Footer />
    </div>
  );
}
