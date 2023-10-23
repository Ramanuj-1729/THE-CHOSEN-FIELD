import FeaturedCourses from "../../components/FeaturedCourses/FeaturedCourses";
import Brand from "../../components/Header/Brand/Brand";
import Header from "../../components/Header/Header";
import OurTeam from "../../components/OurTeam/OurTeam";
import Webinar from "../../components/Webinar/Webinar";
import WhyTheChosenField from "../../components/WhyTheChosenField/WhyTheChosenField";

const Home = () => {
    return (
        <main>
            <section>
                <Header>
                    <Brand />
                </Header>
            </section>

            <WhyTheChosenField />
            <FeaturedCourses />
            <Webinar />
            <OurTeam />
        </main>
    );
}

export default Home;