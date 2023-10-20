const headerBackground = {
    width: '100%',
    height: '100vh',
    backgroundColor: "#9EC4C9",
    backgroundPosition: '85%',
    backgroundPositionY: '100px',
    backgroundImage: `url(images/cta2.2.png)`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
}
const Header = ({ children }) => {
    return (
        <div style={headerBackground} className="px-40">
            {children}
            <div className="absolute translate-y-2/3">
                <span className="text-sm font-medium text-primary">WELCOME TO <b>THE CHOSEN FIELD</b></span>
                <div className="text-6xl font-semibold text-white my-5">Build Your <br /> Future, Choose <br /> your Course</div>
                <p className="text-base text-white opacity-[0.8] mb-6">Buy your course now & start your preparation</p>
                <span>
                    <button className="text-white bg-primary text-lg font-medium py-4 px-10 rounded mr-5 transition ease-in-out delay-150 hover:bg-[#19a095]">View Courses</button>
                    <button className="text-white text-lg font-medium py-4 px-10 rounded border-2 border-primary hover:border-[#19a095] "><i className="fa-regular fa-circle-play mr-3"></i>Watch Video</button>
                </span>
            </div>
        </div>
    );
}

export default Header;