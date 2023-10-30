import { useLocation } from "react-router-dom";
import ScrollToTopNavLink from "../../ScrollToTopNavLink/ScrollToTopNavLink";

const navBgStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(2px)',
    border: '1px solid rgba(255, 255, 255, 0.29)'
}

const Navbar = () => {
    const location = useLocation();
    let path = location.pathname;
    const active = "text-primary";
    return (
        <div style={navBgStyle} className='flex desktop:mx-36 largeTablet:mx-20 mediumTablet:mx-12 smallTablet:mx-8 py-5 pl-5 items-center absolute top-[6.3rem] left-0 right-0 z-10'>
            <ul className='flex text-white space-x-10 smallTablet:text-base'>
                <ScrollToTopNavLink to="/" className={`transition ease-in-out delay-150 hover:text-primary ${path === "/" ? active : ""}`}><li>Home</li></ScrollToTopNavLink>
                <ScrollToTopNavLink to="/courses" className={`transition ease-in-out delay-150 hover:text-primary ${path === "/courses" ? active : ""}`}><li>Courses</li></ScrollToTopNavLink>
                <ScrollToTopNavLink to="/about" className={`transition ease-in-out delay-150 hover:text-primary ${path === "/about" ? active : ""}`}><li>About Us</li></ScrollToTopNavLink>
                <ScrollToTopNavLink to="/contact" className={`transition ease-in-out delay-150 hover:text-primary ${path === "/contact" ? active : ""}`}><li>Contact Us</li></ScrollToTopNavLink>
            </ul>
        </div>
    );
}

export default Navbar;