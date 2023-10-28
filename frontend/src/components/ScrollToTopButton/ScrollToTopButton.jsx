import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <div className='fixed w-10 h-10 bottom-10 right-10 bg-primary text-white rounded-full flex justify-center items-center cursor-pointer z-30 transition ease-in-out delay-150 hover:bg-[#19a095]' onClick={scrollToTop}>
                    <i className="fa-solid fa-circle-arrow-up"></i>
                </div>
            )}
        </>
    );
};

export default ScrollToTopButton;
