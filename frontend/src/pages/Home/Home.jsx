import Brand from "../../components/Header/Brand/Brand";
import Header from "../../components/Header/Header";
import WhyTheChosenField from "../../components/WhyTheChosenField/WhyTheChosenField";

const Home = () => {
    return (
        <main>
            <section>
                <Header>
                    <Brand />
                </Header>
            </section>

            <section className="bg-fadeWhite">
                <WhyTheChosenField />
            </section>
        </main>
    );
}

export default Home;