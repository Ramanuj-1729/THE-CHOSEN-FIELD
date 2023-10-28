const Quote = ({quote, name}) => {
    return (
        <div data-aos="fade" className="mt-16 relative w-fit mx-auto">
            <p className="text-xl text-center text-font_two font-semibold"><i className="fa-solid fa-quote-left absolute -left-8 -top-3 text-2xl text-primary" />{quote}<i className="fa-solid fa-quote-right absolute -right-8 -top-3 text-2xl text-primary" /></p>
            <span className="float-right text-font_one text-lg font-bold mt-2">{name}</span>
        </div>
    );
}

export default Quote;