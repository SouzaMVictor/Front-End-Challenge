import Banner1 from "./assets/mob0.png";
import Banner2 from "./assets/mob1.png";
import Banner3 from "./assets/mob2.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
const images = [Banner1, Banner2, Banner3];
export function Hero() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      navigation={false}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-auto w-full"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <img
            src={image}
            alt={`Banner ${index + 1}`}
            className="h-auto w-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
