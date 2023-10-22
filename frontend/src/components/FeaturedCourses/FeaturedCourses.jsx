import CourseCard from '../CourseCard/CourseCard';
import Section from '../Section/Section';
import coursesData from '../../coursesData.json';

const FeaturedCourses = () => {
    return (
        <Section heading="Featured Courses" subHeading="Explore Our Popular Online Courses" bgColor="#ffffff">
            <button className='absolute top-[115px] right-0 border-2 border-primary px-10 py-2 text-font_two text-lg font-medium rounded transition ease-in-out delay-150 hover:bg-primary hover:text-white'>View All</button>
            <div className='flex justify-center items-center space-x-6'>
                {
                    coursesData.slice(0, 2).map((course) => (
                        <CourseCard
                            key={course._id}
                            courseImage={course.image}
                            courseName={course.courseName}
                            instructorImage={course.instructorImage}
                            instructorName={course.instructor}
                            price={course.price}
                            off={course.off}
                            duration={course.duration}
                            mode={course.mode}
                        />
                    ))
                }
            </div>
        </Section>
    );
}

export default FeaturedCourses;