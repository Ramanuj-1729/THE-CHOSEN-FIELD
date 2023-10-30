import { NavLink } from 'react-router-dom';
import ScrollToTopNavLink from '../../ScrollToTopNavLink/ScrollToTopNavLink';

const Brand = () => {
    return (
        <div className="flex items-center py-5">
            <ScrollToTopNavLink to="/" className="text-white largeTablet:text-3xl smallTablet:text-2xl font-semibold transition ease-in delay-150 hover:text-primary" >TheChosenField</ScrollToTopNavLink>

            <div className="ml-auto flex items-center desktop:space-x-20 largeTablet:space-x-12 mediumTablet:space-x-6 smallTablet:space-x-4">
                <span className="text-white flex items-center">
                    <i className="fa-solid fa-phone largeTablet:text-3xl mediumTablet:text-2xl smallTablet:text-xl"></i>
                    <span className="largeTablet:text-lg mediumTablet:text-base smallTablet:text-sm mediumTablet:ml-3 smallTablet:ml-1">
                        <div className="font-normal">Call Us</div>
                        <div className="font-medium">+91 7051144137</div>
                    </span>
                </span>
                <span className="text-primary largeTablet:space-x-5 mediumTablet:space-x-3 smallTablet:space-x-2">
                    <NavLink to="https://www.youtube.com/@TheChosenField" target="_blank"><i className="fa-brands fa-youtube largeTablet:p-3 smallTablet:p-2 rounded-full bg-transparent_blur transition ease-in delay-150 hover:text-white hover:bg-primary"></i></NavLink>
                    <NavLink to="http://www.instagram.com/_silentplay" target="_blank"><i className="fa-brands fa-square-instagram largeTablet:p-3 smallTablet:p-2 rounded-full bg-transparent_blur transition ease-in delay-150 hover:text-white hover:bg-primary"></i></NavLink>
                    <NavLink to="https://twitter.com/qureshisajjad21" target="_blank"><i className="fa-brands fa-twitter largeTablet:p-3 smallTablet:p-2 rounded-full bg-transparent_blur transition ease-in delay-150 hover:text-white hover:bg-primary"></i></NavLink>
                    <NavLink to="http://www.quora.com/profile/Sajjad-Qureshi-13?ch=2&oid=246599219&srid=hJROR&target_type=user" target="_blank"><i className="fa-brands fa-quora largeTablet:p-3 smallTablet:p-2 rounded-full bg-transparent_blur transition ease-in delay-150 hover:text-white hover:bg-primary"></i></NavLink>
                </span>
            </div>
        </div>
    );
}

export default Brand;