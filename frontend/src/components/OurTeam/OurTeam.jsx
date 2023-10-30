import Section from "../Section/Section";
import Quote from "../shared/Quote/Quote";
import ScrollToTopNavLink from "../ScrollToTopNavLink/ScrollToTopNavLink";

const OurTeam = () => {
    return (
        <Section heading="Our Team" subHeading="Meet your Educator" bgColor="#FFFFFF" >
            <ScrollToTopNavLink to="/about" className='absolute largeTablet:top-[115px] mediumTablet:top-[70px] largePhone:top-[35px] largeTablet:right-0 mediumTablet:-right-8 smallTablet:-right-2 largePhone:right-0 border-2 border-primary desktop:px-10 largeTablet:px-8 mediumTablet:px-7 largePhone:px-5 mediumTablet:py-2 largePhone:py-1 text-font_two desktop:text-lg largePhone:text-base font-medium rounded transition ease-in-out delay-150 hover:bg-primary hover:text-white'>Know More</ScrollToTopNavLink>
            <div data-aos="fade-up" className="flex items-center flex-col">
                <img className="largeTablet:w-52 largePhone:w-40 rounded-full border-4 border-primary mb-2" src="images/admin1.jpg" alt="" />
                <h3 className="smallTablet:text-2xl largePhone:text-xl text-font_one font-bold mb-1">Sajad Ahmad</h3>
                <h4 className="smallTablet:text-xl largePhone:text-lg text-font_two font-medium">Founder, The Chosen Field</h4>
            </div>
            <div data-aos="fade-up" className="mt-12 flex items-center flex-col">
                <img className="largeTablet:w-56 largePhone:w-40 mb-2" src="images/Unacademy-logo.png" alt="" />
                <h5 className="smallTablet:text-xl largePhone:text-lg text-font_two font-medium">Unacademy, Educator</h5>
            </div>

            <Quote quote="Live as if you were to die tomorrow. Learn as if you were to live forever." name="Mahatma Gandhi" />
        </Section>
    );
}

export default OurTeam;