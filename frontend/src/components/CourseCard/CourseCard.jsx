
const CourseCard = ({ courseImage, courseName, description, instructorImage, instructorName, price, off, duration, mode, aos }) => {
    return (
        <div data-aos={aos}>
            <div style={{ boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px' }} className="flex justify-center rounded cursor-pointer transition ease-in-out delay-150 hover:scale-105">
                <img className="wideScreen:w-64 rounded-s" src={courseImage} alt="" />
                <div className="flex justify-center flex-col p-5">
                    <h3 style={{ maxWidth: '270px' }} className="text-xl font-medium text-font_one">{courseName}</h3>
                    <p className="mt-3 mb-5 text-sm text-font_two font-medium">{description}</p>
                    <div className="flex items-center">
                        <img className="w-8 h-8 rounded-full mr-3" src={instructorImage} alt="" />
                        <span className="text-sm mr-1">by</span>
                        <span className="text-sm font-semibold">{instructorName}</span>
                    </div>

                    <div className="my-5 text-xl font-semibold">
                        <span className="text-primary mr-5">₹ {price}</span>
                        <strike className="opacity-50">₹ {parseInt(price) + parseInt(off)}</strike>
                    </div>

                    <div className="border-t-2 border-[#bdbdbd] flex justify-between items-center pt-3" >
                        <span className="text-sm text-font_two">Duration: <b>{duration}</b></span>
                        <span className="text-sm text-font_two">Mode: <b>{mode}</b></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;