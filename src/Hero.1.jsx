import Banner1 from "./assets/mob0.png";
import Banner2 from "./assets/mob1.png";
import Banner3 from "./assets/mob2.png";
import BannerDesk1 from "./assets/Banner (1).jpg";
import BannerDesk2 from "./assets/desk1.png";
import BannerDesk3 from "./assets/desk2.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useMediaQuery } from "react-responsive";

export function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const images = isMobile
    ? [Banner1, Banner2, Banner3]
    : [BannerDesk1, BannerDesk2, BannerDesk3];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      navigation={false}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-auto w-full"
    >
      {images.map((images, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <img
            src={images}
            alt={`Banner ${index + 1}`}
            className="h-auto w-full object-cover lg:h-[430px]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
