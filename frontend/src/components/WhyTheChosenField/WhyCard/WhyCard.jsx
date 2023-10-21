
const WhyCard = ({ icon, color, heading, paragraph }) => {
    return (
        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px', borderColor: `${color}`}} className="bg-white flex items-center flex-col p-6 rounded-md border-b-4 transition ease-in-out delay-150 hover:scale-105">
            <span style={{ backgroundColor: `${color}` }} className={`w-12 h-12 flex justify-center items-center rounded-full mb-4`}><i className={`${icon} text-xl text-white`}></i></span>
            <h3 className="text-lg text-font_one font-semibold mb-5">{heading}</h3>
            <p className="text-base font-medium text-center">{paragraph}</p>
        </div>
    );
}

export default WhyCard;