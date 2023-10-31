import { useLocation } from "react-router-dom";
import ScrollToTopNavLink from "../../ScrollToTopNavLink/ScrollToTopNavLink";
import { useState } from "react";

const navBgStyle = {
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(2px)',
    border: '1px solid rgba(255, 255, 255, 0.29)'
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-6 my-[2px] rounded-full bg-white transition ease transform duration-300`;
    const location = useLocation();
    let path = location.pathname;
    const active = "text-primary font-semibold";
    return (
        <div style={navBgStyle} className={`flex ${isOpen ? 'w-auto rounded' : 'w-fit rounded'} smallTablet:w-auto desktop:mx-36 largeTablet:mx-20 mediumTablet:mx-12 smallTablet:mx-8 ${isOpen ? 'bg-font_one' : 'bg-nav_bg_transparent'} largePhone:mx-8 smallPhone:mx-6 py-5 px-5 items-center absolute top-[6.3rem] left-0 right-0 z-10`}>
            <ul className={`${isOpen ? 'smallPhone:flex' : 'smallPhone:hidden'} smallTablet:flex smallTablet:flex-row smallPhone:flex-col text-white smallTablet:space-x-10 smallTablet:space-y-0 smallPhone:space-y-5 smallTablet:text-base largePhone:text-base`}>
                <ScrollToTopNavLink to="/" onClick={() => setIsOpen(!isOpen)} className={`transition ease-in-out delay-150 hover:text-primary ${path === "/" ? active : ""}`}><li>Home</li></ScrollToTopNavLink>
                <ScrollToTopNavLink to="/courses" onClick={() => setIsOpen(!isOpen)} className={`transition ease-in-out delay-150 hover:text-primary ${path === "/courses" ? active : ""}`}><li>Courses</li></ScrollToTopNavLink>
                <ScrollToTopNavLink to="/about" onClick={() => setIsOpen(!isOpen)} className={`transition ease-in-out delay-150 hover:text-primary ${path === "/about" ? active : ""}`}><li>About Us</li></ScrollToTopNavLink>
                <ScrollToTopNavLink to="/contact" onClick={() => setIsOpen(!isOpen)} className={`transition ease-in-out delay-150 hover:text-primary ${path === "/contact" ? active : ""}`}><li>Contact Us</li></ScrollToTopNavLink>
            </ul>

            <button className="self-start smallTablet:hidden smallPhone:flex ml-auto flex-col cursor-pointer justify-center items-center group" onClick={() => setIsOpen(!isOpen)}>
                <div className={`${genericHamburgerLine} ${isOpen ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"}`} />
                <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
                <div className={`${genericHamburgerLine} ${isOpen ? "-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"}`} />
            </button>
        </div>
    );
}

export default Navbar;