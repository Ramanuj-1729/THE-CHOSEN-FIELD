
const WhyCard = ({ icon, color, heading, paragraph, aos }) => {
    return (
        <div data-aos={aos}>
            <div style={{ boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px', borderColor: `${color}` }} className="h-full bg-white flex items-center flex-col desktop:px-6 smallTablet:px-5 desktop:py-6 smallTablet:py-4 rounded-md border-b-4 transition ease-in-out delay-150 hover:scale-105">
                <span style={{ backgroundColor: `${color}` }} className={`largeTablet:w-12 smallTablet:w-10 largeTablet:h-12 smallTablet:h-10 flex justify-center items-center rounded-full largeTablet:mb-4 smallTablet:mb-3`}><i className={`${icon} largeTablet:text-xl smallTablet:text-lg text-white`}></i></span>
                <h3 className="largeTablet:text-lg smallTablet:text-base text-font_one font-semibold largeTablet:mb-5 smallTablet:mb-4">{heading}</h3>
                <p className="largeTablet:text-base smallTablet:text-sm largeTablet:font-medium smallTablet:font-normal text-center">{paragraph}</p>
            </div>
        </div>
    );
}

export default WhyCard;