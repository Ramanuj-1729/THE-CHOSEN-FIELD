
const WhyCard = ({ icon, color, heading, paragraph, aos }) => {
    return (
        <div data-aos={aos}>
            <div style={{ boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px', borderColor: `${color}` }} className="h-full bg-white flex items-center flex-col desktop:px-6 smallTablet:px-5 largePhone:px-4 desktop:py-6 largePhone:py-4 rounded-md border-b-4 transition ease-in-out delay-150 hover:scale-105">
                <span style={{ backgroundColor: `${color}` }} className={`largeTablet:w-12 largePhone:w-10 largeTablet:h-12 largePhone:h-10 flex justify-center items-center rounded-full largeTablet:mb-4 smallTablet:mb-3 largePhone:mb-2`}><i className={`${icon} largeTablet:text-xl smallTablet:text-lg largePhone:text-base text-white`}></i></span>
                <h3 className="text-center largeTablet:text-lg smallTablet:text-base largePhone:text-base text-font_one font-semibold largeTablet:mb-5 smallTablet:mb-4 largePhone:mb-3">{heading}</h3>
                <p className="largeTablet:text-base largePhone:text-sm largeTablet:font-medium largePhone:font-normal text-center">{paragraph}</p>
            </div>
        </div>
    );
}

export default WhyCard;