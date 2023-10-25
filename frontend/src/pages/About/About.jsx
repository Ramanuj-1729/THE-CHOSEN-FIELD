import Header from '../../components/Header/Header';
import Brand from '../../components/Header/Brand/Brand';

const About = () => {
    return (
        <>
            <section>
                <Header bgImage="cta3.png">
                    <Brand />
                </Header>
            </section>
            <div className='px-40 my-10 space-y-10'>
                <div className='flex items-center space-x-10'>
                    <img data-aos="fade-right" className='w-[580px] rounded-3xl' src="images/instructor_photo.png" alt="instructor-about" />
                    <div data-aos="fade-left">
                        <h2 className='text-4xl font-semibold text-font_one mb-5'>About Us</h2>
                        <h4 className='text-2xl text-font_two font-medium mb-2'>Hello! Welcome to Code Help! Really happy to see you here.</h4>
                        <p className='text-lg text-font_two font-normal text-justify'>Thinking of taking a step towards a mentorship programme? It definitely seems a bit daunting at first. It is never easy to ask for someone's counsel or guidance be it for studies or just in general. So, at CodeHelp we are here to provide all the necessary counsel you might need for placement preparations, interview experiences, programming, et cetera! For any additional questions, feel free to email us at lovebabbar@codehelp.in</p>
                    </div>
                </div>
                <div className='flex items-center space-x-10'>
                    <div data-aos="fade-right">
                        <h2 className='text-4xl font-semibold text-font_one mb-5'>Our Story</h2>
                        <h4 className='text-2xl text-font_two font-medium mb-2'>At Code Help, we aim to provide new students with proper mentorship and education for their learning and growth.</h4>
                        <p className='text-lg text-font_two font-normal text-justify'>Code Help was founded in 2020 by Love Babbar (Ex-Amazon, Ex-Microsoft) to deliver “to the point, short and practical” educational content for learning programming, coding, and preparing for job placements, and interviews. He has been mentoring students through his Youtube channel which has now gained more than 17 million views and is now looking forward to providing his guidance in different courses through Code Help.</p>
                    </div>
                    <img data-aos="fade-left" className='w-[580px] rounded-3xl' src="images/instructor_photo.png" alt="instructor-story" />
                </div>
            </div>
        </>
    );
}

export default About;