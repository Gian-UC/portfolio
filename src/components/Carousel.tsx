import React, { useRef, useState, type PropsWithChildren } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, A11y, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Carousel({ children }: PropsWithChildren) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [instance, setInstance] = useState<import('swiper').Swiper | null>(null);
  const slides = React.Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative select-none">
      <Swiper
        modules={[Navigation, Pagination, Keyboard, A11y, Mousewheel]}
        spaceBetween={24}
        slidesPerView={1}
        loop={false}
        keyboard={{ enabled: true }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
        }}
        navigation
        grabCursor={true}
        mousewheel={{ 
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: true,
        }}
        touchRatio={1.5}
        threshold={10}
        speed={600}
        effect="slide"
        onSwiper={(swiper) => setInstance(swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="cursor-grab active:cursor-grabbing [&_.swiper-pagination-bullet]:bg-neutral-700 [&_.swiper-pagination-bullet-active]:bg-neon-cyan [&_.swiper-pagination-bullet-active]:shadow-neon-cyan"
      >
        {slides.map((child, idx) => (
          <SwiperSlide key={idx}>{child as React.ReactNode}</SwiperSlide>
        ))}
      </Swiper>

      <div className="container">
        <div className="mt-4 md:mt-6 flex flex-col items-center gap-3 md:gap-4">
          <div className="flex items-center gap-2 md:gap-3">
            <button
              ref={prevRef}
              aria-label={`Ir para o slide ${activeIndex}`}
              onClick={() => instance?.slidePrev()}
              className="btn-neon text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2"
            >
              <span className="hidden sm:inline">← Anterior</span>
              <span className="sm:hidden">←</span>
            </button>
            <button
              ref={nextRef}
              aria-label={`Ir para o slide ${Math.min(activeIndex + 2, slides.length)}`}
              onClick={() => instance?.slideNext()}
              className="btn-neon btn-neon-pink text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2"
            >
              <span className="hidden sm:inline">Próximo →</span>
              <span className="sm:hidden">→</span>
            </button>
          </div>
          <div className="text-xs md:text-sm text-neutral-400" aria-live="polite">
            Slide {activeIndex + 1} / {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
}
