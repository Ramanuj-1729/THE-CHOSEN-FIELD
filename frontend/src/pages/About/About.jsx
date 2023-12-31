import Header from '../../components/Header/Header';
import Brand from '../../components/Header/Brand/Brand';
import { NavLink } from 'react-router-dom';
import Quote from '../../components/shared/Quote/Quote';

const About = () => {
    return (
        <>
            <section>
                <Header bgImage="cta3.png">
                    <Brand />
                </Header>
            </section>
            <div className='wideScreen:px-36 desktop:px-28 largeTablet:px-16 largePhone:px-10 smallPhone:px-10 my-20 overflow-hidden'>
                <div className='flex mediumTablet:flex-row smallPhone:flex-col items-center largeTablet:space-x-10 mediumTablet:space-x-5 mediumTablet:space-y-0 smallPhone:space-y-5 mb-10'>
                    <img data-aos="fade-right" className='desktop:w-[580px] largeTablet:w-[450px] smallTablet:w-[380px] largePhone:w-[320px] smallPhone:w-[280px] mediumTablet:rounded-3xl smallPhone:rounded-full' src="images/admin2.jpg" alt="instructor-about" />
                    <div data-aos="fade-left" className="flex flex-col mediumTablet:items-start smallPhone:items-center">
                        <h2 className='largeTablet:text-4xl largePhone:text-3xl smallPhone:text-2xl font-semibold text-font_one mb-5'>About Us</h2>
                        <h4 className='largeTablet:text-2xl largePhone:text-xl smallPhone:text-lg text-font_two font-medium mb-2'>Hello! Welcome to TheChosenField! Really happy to see you here.</h4>
                        <p className='largeTablet:text-lg largePhone:text-base smallPhone:text-sm text-font_two font-normal text-justify'>With the vision of imparting quality education through sustainable manner, an idea turned into an Academy, me and out core members are working day and night in developing courses that just are exceptional in this modern day education. We are committed in delivering Courses to Live 1:1 Counselling sessions in Personal and Academic Issues, As a team we are here to improve you and your career as we do. For any additional questions, feel free to contact us at <NavLink to="/contact">www.thechosenfield.com/contact</NavLink></p>
                    </div>
                </div>
                <div className='flex mediumTablet:flex-row smallPhone:flex-col-reverse items-center largeTablet:space-x-10 mediumTablet:space-x-5'>
                    <div data-aos="fade-right" className="flex flex-col mediumTablet:items-start smallPhone:items-center mediumTablet:mt-0 largePhone:mt-5 smallPhone:mt-5">
                        <h2 className='largeTablet:text-4xl largePhone:text-3xl smallPhone:text-2xl font-semibold text-font_one mb-5'>Our Story</h2>
                        <h4 className='largeTablet:text-2xl largePhone:text-xl smallPhone:text-lg text-font_two font-medium mb-2'>At TheChosenField, we aim to provide new students with proper mentorship and education for their learning and growth.</h4>
                        <p className='largeTablet:text-lg largePhone:text-base smallPhone:text-sm text-font_two font-normal text-justify'>I am Sajad Ahmed, An Educator, Counsellor, Motivator and Academician. During the last 7 years I have worked with many prominent organisations and delivered quality education and guidance to the young minds both in online and offline modes, I have a diverse expertise and have taught different science and social science with quality adherence. Now its my mission to transform your journey from an ordinary aspirant to the best version of yourself.</p>
                    </div>
                    <img data-aos="fade-left" className='desktop:w-[580px] largeTablet:w-[450px] smallTablet:w-[380px] largePhone:w-[320px] smallPhone:w-[280px] smallPhone:rounded-full' src="images/admin1.jpg" alt="instructor-story" />
                </div>

                <Quote quote="You educate a man. You educate a woman. You educate a generation." name="Brigham Young" />
            </div>
        </>
    );
}

export default About;