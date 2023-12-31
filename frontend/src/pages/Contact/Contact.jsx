import { NavLink } from "react-router-dom";
import Brand from "../../components/Header/Brand/Brand";
import Header from "../../components/Header/Header";
import React from "react";

const Contact = () => {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  function submitForm(e) {
    setLoading(true);
    const formEle = document.querySelector("form");
    e.preventDefault();
    const formData = new FormData(formEle);

    fetch(process.env.REACT_APP_SHEET_URL, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        formEle.reset();
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      });
  }
  return (
    <>
      <section>
        <Header bgImage="cta3.png">
          <Brand />
        </Header>
      </section>

      <div
        style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px" }}
        className="flex largeTablet:flex-row smallPhone:flex-col wideScreen:mx-28 desktop:mx-24 mediumTablet:mx-16 smallTablet:mx-8 smallPhone:mx-6 my-20 rounded-md"
      >
        <div className="largeTablet:w-1/2 smallPhone:w-full">
          <iframe
            className="w-full rounded-t-md"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16607.270911461965!2d74.88130787689062!3d32.727931860710115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e837176760ec9%3A0x5d1ce12ca148b964!2sMaha%20Maya%20Temple!5e0!3m2!1sen!2sin!4v1698413435566!5m2!1sen!2sin"
            height={`${window.screen.width >= 1024 ? 750 : 450}`}
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="largeTablet:space-y-5 largePhone:space-y-5 smallPhone:space-y-2 desktop:p-10 largeTablet:p-6 largePhone:p-6 smallPhone:p-5 largeTablet:w-1/2 smallPhone:w-full">
          <h2 className="desktop:text-3xl largeTablet:text-2xl largePhone:text-3xl smallPhone:text-2xl text-font_one font-medium">Contact Us</h2>
          <p className="desktop:text-base largeTablet:text-sm largePhone:text-base smallPhone:text-sm text-font_two opacity-80">We're open for any suggestion or just to have a chat</p>
          <div className="flex largePhone:flex-nowrap smallPhone:flex-wrap largePhone:space-x-2 smallPhone:justify-start">
            <div className="largeTablet:basis-1/2">
              <span className="desktop:text-base largeTablet:text-sm largePhone:text-base smallPhone:text-sm text-font_one font-medium">
                ADDRESS
              </span>
              <p className="text-font_two desktop:text-sm largeTablet:text-xs largePhone:text-xs smallPhone:text-sm leading-6 mt-1">
                Mahamaya Mandir lane, Raika, Narwal, Jammu 180006
              </p>
            </div>
            <div>
              <span className="desktop:text-base largeTablet:text-sm largePhone:text-sm smallPhone:text-sm text-font_one font-medium">EMAIL</span>
              <p className="text-font_two desktop:text-sm largeTablet:text-xs largePhone:text-xs smallPhone:text-sm leading-6 mt-1">
                sajad@thechosenfield.org
              </p>
            </div>
            <div className="largeTablet:basis-5/12 mediumTablet:basis-1/2 largePhone:basis-1/2 smallPhone:basis-1/2">
              <span className="desktop:text-base largeTablet:text-sm largePhone:text-sm smallPhone:text-sm text-font_one font-medium">PHONE</span>
              <p className="text-font_two desktop:text-sm largeTablet:text-xs largePhone:text-xs smallPhone:text-sm leading-6 mt-1">
                +91-7051144137
              </p>
            </div>
          </div>
          <form
            className="flex flex-col space-y-3"
            onSubmit={(e) => submitForm(e)}
          >
            <input
              className="border-[1px] border-gray desktop:p-2 largeTablet:p-1 largePhone:p-2 smallPhone:p-1 rounded-sm text-font_two desktop:hover:font-medium smallPhone:hover:font-normal hover:border-primary focus:font-medium focus:border-primary"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="border-[1px] border-gray desktop:p-2 largeTablet:p-1 largePhone:p-2 smallPhone:p-1 rounded-sm text-font_two desktop:hover:font-medium smallPhone:hover:font-normal hover:border-primary focus:font-medium focus:border-primary"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="border-[1px] border-gray desktop:p-2 largeTablet:p-1 largePhone:p-2 smallPhone:p-1 rounded-sm text-font_two desktop:hover:font-medium smallPhone:hover:font-normal hover:border-primary focus:font-medium focus:border-primary"
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className="border-[1px] border-gray desktop:p-2 largeTablet:p-1 largePhone:p-2 smallPhone:p-1 rounded-sm text-font_two desktop:hover:font-medium smallPhone:hover:font-normal hover:border-primary focus:font-medium focus:border-primary"
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Write message here"
              required
            ></textarea>
            <div className="flex items-center">
              <button className="text-white bg-primary self-start desktop:text-lg largeTablet:text-base mediumTablet:text-lg largePhone:text-base smallPhone:text-sm font-medium desktop:py-3 largeTablet:py-2 mediumTablet:py-3 largePhone:py-2 smallPhone:py-2 desktop:px-8 largeTablet:px-6 mediumTablet:px-8 largePhone:px-6 smallPhone:px-5 rounded mr-5 transition ease-in-out delay-150 hover:bg-[#19a095]">
                Send Message
              </button>
              {loading && (<div className="desktop:w-10 largeTablet:w-8 mediumTablet:w-10 largePhone:w-8 smallPhone:w-6 desktop:h-10 largeTablet:h-8 mediumTablet:h-10 largePhone:h-8 smallPhone:h-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><radialGradient id="a12" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stopColor="#1EB2A6"></stop><stop offset=".3" stopColor="#1EB2A6" stopOpacity=".9"></stop><stop offset=".6" stopColor="#1EB2A6" stopOpacity=".6"></stop><stop offset=".8" stopColor="#1EB2A6" stopOpacity=".3"></stop><stop offset="1" stopColor="#1EB2A6" stopOpacity="0"></stop></radialGradient><circle transform-origin="center" fill="none" stroke="url(#a12)" strokeWidth="23" strokeLinecap="round" strokeDasharray="200 1000" strokeDashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="#1EB2A6" strokeWidth="23" strokeLinecap="round" cx="100" cy="100" r="70"></circle></svg>
              </div>)}
              {success && (<i className="fa-solid fa-circle-check desktop:text-3xl largeTablet:text-2xl mediumTablet:text-3xl largePhone:text-2xl smallPhone:text-xl text-primary"></i>)}
            </div>
          </form>
          <div>
            <h4 className="desktop:text-xl largeTablet:text-lg largePhone:text-xl smallPhone:text-lg text-font_one font-medium mb-2">
              Follow us here
            </h4>
            <div className="largePhone:space-x-5 smallPhone:space-x-2 desktop:text-base largeTablet:text-sm largePhone:text-base smallPhone:text-sm font-medium text-primary">
              <NavLink to="https://www.youtube.com/@TheChosenField">
                Youtube
              </NavLink>
              <NavLink to="http://www.instagram.com/_silentplay">
                Instagram
              </NavLink>
              <NavLink to="https://twitter.com/qureshisajjad21">
                Twitter
              </NavLink>
              <NavLink to="http://www.quora.com/profile/Sajjad-Qureshi-13?ch=2&oid=246599219&srid=hJROR&target_type=user">
                Quora
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
