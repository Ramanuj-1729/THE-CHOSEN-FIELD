import 'aos/dist/aos.css';

const Section = ({ heading, subHeading, children, bgColor }) => {
    return (
        <section style={{ backgroundColor: bgColor }}>
            <div className="mx-40 py-24 relative flex items-center flex-col justify-center">
                <div data-aos="fade" className="flex items-center flex-col">
                    <h4 className="text-primary font-semibold text-base mb-2">{heading}</h4>
                    <h2 className="text-3xl text-center text-font_two font-semibold mb-10">{subHeading}</h2>
                </div>

                {children}
            </div>
        </section>
    );
}

export default Section;