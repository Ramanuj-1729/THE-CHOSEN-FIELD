import { NavLink } from "react-router-dom";
import ScrollToTopNavLink from "../../ScrollToTopNavLink/ScrollToTopNavLink";

const Footer = () => {
    return (

        <div className="bg-[#9EC4C9] px-40 relative">
            <div className="flex justify-between py-16">
                <div className="flex flex-col">
                    <ScrollToTopNavLink to="/">
                        <img className="w-16" src="images/THE_CHOSEN_FIELD_LOGO.png" alt="logo" />
                        <span className="text-lg text-white font-semibold">TheChosenField</span>
                    </ScrollToTopNavLink>
                    <p className="text-base text-font_one font-medium mt-2">Welcome to TheChosenField. <br /> Build Your Future, Choose your Course</p>
                    <span className="text-primary space-x-5 mt-5">
                        <ScrollToTopNavLink to="https://www.youtube.com/@TheChosenField" target="_blank"><i className="fa-brands fa-youtube p-3 rounded-full bg-transparent_blur transition ease-in delay-150 hover:text-white hover:bg-primary"></i></ScrollToTopNavLink>
                        <ScrollToTopNavLink to="http://www.instagram.com/_silentplay" target="_blank"><i className="fa-brands fa-square-instagram p-3 rounded-full bg-transparent_blur transition ease-in delay-150 hover:text-white hover:bg-primary"></i></ScrollToTopNavLink>
                        <ScrollToTopNavLink to="https://twitter.com/qureshisajjad21" target="_blank"><i className="fa-brands fa-twitter p-3 rounded-full bg-transparent_blur transition ease-in delay-150 hover:text-white hover:bg-primary"></i></ScrollToTopNavLink>
                        <ScrollToTopNavLink to="http://www.quora.com/profile/Sajjad-Qureshi-13?ch=2&oid=246599219&srid=hJROR&target_type=user" target="_blank"><i className="fa-brands fa-quora p-3 rounded-full bg-transparent_blur transition ease-in delay-150 hover:text-white hover:bg-primary"></i></ScrollToTopNavLink>
                    </span>
                    <div className="absolute bottom-3 right-40 flex items-center flex-col">
                        <p data-aos="fade" className="text-font_one font-semibold">Get the TheChosenField App</p>
                        <NavLink data-aos="flip-left" to="https://play.google.com/store/apps/details?id=co.diaz.wjgqz" target="_blank"><img className="w-40" src="images/google-play-badge.png" alt="google-play-badge" /></NavLink>
                    </div>
                </div>
                <div className="flex text-base space-x-16">
                    <ul>
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
                    <ul>
                        <li className="text-font_one font-semibold mb-3">Have a Questions?</li>
                        <li className="flex items-center space-x-4 mb-3">
                            <i className="fa-solid fa-map-location-dot text-font_one"></i>
                            <p className="w-64 text-font_two font-medium"> Mahamaya Mandir lane, Raika, Narwal, Jammu 180006</p>
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
                <p className="text-font_two">© 2023 <ScrollToTopNavLink to="/" className="ml-1 font-semibold hover:text-primary">TheChosenField</ScrollToTopNavLink>. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
