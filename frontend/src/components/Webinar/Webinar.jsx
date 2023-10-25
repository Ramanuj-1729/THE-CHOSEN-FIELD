import Section from '../Section/Section';

const Webinar = () => {
    return (
        <Section heading="Webinar" subHeading="Join Our Exciting Webinar on Web Development!" bgColor="#F8F8F8">
            <div data-aos="zoom-in-up" style={{ boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px' }} className='flex p-5 rounded-xl bg-white'>
                <img style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }} className='w-[420px] rounded-md mr-10' src="images/Webinar-img.png" alt="" />
                <div className='flex flex-col justify-between pl-10 border-l-2 border-dashed border-gray'>
                    <div>
                        <h2 className='text-3xl text-font_one font-semibold'>Navigating The Algorithms</h2>
                        <p className='text-base text-font_two font-normal mt-2'>Unlocking Media Social Success in a Changing Landscape</p>
                    </div>

                    <div className='space-y-8'>
                        <div className='flex items-center'>
                            <span className='flex flex-col justify-center w-fit border-[1px] border-gray rounded'>
                                <span className='text-[10px] text-white font-medium bg-font_one px-2 py-[1px] rounded-t-sm'>JUL</span>
                                <span className='font-bold text-[12px] text-font_two px-2 py-[1px] flex items-center justify-center'>31</span>
                            </span>
                            <span className='flex flex-col ml-4'>
                                <span className='text-base text-font_one font-semibold'>Mon, 31 Jul</span>
                                <span className='text-sm text-font_two font-normal'>7:30AM - 8:30AM</span>
                            </span>
                        </div>

                        <div className='flex items-center'>
                            <i className="fa-solid fa-video text-gray p-[7px] border-[1px] border-gray rounded"></i>
                            <span className='flex flex-col ml-4'>
                                <span className='text-base text-font_one font-semibold'>Online</span>
                                <span className='text-sm text-font_two font-normal'>Register to get link</span>
                            </span>
                        </div>

                        <div className='flex items-center'>
                            <i className="fa-solid fa-ticket text-gray p-[7px] border-[1px] border-gray rounded"></i>
                            <span className='flex flex-col ml-4'>
                                <span className='text-base text-font_one font-semibold'>FREE</span>
                                <span className='text-sm text-font_two font-normal'>Register Members Only</span>
                            </span>
                        </div>
                    </div>

                    <button className="text-primary border-2 border-primary text-lg font-medium py-3 px-10 rounded-full mr-5 transition ease-in-out delay-150 hover:bg-primary hover:text-white">Register Now</button>
                </div>
            </div>
        </Section>
    );
}

export default Webinar;