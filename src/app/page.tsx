import EmailSubscription from "@/views/EmailSubscription";
import EventsBanner from "@/views/EventsBanner";
import { Hero } from "@/views/Hero";
import ProductList from "@/views/ProductList";
import FeaturesBanner from "@/views/ProductOverview";

export default async function Home() {
  return (
    <div>
      <Hero />
      <EventsBanner />
      <ProductList />
      <FeaturesBanner />
      <EmailSubscription />
    </div>
  );
}
