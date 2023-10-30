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
                <div className='fixed smallPhone:w-10 smallPhone:h-10 largePhone:bottom-10 smallPhone:bottom-8 largePhone:right-10 smallPhone:right-4 bg-primary smallPhone:text-base text-white rounded-full flex justify-center items-center cursor-pointer z-30 transition ease-in-out delay-150 hover:bg-[#19a095]' onClick={scrollToTop}>
                    <i className="fa-solid fa-circle-arrow-up"></i>
                </div>
            )}
        </>
    );
};

export default ScrollToTopButton;
