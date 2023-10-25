import { NavLink } from "react-router-dom";

const Footer = () => {
    return (

        <div className="bg-[#9EC4C9] px-40 relative">
            <div className="flex justify-between py-16">
                <div className="flex flex-col">
                    <NavLink to="/">
                        <img className="w-16" src="images/THE_CHOSEN_FIELD_LOGO.png" alt="logo" />
                        <span className="text-lg text-white font-semibold">THE CHOSEN FIELD</span>
                    </NavLink>
                    <p className="text-base text-font_one font-medium mt-2">Welcome to The Chosen Field. <br /> Build Your Future, Choose your Course</p>
                    <span className="text-primary space-x-5 mt-5">
                        <NavLink to="https://www.youtube.com/@TheChosenField" target="_blank"><i className="fa-brands fa-youtube p-3 rounded-full bg-transparent_blur transition ease-in delay-150 hover:text-white hover:bg-primary"></i></NavLink>
                        <NavLink to="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-square-instagram p-3 rounded-full bg-transparent_blur transition ease-in delay-150 hover:text-white hover:bg-primary"></i></NavLink>
                        <NavLink to="https://www.twitter.com/" target="_blank"><i className="fa-brands fa-twitter p-3 rounded-full bg-transparent_blur transition ease-in delay-150 hover:text-white hover:bg-primary"></i></NavLink>
                    </span>
                    <div className="absolute bottom-3 right-40 flex items-center flex-col">
                        <p data-aos="fade" className="text-font_one font-semibold">Get the THECHOSENFIELD App</p>
                        <NavLink data-aos="flip-left" to="https://play.google.com/store/apps/details?id=co.diaz.wjgqz" target="_blank"><img className="w-40" src="images/google-play-badge.png" alt="google-play-badge" /></NavLink>
                    </div>
                </div>
                <div className="flex text-base space-x-16">
                    <ul>
                        <li className="text-font_one font-semibold mb-3">Explore</li>
                        <NavLink to="/"><li className="text-font_two font-normal mb-2 hover:text-primary">Home</li></NavLink>
                        <NavLink to="/about"><li className="text-font_two font-normal mb-2 hover:text-primary">About Us</li></NavLink>
                        <NavLink to="/courses"><li className="text-font_two font-normal mb-2 hover:text-primary">Courses</li></NavLink>
                        <NavLink to="/webinar"><li className="text-font_two font-normal mb-2 hover:text-primary">Webinars</li></NavLink>
                    </ul>
                    <ul>
                        <li className="text-font_one font-semibold mb-3">Quick Links</li>
                        <NavLink to="/contact"><li className="text-font_two font-normal mb-2 hover:text-primary">Contact Us</li></NavLink>
                        <NavLink to="/terms-conditions"><li className="text-font_two font-normal mb-2 hover:text-primary">Terms & Conditions</li></NavLink>
                        <NavLink to="privacy-policy"><li className="text-font_two font-normal mb-2 hover:text-primary">Privacy Policy</li></NavLink>
                    </ul>
                    <ul>
                        <li className="text-font_one font-semibold mb-3">Have a Questions?</li>
                        <li className="flex items-center space-x-4 mb-3">
                            <i className="fa-solid fa-map-location-dot text-font_one"></i>
                            <p className="w-64 text-font_two font-medium">142 Fake St. Mountain View, Delhi, Delhi, India</p>
                        </li>

                        <li className="flex items-center space-x-4 mb-3">
                            <i className="fa-solid fa-phone text-font_one"></i>
                            <p className="text-font_two font-medium">+91 7051144137</p>
                        </li>

                        <li className="flex items-center space-x-4">
                            <i className="fa-solid fa-at text-font_one"></i>
                            <p className="text-font_two font-medium">info@thechosenfield.com</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-center py-5">
                <p className="text-font_two">© 2023 <NavLink to="/" className="ml-1 font-semibold hover:text-primary">The Chosen Field</NavLink>. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
