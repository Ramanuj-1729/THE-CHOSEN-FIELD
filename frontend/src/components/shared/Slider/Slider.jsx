import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

const Slider = ({ slidesPerView, sliderClass, autoPlay, children, spaceBetween, arrowLeftPosition, arrowRightPosition }) => {
    return (
        <div className='relative'>
            <div>
                <Swiper
                    slidesPerView={slidesPerView}
                    spaceBetween={spaceBetween}
                    loop={true}
                    navigation={{ nextEl: "#arrow-left", prevEl: "#arrow-right" }}
                    modules={[Navigation, Autoplay]}
                    className={`mySwiper ${sliderClass}`}
                    autoplay={autoPlay ? {
                        delay: 5000,
                        disableOnInteraction: false,
                    } : false}
                >
                    {children}
                </Swiper >
            </div>
            <i id="arrow-left" className="fa-solid fa-chevron-left absolute text-white text-2xl opacity-70 hover:opacity-100 top-1/2 -translate-y-1/2 cursor-pointer" style={{ left: arrowLeftPosition }} ></i>
            <i id="arrow-right" className="fa-solid fa-chevron-right absolute text-white text-2xl opacity-70 hover:opacity-100 top-1/2 -translate-y-1/2 cursor-pointer" style={{ right: arrowRightPosition }} ></i>
        </div>
    );
}

export default Slider;