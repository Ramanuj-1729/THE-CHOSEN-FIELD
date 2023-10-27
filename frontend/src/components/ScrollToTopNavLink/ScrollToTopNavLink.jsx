import { NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTopNavLink = (props) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [location]);

    return (
        <NavLink {...props}>
            {props.children}
        </NavLink>
    );
};

export default ScrollToTopNavLink;
