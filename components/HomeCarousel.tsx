"use client";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface CarouselSlide {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

export default function HomeCarousel() {
  const slides: CarouselSlide[] = React.useMemo(
    () =>
      Array.from({ length: 10 }).map((_, index) => ({
        id: index + 1,
        src: `/banners/banner${index + 1}.jpg`,
        alt: `Slide ${index + 1}`,
        caption: `Slide ${index + 1} Caption`,
      })),
    []
  );

  const links = [
    "/e-ticaret-pazaryeri-danismanligi",
    "/instagram",
    "/google-ads-google-reklam-yonetimi",
    "/grafik-tasarimi",
    "/icerik-uretimi",
    "/meta-reklam-yonetimi-facebook-ve-instagram",
    "/seo-arama-motoru-optimizasyonu",
    "/sosyal-medya-yonetimi",
    "/urun-cekimleri",
    "/web-tasarimi",
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: false })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

  // Handle image loading state
  const handleImageLoad = React.useCallback(() => {
    setIsLoading(false);
  }, []);

  // Get previous and next slide indices with proper wrapping
  const getPrevIndex = React.useCallback(() => {
    if (current === 0) return slides.length - 1;
    return current - 1;
  }, [current, slides.length]);

  const getNextIndex = React.useCallback(() => {
    if (current === slides.length - 1) return 0;
    return current + 1;
  }, [current, slides.length]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Reset loading state when slide changes
    setIsLoading(true);

    return () => {
      api.off("select", () => {});
    };
  }, [api]);

  return (
    <div className="px-4 h-[200px] lg:h-[600px]">
      {/* Left side image (previous slide) */}
      <div className="flex flex-row w-full">
        <div className="hidden md:block">
          {slides[getPrevIndex()] && (
            <Image
              src={slides[getPrevIndex()].src}
              alt={slides[getPrevIndex()].alt}
              width={2000}
              height={900}
              quality={80}
              className="object-cover  h-[200px] lg:h-[600px] blur-xs brightness-[65%]"
              onLoad={handleImageLoad}
            />
          )}
        </div>

        {/* Main carousel */}

        <Carousel
          plugins={[plugin.current]}
          opts={{ loop: true }}
          className="max-w-full xl:max-w-7xl"
          setApi={setApi}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={slide.id} className="relative">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <Link
                  href={links[index]}
                  title={links[index].replaceAll("-", " ").replaceAll("/", "")}
                  passHref
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={2000}
                    height={900}
                    quality={100}
                    className="object-cover w-full xl:max-w-7xl h-[200px] lg:h-[600px]"
                    onLoad={handleImageLoad}
                    priority={slide.id === 1}
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 opacity-20 hover:opacity-100 transition-opacity duration-300" />
          <CarouselNext className="right-2 opacity-20 hover:opacity-100 transition-opacity duration-300" />
        </Carousel>

        {/* Right side image (next slide) */}
        <div className="hidden md:block">
          {slides[getNextIndex()] && (
            <Image
              src={slides[getNextIndex()].src}
              alt={slides[getNextIndex()].alt}
              width={2000}
              height={900}
              quality={80}
              className="object-cover h-[200px] lg:h-[600px] blur-xs brightness-[65%]"
              onLoad={handleImageLoad}
            />
          )}
        </div>
      </div>
    </div>
  );
}
