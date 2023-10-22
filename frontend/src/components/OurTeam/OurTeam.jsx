import Section from "../Section/Section";

const OurTeam = () => {
    return (
        <Section heading="Our Team" subHeading="Meet your Instructor" bgColor="#F8F8F8" >
            <button className='absolute top-[115px] right-0 border-2 border-primary px-10 py-2 text-font_two text-lg font-medium rounded transition ease-in-out delay-150 hover:bg-primary hover:text-white'>Know More</button>
            <div className="flex items-center flex-col">
                <img className="w-52 rounded-full border-4 border-primary mb-2" src="images/instructor_photo.png" alt="" />
                <h3 className="text-2xl text-font_one font-bold mb-1">Sajad Ahmad</h3>
                <h4 className="text-xl text-font_two font-medium">Founder, The Chosen Field</h4>
            </div>
            <div className="mt-12 flex items-center flex-col">
                <img className="w-56 mb-2" src="images/Unacademy-logo.png" alt="" />
                <h5 className="text-xl text-font_two font-medium">Ex-Unacademy, Instructor</h5>
            </div>
        </Section>
    );
}

export default OurTeam;