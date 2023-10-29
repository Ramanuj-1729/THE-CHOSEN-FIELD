import Section from "../Section/Section";
import Quote from "../shared/Quote/Quote";
import ScrollToTopNavLink from "../ScrollToTopNavLink/ScrollToTopNavLink";

const OurTeam = () => {
    return (
        <Section heading="Our Team" subHeading="Meet your Educator" bgColor="#FFFFFF" >
            <ScrollToTopNavLink to="/about" className='absolute largeTablet:top-[115px] mediumTablet:top-[70px] largeTablet:right-0 mediumTablet:-right-8 border-2 border-primary desktop:px-10 largeTablet:px-8 mediumTablet:px-7 mediumTablet:py-2 text-font_two desktop:text-lg mediumTablet:text-base font-medium rounded transition ease-in-out delay-150 hover:bg-primary hover:text-white'>Know More</ScrollToTopNavLink>
            <div data-aos="fade-up" className="flex items-center flex-col">
                <img className="largeTablet:w-52 mediumTablet:w-40 rounded-full border-4 border-primary mb-2" src="images/admin1.jpg" alt="" />
                <h3 className="text-2xl text-font_one font-bold mb-1">Sajad Ahmad</h3>
                <h4 className="text-xl text-font_two font-medium">Founder, The Chosen Field</h4>
            </div>
            <div data-aos="fade-up" className="mt-12 flex items-center flex-col">
                <img className="largeTablet:w-56 mediumTablet:w-40 mb-2" src="images/Unacademy-logo.png" alt="" />
                <h5 className="text-xl text-font_two font-medium">Unacademy, Educator</h5>
            </div>

            <Quote quote="Live as if you were to die tomorrow. Learn as if you were to live forever." name="Mahatma Gandhi" />
        </Section>
    );
}

export default OurTeam;