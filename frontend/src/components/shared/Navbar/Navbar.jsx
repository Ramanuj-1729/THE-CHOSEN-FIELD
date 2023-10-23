import { NavLink } from "react-router-dom";

const navBgStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(2px)',
    border: '1px solid rgba(255, 255, 255, 0.29)'
}

const Navbar = () => {
    return (
        <div style={navBgStyle} className='flex mx-40 py-5 pl-5 items-center absolute top-[6.3rem] left-0 right-0 z-10'>
            <ul className='flex text-white space-x-10 text-base'>
                <NavLink to="/" className="text-primary transition ease-in-out delay-150  hover:text-primary"><li>Home</li></NavLink>
                <NavLink to="/about" className="transition ease-in-out delay-150 hover:text-primary"><li>About Us</li></NavLink>
                <NavLink to="/courses" className="transition ease-in-out delay-150 hover:text-primary"><li>Courses</li></NavLink>
                <NavLink to="/contact" className="transition ease-in-out delay-150 hover:text-primary"><li>Contact Us</li></NavLink>
            </ul>
        </div>
    );
}

export default Navbar;