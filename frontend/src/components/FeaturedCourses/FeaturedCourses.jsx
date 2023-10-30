import CourseCard from '../CourseCard/CourseCard';
import Section from '../Section/Section';
import coursesData from '../../coursesData.json';
import ScrollToTopNavLink from '../ScrollToTopNavLink/ScrollToTopNavLink';

const FeaturedCourses = () => {
    return (
        <Section heading="Featured Courses" subHeading="Explore Our Popular Online Courses" bgColor="#ffffff">
            <ScrollToTopNavLink to="/courses" className='absolute largeTablet:top-[115px] mediumTablet:top-[70px] largePhone:top-[35px] smallPhone:top-[30px] largeTablet:right-0 mediumTablet:-right-8 smallTablet:-right-2 largePhone:right-0 smallPhone:-right-3 smallTablet:border-2 smallPhone:border-[1px] border-primary desktop:px-10 largeTablet:px-8 mediumTablet:px-7 largePhone:px-5 smallPhone:px-3 mediumTablet:py-2 smallPhone:py-1 text-font_two desktop:text-lg largePhone:text-base smallPhone:text-sm font-medium rounded transition ease-in-out delay-150 hover:bg-primary hover:text-white'>View All</ScrollToTopNavLink>
            <div className='flex justify-center items-center largeTablet:flex-row smallPhone:flex-col desktop:space-x-6 largeTablet:space-x-4 largeTablet:space-y-0 largePhone:space-y-5 smallPhone:space-y-5'>
                {
                    coursesData.slice(0, 2).map((course, index) => (
                        <CourseCard
                            key={course._id}
                            courseImage={course.image}
                            courseName={course.courseName}
                            description={course.description}
                            instructorImage={course.instructorImage}
                            instructorName={course.instructor}
                            price={course.price}
                            off={course.off}
                            duration={course.duration}
                            mode={course.mode}
                            aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                        />
                    ))
                }
            </div>
        </Section>
    );
}

export default FeaturedCourses;