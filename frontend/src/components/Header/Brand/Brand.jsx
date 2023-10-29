import { NavLink } from 'react-router-dom';
import ScrollToTopNavLink from '../../ScrollToTopNavLink/ScrollToTopNavLink';

const Brand = () => {
    return (
        <div className="flex items-center py-5">
            <ScrollToTopNavLink to="/" className="text-white text-3xl font-semibold transition ease-in delay-150 hover:text-primary" >TheChosenField</ScrollToTopNavLink>

            <div className="ml-auto flex items-center wideScreen:space-x-20">
                <span className="text-white flex items-center">
                    <i className="fa-solid fa-phone text-3xl"></i>
                    <span className="text-lg ml-3">
                        <div className="font-normal">Call Us</div>
                        <div className="font-medium">+91 7051144137</div>
                    </span>
                </span>
                <span className="text-primary space-x-5">
                    <NavLink to="https://www.youtube.com/@TheChosenField" target="_blank"><i className="fa-brands fa-youtube p-3 rounded-full bg-transparent_blur transition ease-in delay-150 hover:text-white hover:bg-primary"></i></NavLink>
                    <NavLink to="http://www.instagram.com/_silentplay" target="_blank"><i className="fa-brands fa-square-instagram p-3 rounded-full bg-transparent_blur transition ease-in delay-150 hover:text-white hover:bg-primary"></i></NavLink>
                    <NavLink to="https://twitter.com/qureshisajjad21" target="_blank"><i className="fa-brands fa-twitter p-3 rounded-full bg-transparent_blur transition ease-in delay-150 hover:text-white hover:bg-primary"></i></NavLink>
                    <NavLink to="http://www.quora.com/profile/Sajjad-Qureshi-13?ch=2&oid=246599219&srid=hJROR&target_type=user" target="_blank"><i className="fa-brands fa-quora p-3 rounded-full bg-transparent_blur transition ease-in delay-150 hover:text-white hover:bg-primary"></i></NavLink>
                </span>
            </div>
        </div>
    );
}

export default Brand;