const Quote = ({quote, name}) => {
    return (
        <div data-aos="fade" className="mt-16 relative w-fit mx-auto">
            <p className="smallTablet:text-xl smallPhone:text-lg text-center text-font_two font-semibold"><i className="fa-solid fa-quote-left text-2xl text-primary mr-2" />{quote}<i className="fa-solid fa-quote-right text-2xl text-primary ml-2" /></p>
            <span className="float-right text-font_one smallTablet:text-lg smallPhone:text-base font-bold mt-2">{name}</span>
        </div>
    );
}

export default Quote;