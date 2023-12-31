import 'aos/dist/aos.css';

const Section = ({ heading, subHeading, children, bgColor }) => {
    return (
        <section className="overflow-hidden" style={{ backgroundColor: bgColor }}>
            <div className="wideScreen:mx-36 desktop:mx-28 mediumTablet:mx-16 smallTablet:mx-8 smallPhone:mx-6 desktop:py-24 largeTablet:py-20 mediumTablet:py-16 largePhone:py-12 smallPhone:py-10 relative flex items-center flex-col justify-center">
                <div data-aos="fade" className="flex items-center flex-col">
                    <h4 className="text-primary font-semibold mediumTablet:text-base largePhone:text-sm smallPhone:text-xs mb-2">{heading}</h4>
                    <h2 className="desktop:text-3xl largePhone:text-2xl smallPhone:text-xl text-center text-font_two font-semibold largePhone:mb-10 smallPhone:mb-8">{subHeading}</h2>
                </div>

                {children}
            </div>
        </section>
    );
}

export default Section;