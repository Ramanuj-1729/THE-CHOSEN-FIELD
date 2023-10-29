import CourseCard from '../CourseCard/CourseCard';
import Section from '../Section/Section';
import coursesData from '../../coursesData.json';
import ScrollToTopNavLink from '../ScrollToTopNavLink/ScrollToTopNavLink';

const FeaturedCourses = () => {
    return (
        <Section heading="Featured Courses" subHeading="Explore Our Popular Online Courses" bgColor="#ffffff">
            <ScrollToTopNavLink to="/courses" className='absolute top-[115px] right-0 border-2 border-primary desktop:px-10 largeTablet:px-8 largeTablet:py-2 text-font_two desktop:text-lg largeTablet:text-base font-medium rounded transition ease-in-out delay-150 hover:bg-primary hover:text-white'>View All</ScrollToTopNavLink>
            <div className='flex justify-center items-center desktop:space-x-6 largeTablet:space-x-4'>
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