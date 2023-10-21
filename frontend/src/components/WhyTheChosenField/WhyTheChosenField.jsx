import WhyCard from "./WhyCard/WhyCard";

const WhyTheChosenField = () => {
    return (
        <div className="mx-40 flex items-center flex-col py-24">
            <h4 className="text-primary font-semibold text-base mb-2">WHY THE CHOSEN FIELD ?</h4>
            <h2 className="text-3xl text-center text-font_two font-semibold mb-10">Making learning easier and <br /> more convenient for you.</h2>

            <div className="grid grid-cols-3 gap-6">
                <WhyCard icon="fa-solid fa-user" color="#1eb2a6" heading="Data Structure" paragraph="Data structures are the problem-solving pillars of coding. Learn all the foundational knowledge about all of the popular data structure that you need, to be well-versed in interviews." />
                <WhyCard icon="fa-solid fa-user" color="#1eb2a6" heading="Data Structure" paragraph="Data structures are the problem-solving pillars of coding. Learn all the foundational knowledge about all of the popular data structure that you need, to be well-versed in interviews." />
                <WhyCard icon="fa-solid fa-user" color="#1eb2a6" heading="Data Structure" paragraph="Data structures are the problem-solving pillars of coding. Learn all the foundational knowledge about all of the popular data structure that you need, to be well-versed in interviews." />
                <WhyCard icon="fa-solid fa-user" color="#1eb2a6" heading="Data Structure" paragraph="Data structures are the problem-solving pillars of coding. Learn all the foundational knowledge about all of the popular data structure that you need, to be well-versed in interviews." />
            </div>
        </div>
    );
}

export default WhyTheChosenField;