
const WhyCard = ({ icon, color, heading, paragraph, aos }) => {
    return (
        <div data-aos={aos}>
            <div style={{ boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px', borderColor: `${color}` }} className="h-full bg-white flex items-center flex-col desktop:px-6 mediumTablet:px-5 desktop:py-6 mediumTablet:py-4 rounded-md border-b-4 transition ease-in-out delay-150 hover:scale-105">
                <span style={{ backgroundColor: `${color}` }} className={`largeTablet:w-12 mediumTablet:w-10 largeTablet:h-12 mediumTablet:h-10 flex justify-center items-center rounded-full largeTablet:mb-4 mediumTablet:mb-3`}><i className={`${icon} largeTablet:text-xl mediumTablet:text-lg text-white`}></i></span>
                <h3 className="largeTablet:text-lg mediumTablet:text-base text-font_one font-semibold largeTablet:mb-5 mediumTablet:mb-4">{heading}</h3>
                <p className="largeTablet:text-base mediumTablet:text-sm largeTablet:font-medium mediumTablet:font-normal text-center">{paragraph}</p>
            </div>
        </div>
    );
}

export default WhyCard;