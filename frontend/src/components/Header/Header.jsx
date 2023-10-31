import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import Slider from "../shared/Slider/Slider";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../shared/Breadcrumb/Breadcrumb";
import ScrollToTopNavLink from "../ScrollToTopNavLink/ScrollToTopNavLink";

const Header = ({ children }) => {
    const Location = useLocation();
    const path = Location.pathname;

    const headerBackground = {
        width: '100%',
        height: '100vh',
        backgroundImage: `url(images/${path !== '/' ? 'header-other.png' : window.screen.width >= 850 ? 'header-large-bg.png' : 'header-small-bg.png'})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
    }

    const [showVideo, setShowVideo] = useState(false);

    const handleShowVideo = () => {
        setShowVideo(current => !current);
    }
    return (
        <div style={headerBackground} className="desktop:px-36 largeTablet:px-20 mediumTablet:px-12 smallTablet:px-8 largePhone:px-6 smallPhone:px-4 relative">
            {children}
            {
                path === '/' ?
                    <div className="header-containt absolute desktop:left-36 largeTablet:left-20 mediumTablet:left-12 smallTablet:left-8 largePhone:left-6 smallPhone:left-4 translate-y-1/2">
                        <span className="text-sm font-medium text-primary">WELCOME TO <strong>TheChosenField</strong></span>
                        <h1 className="desktop:text-6xl largeTablet:text-5xl smallTablet:text-4xl smallPhone:text-3xl font-semibold text-white largeTablet:my-5 mediumTablet:my-4 smallTablet:my-3 smallPhone:my-2">Build Your <br /> Future, Choose <br /> your Course</h1>
                        <p className="text-base text-white mb-6">Buy your course now & start your preparation</p>
                        <span>
                            <ScrollToTopNavLink to="/courses" className="text-white bg-primary desktop:text-lg smallTablet:text-base smallPhone:text-sm font-medium border-2 border-primary desktop:py-4 largeTablet:py-3 smallPhone:py-2 desktop:px-10 largeTablet:px-8 smallTablet:px-6 largePhone:px-5 smallPhone:px-4 rounded mediumTablet:mr-5 smallTablet:mr-4 largePhone:mr-3 smallPhone:mr-2 transition ease-in-out delay-150 hover:bg-[#19a095]">View Courses</ScrollToTopNavLink>
                            <button onClick={handleShowVideo} className="text-primary bg-white desktop:text-lg smallTablet:text-base smallPhone:text-sm font-medium desktop:py-4 largeTablet:py-3 smallPhone:py-2 desktop:px-10 largeTablet:px-8 smallTablet:px-6 largePhone:px-5 smallPhone:px-4 rounded border-2 border-white hover:border-[#19a095] "><i className="fa-regular fa-circle-play mr-3"></i>Watch Video</button>
                        </span>
                    </div>
                    : path === '/courses' ?
                        <div className="flex items-center justify-center flex-col mt-80">
                            <Breadcrumb currPage="Courses" />
                            <h1 className="desktop:text-6xl mediumTablet:text-5xl smallPhone:text-5xl text-white mt-5 font-semibold">Courses</h1>
                        </div> : path === '/about' ?
                            <div className="flex items-center justify-center flex-col mt-80">
                                <Breadcrumb currPage="About" />
                                <h1 className="desktop:text-6xl mediumTablet:text-5xl smallPhone:text-5xl text-white mt-5 font-semibold">About Us</h1>
                            </div> : path === '/contact' ?
                                <div className="flex items-center justify-center flex-col mt-80">
                                    <Breadcrumb currPage="Contact" />
                                    <h1 className="desktop:text-6xl mediumTablet:text-5xl smallPhone:text-5xl text-white mt-5 font-semibold">Contact Us</h1>
                                </div> : path === '/terms-conditions' ?
                                    <div className="flex items-center justify-center flex-col mt-80">
                                        <Breadcrumb currPage="Terms and Conditions" />
                                        <h1 className="desktop:text-6xl mediumTablet:text-5xl smallPhone:text-5xl text-white mt-5 font-semibold">Terms and Conditions</h1>
                                    </div> : path === '/privacy-policy' ?
                                        <div className="flex items-center justify-center flex-col mt-80">
                                            <Breadcrumb currPage="Privacy Policy" />
                                            <h1 className="desktop:text-6xl mediumTablet:text-5xl largePhone:text-5xl smallPhone:text-4xl text-font_one mt-5 font-semibold">Privacy Policy</h1>
                                        </div> : <></>
            }

            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }} className={`${showVideo ? 'block' : 'hidden'} absolute top-0 left-0 right-0 bottom-0 z-20`}>
                <i onClick={handleShowVideo} className="z-20 fa-solid fa-xmark absolute text-3xl opacity-70 text-white top-5 right-5 cursor-pointer hover:opacity-100"></i>
                <Slider slidesPerView={1} sliderClass="border-2 border-white align-middle largePhone:w-4/5 smallPhone:w-[95%] wideScreen:h-[620px] desktop:h-[580px] largeTablet:h-[520px] mediumTablet:h-[480px] smallTablet:h-[400px] largePhone:h-[350px] smallPhone:h-[260px]" arrowLeftPosition="30px" arrowRightPosition="30px">
                    <SwiperSlide>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/JQRpBkpd9NQ?si=XHbeU8yPQcnQBpoh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/XYtmBeJUq00?si=HQ92Ta24AEJzftPD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/i_3FdQI-bYI?si=pM2lL9BnBOWDY-hs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/z8CO-1NpyJE?si=aBPRYfAE3t8g9df7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/W-J2X0QywJk?si=a9sr_4vjKZ60QHgJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/bkRVQhLGGvI?si=VFqJai8wLp6Au5Ik" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/B53LBNRUIGA?si=o-lnaTGnkAngMHvJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/WaCQ-pmS5CI?si=8Cbge9K08LhItVrC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-iuyS3R_GCk?si=6vXh5mPClufipFEk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/H4ZfxXKT3io?si=sg_Vo7UPe02Yhx6K" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </SwiperSlide>
                </Slider>

            </div>
        </div>
    );
}

export default Header;