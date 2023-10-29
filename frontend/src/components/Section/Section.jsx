import 'aos/dist/aos.css';

const Section = ({ heading, subHeading, children, bgColor }) => {
    return (
        <section className="overflow-hidden" style={{ backgroundColor: bgColor }}>
            <div className="wideScreen:mx-36 desktop:mx-28 largeTablet:mx-16 desktop:py-24 largeTablet:py-20 relative flex items-center flex-col justify-center">
                <div data-aos="fade" className="flex items-center flex-col">
                    <h4 className="text-primary font-semibold text-base mb-2">{heading}</h4>
                    <h2 className="desktop:text-3xl largeTablet:text-2xl text-center text-font_two font-semibold mb-10">{subHeading}</h2>
                </div>

                {children}
            </div>
        </section>
    );
}

export default Section;