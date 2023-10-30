import Header from "../../components/Header/Header";
import Brand from "../../components/Header/Brand/Brand";
import CourseCard from "../../components/CourseCard/CourseCard";
import coursesData from "../../coursesData.json";
import Pagination from "../../components/shared/Pagination/Pagination";
import { useState } from "react";
import Quote from "../../components/shared/Quote/Quote";

const Courses = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return (
        <>
            <section>
                <Header bgImage="cta3.png">
                    <Brand />
                </Header>
            </section>
            <div className="wideScreen:px-36 desktop:px-24 smallTablet:px-16 smallPhone:px-6 desktop:py-40 smallTablet:py-20 smallPhone:py-10 flex items-center justify-center flex-col overflow-hidden">
                <div className="grid largeTablet:grid-cols-2 smallPhone:grid-cols-1 wideScreen:gap-8 desktop:gap-6 smallPhone:gap-5 mb-10">
                    {
                        coursesData.map((course, index) => (
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
                <Pagination count={Math.ceil(coursesData.length / itemsPerPage)} page={currentPage} onChange={handlePageChange} />

                <Quote quote="An investment in knowledge pays the best interest." name="Benjamin Franklin" />
            </div>
        </>
    );
}

export default Courses;