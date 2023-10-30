import { NavLink } from "react-router-dom";
import ScrollToTopNavLink from "../../ScrollToTopNavLink/ScrollToTopNavLink";

const Footer = () => {
    return (

        <div className="bg-[#9EC4C9] relative">
            <div className="flex mediumTablet:flex-row smallPhone:flex-col justify-between desktop:mx-36 largeTablet:mx-16 smallTablet:mx-5 smallPhone:mx-4 mediumTablet:py-16 smallPhone:py-10">
                <div className="flex flex-col mr-5">
                    <ScrollToTopNavLink className="w-fit" to="/">
                        <img className="smallTablet:w-16 smallPhone:w-14" src="images/THE_CHOSEN_FIELD_LOGO.png" alt="logo" />
                        <span className="smallTablet:text-lg smallPhone:text-base text-white font-semibold">TheChosenField</span>
                    </ScrollToTopNavLink>
                    <p className="smallTablet:text-base smallPhone:text-sm text-font_one font-medium mt-2">Welcome to TheChosenField. <br /> Build Your Future, Choose your Course</p>
                    <span className="text-primary smallTablet:text-base smallPhone:text-sm largeTablet:space-x-5 smallPhone:space-x-3 smallTablet:my-5 smallPhone:my-3 smallTablet:mb-5 smallPhone:mb-8">
                        <NavLink to="https://www.youtube.com/@TheChosenField" target="_blank"><i className="fa-brands fa-youtube smallTablet:p-3 smallPhone:p-2 rounded-full bg-transparent_blur transition ease-in delay-150 hover:text-white hover:bg-primary"></i></NavLink>
                        <NavLink to="http://www.instagram.com/_silentplay" target="_blank"><i className="fa-brands fa-square-instagram smallTablet:p-3 smallPhone:p-2 rounded-full bg-transparent_blur transition ease-in delay-150 hover:text-white hover:bg-primary"></i></NavLink>
                        <NavLink to="https://twitter.com/qureshisajjad21" target="_blank"><i className="fa-brands fa-twitter smallTablet:p-3 smallPhone:p-2 rounded-full bg-transparent_blur transition ease-in delay-150 hover:text-white hover:bg-primary"></i></NavLink>
                        <NavLink to="http://www.quora.com/profile/Sajjad-Qureshi-13?ch=2&oid=246599219&srid=hJROR&target_type=user" target="_blank"><i className="fa-brands fa-quora smallTablet:p-3 smallPhone:p-2 rounded-full bg-transparent_blur transition ease-in delay-150 hover:text-white hover:bg-primary"></i></NavLink>
                    </span>
                    <div className="absolute largeTablet:bottom-3 mediumTablet:bottom-20 mediumTablet:top-auto smallPhone:top-10 desktop:right-40 largeTablet:right-24 mediumTablet:right-16 smallTablet:right-10 largePhone:right-5 smallPhone:right-3 flex items-center flex-col">
                        <p data-aos="fade" className="text-font_one font-semibold smallTablet:text-base smallPhone:text-sm">Get the TheChosenField App</p>
                        <NavLink data-aos="flip-left" to="https://play.google.com/store/apps/details?id=co.diaz.wjgqz" target="_blank"><img className="smallTablet:w-40 largePhone:w-32 smallPhone:w-28" src="images/google-play-badge.png" alt="google-play-badge" /></NavLink>
                    </div>
                </div>
                <div className="flex w-full largePhone:flex-nowrap smallPhone:flex-wrap smallTablet:text-base smallPhone:text-sm largePhone:justify-between">
                    <ul className="largeTablet:mr-0 mediumTablet:mr-3 largePhone:mr-4 smallPhone:mr-10">
                        <li className="text-font_one font-semibold mb-3">Explore</li>
                        <ScrollToTopNavLink to="/"><li className="text-font_two font-normal mb-2 hover:text-primary">Home</li></ScrollToTopNavLink>
                        <ScrollToTopNavLink to="/about"><li className="text-font_two font-normal mb-2 hover:text-primary">About Us</li></ScrollToTopNavLink>
                        <ScrollToTopNavLink to="/courses"><li className="text-font_two font-normal mb-2 hover:text-primary">Courses</li></ScrollToTopNavLink>
                        <ScrollToTopNavLink to="/webinar"><li className="text-font_two font-normal mb-2 hover:text-primary">Webinars</li></ScrollToTopNavLink>
                    </ul>
                    <ul>
                        <li className="text-font_one font-semibold mb-3">Quick Links</li>
                        <ScrollToTopNavLink to="/contact"><li className="text-font_two font-normal mb-2 hover:text-primary">Contact Us</li></ScrollToTopNavLink>
                        <ScrollToTopNavLink to="/terms-conditions"><li className="text-font_two font-normal mb-2 hover:text-primary">Terms & Conditions</li></ScrollToTopNavLink>
                        <ScrollToTopNavLink to="privacy-policy"><li className="text-font_two font-normal mb-2 hover:text-primary">Privacy Policy</li></ScrollToTopNavLink>
                    </ul>
                    <ul className="largePhone:mt-0 smallPhone:mt-5">
                        <li className="text-font_one font-semibold mb-3">Have a Questions?</li>
                        <li className="flex items-center space-x-4 mb-3">
                            <i className="fa-solid fa-map-location-dot text-font_one"></i>
                            <p className="w-56 text-font_two font-medium"> Mahamaya Mandir lane, Raika, Narwal, Jammu 180006</p>
                        </li>

                        <li className="flex items-center space-x-4 mb-3">
                            <i className="fa-solid fa-phone text-font_one"></i>
                            <p className="text-font_two font-medium">+91-7051144137</p>
                        </li>

                        <li className="flex items-center space-x-4">
                            <i className="fa-solid fa-at text-font_one"></i>
                            <p className="text-font_two font-medium">sajjadqureshi326@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-center py-5">
                <p className="text-font_two largePhone:text-base smallPhone:text-sm">© 2023 <ScrollToTopNavLink to="/" className="ml-1 font-semibold hover:text-primary">TheChosenField</ScrollToTopNavLink>. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
