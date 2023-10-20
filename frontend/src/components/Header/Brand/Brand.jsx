import { NavLink } from "react-router-dom";

const Brand = () => {
    return (
        <div className="flex items-center py-5">
            <NavLink to="/" className="text-white text-3xl font-semibold transition ease-in delay-150 hover:text-primary" >THE CHOSEN FIELD</NavLink>

            <div className="ml-auto flex items-center space-x-32">
                <span className="text-white flex items-center">
                    <i className="fa-solid fa-phone text-3xl"></i>
                    <span className="text-lg ml-3">
                        <div className="font-normal">Call Us</div>
                        <djv className="font-medium">+91 7051144137</djv>
                    </span>
                </span>
                <span className="text-primary space-x-5">
                    <NavLink to="https://www.youtube.com/"><i className="fa-brands fa-youtube p-3 rounded-full bg-transparent_blur transition ease-in delay-150 hover:text-white hover:bg-primary"></i></NavLink>
                    <NavLink to="https://www.instagram.com/"><i className="fa-brands fa-square-instagram p-3 rounded-full bg-transparent_blur transition ease-in delay-150 hover:text-white hover:bg-primary"></i></NavLink>
                    <NavLink to="https://www.twitter.com/"><i className="fa-brands fa-twitter p-3 rounded-full bg-transparent_blur transition ease-in delay-150 hover:text-white hover:bg-primary"></i></NavLink>
                </span>
            </div>
        </div>
    );
}

export default Brand;