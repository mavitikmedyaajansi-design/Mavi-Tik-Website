import ContactSection from "@/components/ContactSection";
import HomeCarousel from "@/components/HomeCarousel";
import HomeFourItems from "@/components/HomeFourItems";

export default async function Home() {
  return (
    <div className="flex flex-col">
      <HomeCarousel />
      <HomeFourItems />
      <div className="max-w-7xl w-full mx-auto p-2 md:p-8 ">
        <ContactSection />
      </div>
    </div>
  );
}
