import { NavLink } from 'react-router-dom';
import Section from '../Section/Section';

const OneOnOne = () => {
    const getNextSundayDate = () => {
        const today = new Date();
        const nextSunday = new Date(today);
        nextSunday.setDate(today.getDate() + ((0 + 7 - today.getDay()) % 7));
    
        const nextSundayDate = nextSunday.getDate();
        const nextSundayMonth = nextSunday.toLocaleString('default', { month: 'short' });
    
        return {
            date: nextSundayDate,
            month: nextSundayMonth
        };
    }

    return (
        <Section heading="One-on-One Interaction" subHeading="Let's connect for a personalized conversation tailored just for you!" bgColor="#F8F8F8">
            <div data-aos="fade" style={{ boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px' }} className='flex largeTablet:flex-row smallPhone:flex-col p-5 rounded-xl bg-white'>
                <img style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }} className='wideScreen:w-[480px] desktop:w-[430px] largeTablet:w-[380px] largePhone:w-[500px] smallPhone:w-[250px] largeTablet:h-auto largePhone:h-[400px] smallPhone:h-[250px] rounded-md largeTablet:mr-10 largeTablet:mb-0  smallPhone:mb-5' src="images/OneOnOne.png" alt="One-on-One interaction poster " />
                <div className='flex flex-col justify-between largeTablet:pl-10 largeTablet:border-l-2 largeTablet:border-t-0 smallPhone:border-t-2 border-dashed border-gray'>
                    <div className='mt-2'>
                        <h2 className='desktop:text-3xl largePhone:text-2xl smallPhone:text-lg text-font_one font-semibold desktop:mb-5 largeTablet:mb-3 smallPhone:mb-1'>Personalized 1:1 Experience</h2>
                        <p className='largeTablet:w-fit largePhone:w-[380px] smallPhone:w-[250px] desktop:text-base largePhone:text-sm smallPhone:text-xs text-font_two font-normal text-justify'>We offer weekly One-on-One interaction to our students. Interested students can register by clicking on the button below and get a sneak peek of the same</p>
                    </div>

                    <div className='desktop:space-y-8 largeTablet:space-y-5 smallPhone:space-y-3 largeTablet:my-0 largePhone:my-5 smallPhone:my-4'>
                        <div className='flex items-center'>
                            <span className='flex flex-col justify-center w-fit border-[1px] border-gray rounded'>
                                <span className='text-[10px] text-white font-medium bg-font_one px-2 py-[1px] rounded-t-sm'>{getNextSundayDate().month}</span>
                                <span className='font-bold text-[12px] text-font_two px-2 py-[1px] flex items-center justify-center'>{getNextSundayDate().date}</span>
                            </span>
                            <span className='flex flex-col ml-4'>
                                <span className='largePhone:text-base smallPhone:text-sm text-font_one font-semibold'>Every Sunday ( Sun, {getNextSundayDate().date})</span>
                                <span className='largePhone:text-sm smallPhone:text-xs text-font_two font-normal'>11:00AM - 12:00AM</span>
                            </span>
                        </div>

                        <div className='flex items-center'>
                            <i className="fa-solid fa-video text-gray p-[7px] border-[1px] border-gray rounded"></i>
                            <span className='flex flex-col ml-4'>
                                <span className='largePhone:text-base smallPhone:text-sm text-font_one font-semibold'>Online</span>
                                <span className='largePhone:text-sm smallPhone:text-xs text-font_two font-normal'>Book Slot to get link</span>
                            </span>
                        </div>

                        <div className='flex items-center'>
                            <i className="fa-solid fa-ticket text-gray p-[7px] border-[1px] border-gray rounded"></i>
                            <span className='flex flex-col ml-4'>
                                <span className='largePhone:text-base smallPhone:text-sm text-font_one font-semibold'>FREE</span>
                                <span className='largePhone:text-sm smallPhone:text-xs text-font_two font-normal'>Register Members Only</span>
                            </span>
                        </div>
                    </div>

                    <NavLink to="https://meetpro.club/TheChosenField" className="w-full text-primary border-2 border-primary text-lg font-medium desktop:py-3 largePhone:py-2 smallPhone:py-1 flex justify-center rounded-full mr-5 transition ease-in-out delay-150 hover:bg-primary hover:text-white">Book Now</NavLink>
                </div>
            </div>
        </Section>
    );
}

export default OneOnOne;