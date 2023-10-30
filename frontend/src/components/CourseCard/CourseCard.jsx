
const CourseCard = ({ courseImage, courseName, description, instructorImage, instructorName, price, off, duration, mode, aos }) => {
    return (
        <div className="w-full" data-aos={aos}>
            <div style={{ boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px' }} className="flex justify-center rounded cursor-pointer transition ease-in-out delay-150 hover:scale-105">
                <img className="desktop:w-64 largeTablet:w-52 smallTablet:w-56 rounded-s" src={courseImage} alt="" />
                <div className="flex justify-center flex-col p-4 w-full">
                    <h3 className="desktop:text-xl largeTablet:text-lg smallTablet:text-xl font-medium text-font_one">{courseName}</h3>
                    <p className="mt-2 mb-3 desktop:text-sm largeTablet:text-xs smallTablet:text-sm text-font_two font-medium">{description}</p>
                    <div className="flex items-center">
                        <img className="desktop:w-8 largeTablet:w-6 smallTablet:w-7 desktop:h-8 largeTablet:h-6 smallTablet:h-7 rounded-full mr-3" src={instructorImage} alt="" />
                        <span className="desktop:text-sm largeTablet:text-xs smallTablet:text-sm mr-1">by</span>
                        <span className="desktop:text-sm largeTablet:text-xs smallTablet:text-sm font-semibold">{instructorName}</span>
                    </div>

                    <div className="my-2 dektop:text-xl largeTablet:text-lg smallTablet:text-xl font-semibold">
                        <span className="text-primary mr-5">₹ {price}</span>
                        <strike className="opacity-50">₹ {parseInt(price) + parseInt(off)}</strike>
                    </div>

                    <div className="border-t-2 border-[#bdbdbd] desktop:text-sm largeTablet:text-xs smallTablet:text-sm flex justify-between items-center pt-2" >
                        <span className="text-font_two">Duration: <b>{duration}</b></span>
                        <span className="text-font_two">Mode: <b>{mode}</b></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;