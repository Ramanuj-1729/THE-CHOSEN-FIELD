import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import Slider from "../shared/Slider/Slider";
import { useLocation } from "react-router-dom";

const Header = ({ bgImage, children }) => {
    const headerBackground = {
        width: '100%',
        height: '100vh',
        backgroundColor: "#9EC4C9",
        backgroundPosition: '85%',
        backgroundPositionY: '100px',
        backgroundImage: `url(images/${bgImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
    }

    const [showVideo, setShowVideo] = useState(false);

    const handleShowVideo = () => {
        setShowVideo(current => !current);
    }

    const Location = useLocation();
    const path = Location.pathname;
    return (
        <div style={headerBackground} className="px-40">
            {children}
            {
                path === '/' ?
                    <div data-aos="fade-up" className="header-containt absolute mt-52">
                        <span className="text-sm font-medium text-primary">WELCOME TO <b>THE CHOSEN FIELD</b></span>
                        <div className="text-6xl font-semibold text-white my-5">Build Your <br /> Future, Choose <br /> your Course</div>
                        <p className="text-base text-white opacity-[0.8] mb-6">Buy your course now & start your preparation</p>
                        <span>
                            <button className="text-white bg-primary text-lg font-medium py-4 px-10 rounded mr-5 transition ease-in-out delay-150 hover:bg-[#19a095]">View Courses</button>
                            <button onClick={handleShowVideo} className="text-white text-lg font-medium py-4 px-10 rounded border-2 border-primary hover:border-[#19a095] "><i className="fa-regular fa-circle-play mr-3"></i>Watch Video</button>
                        </span>
                    </div>
                : null
            }

            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }} className={`${showVideo ? 'block' : 'hidden'} absolute top-0 left-0 right-0 bottom-0 z-20`}>
                <i onClick={handleShowVideo} className="fa-solid fa-xmark absolute text-3xl opacity-70 text-white top-5 right-5 cursor-pointer hover:opacity-100"></i>
                <Slider slidesPerView={1} sliderClass="border-2 border-white w-7/12 h-[550px] mt-28" arrowLeftPosition="30px" arrowRightPosition="30px">
                    <SwiperSlide>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/JQRpBkpd9NQ?si=XHbeU8yPQcnQBpoh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/i_3FdQI-bYI?si=pM2lL9BnBOWDY-hs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/W-J2X0QywJk?si=a9sr_4vjKZ60QHgJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/B53LBNRUIGA?si=o-lnaTGnkAngMHvJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-iuyS3R_GCk?si=6vXh5mPClufipFEk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </SwiperSlide>
                </Slider>

            </div>
        </div>
    );
}

export default Header;