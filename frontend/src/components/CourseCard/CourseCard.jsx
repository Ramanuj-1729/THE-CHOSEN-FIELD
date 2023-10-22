
const CourseCard = ({ courseImage, courseName, instructorImage, instructorName, price, off, duration, mode }) => {
    return (
        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px' }} className="flex justify-center rounded cursor-pointer transition ease-in-out delay-150 hover:scale-105">
            <img className="w-72 rounded-s" src={courseImage} alt="" />
            <div className="flex justify-center flex-col p-5">
                <h3 style={{maxWidth: '270px'}} className="text-2xl font-medium text-font_one mb-3">{courseName}</h3>
                <div className="flex items-center">
                    <img className="w-8 h-8 rounded-full mr-3" src={instructorImage} alt="" />
                    <span className="text-sm mr-1">by</span>
                    <span className="text-sm font-semibold">{instructorName}</span>
                </div>

                <div className="my-5">
                    <span className="text-primary text-2xl font-semibold mr-5">₹ {price}</span>
                    <strike className="text-2xl font-semibold opacity-50">₹ {parseInt(price) + parseInt(off)}</strike>
                </div>

                <div className="border-t-2 border-[#bdbdbd] flex justify-between items-center pt-3" >
                    <span className="text-sm text-font_two">Duration: <b>{duration}</b></span>
                    <span className="text-sm text-font_two">Mode: <b>{mode}</b></span>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;