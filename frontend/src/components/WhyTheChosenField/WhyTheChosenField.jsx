import Section from "../Section/Section";
import WhyCard from "./WhyCard/WhyCard";

const WhyTheChosenField = () => {
    return (
        <Section heading="WHY THE CHOSEN FIELD ?" subHeading={`Making learning easier and more convenient for you`} bgColor="#F8F8F8">
            <div className="grid largeTablet:grid-cols-3 mediumTablet:grid-cols-2 desktop:gap-6 largeTablet:gap-4 mediumTablet:gap-3">
                <WhyCard aos="fade-right" icon="fa-regular fa-newspaper" color="#36688D" heading="Learn Something new" paragraph="Learn new concepts daily, increase your productivity & reach your full potential." />
                <WhyCard aos="fade-up" icon="fa-solid fa-book" color="#F3CD05" heading="Curated Content" paragraph="Learn in-depth conceptual overviews, reliable and high-quality material." />
                <WhyCard aos="fade-left" icon="fa-solid fa-clipboard-question" color="#6464A5" heading="Hand Picked Question" paragraph="Get access to hand-picked exam questions across categories & difficulty levels." />
            </div>
        </Section>
    );
}

export default WhyTheChosenField;