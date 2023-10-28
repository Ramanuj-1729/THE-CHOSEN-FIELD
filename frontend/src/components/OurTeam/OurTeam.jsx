import Section from "../Section/Section";
import { NavLink } from "react-router-dom";
import Quote from "../shared/Quote/Quote";

const OurTeam = () => {
    return (
        <Section heading="Our Team" subHeading="Meet your Educator" bgColor="#FFFFFF" >
            <NavLink to="/about" className='absolute top-[115px] right-0 border-2 border-primary px-10 py-2 text-font_two text-lg font-medium rounded transition ease-in-out delay-150 hover:bg-primary hover:text-white'>Know More</NavLink>
            <div data-aos="fade-up" className="flex items-center flex-col">
                <img className="w-52 rounded-full border-4 border-primary mb-2" src="images/admin1.jpg" alt="" />
                <h3 className="text-2xl text-font_one font-bold mb-1">Sajad Ahmad</h3>
                <h4 className="text-xl text-font_two font-medium">Founder, The Chosen Field</h4>
            </div>
            <div data-aos="fade-up" className="mt-12 flex items-center flex-col">
                <img className="w-56 mb-2" src="images/Unacademy-logo.png" alt="" />
                <h5 className="text-xl text-font_two font-medium">Unacademy, Educator</h5>
            </div>

            <Quote quote="Live as if you were to die tomorrow. Learn as if you were to live forever." name="Mahatma Gandhi" />
        </Section>
    );
}

export default OurTeam;