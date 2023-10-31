import FeaturedCourses from "../../components/FeaturedCourses/FeaturedCourses";
import Brand from "../../components/Header/Brand/Brand";
import Header from "../../components/Header/Header";
import OneOnOne from "../../components/OneOnOne/OneOnOne";
import OurTeam from "../../components/OurTeam/OurTeam";
import WhyTheChosenField from "../../components/WhyTheChosenField/WhyTheChosenField";

const Home = () => {
    return (
        <main>
            <section>
                <Header bgImageLarge="header-large-bg.png" bgImageSmall="header-small-bg.png">
                    <Brand />
                </Header>
            </section>

            <WhyTheChosenField />
            <FeaturedCourses />
            <OneOnOne />
            <OurTeam />
        </main>
    );
}

export default Home;