import { NavLink } from "react-router-dom";
import Brand from "../../components/Header/Brand/Brand";
import Header from "../../components/Header/Header";

const Contact = () => {
    return (
        <>
            <section>
                <Header bgImage="cta3.png">
                    <Brand />
                </Header>
            </section>

            <div style={{ boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px' }} className="flex mx-40 my-20 rounded-md">
                <div>
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16607.270911461965!2d74.88130787689062!3d32.727931860710115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e837176760ec9%3A0x5d1ce12ca148b964!2sMaha%20Maya%20Temple!5e0!3m2!1sen!2sin!4v1698413435566!5m2!1sen!2sin" width="600" height="750px" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="space-y-5 p-10">
                    <h2 className="text-3xl text-font_one font-medium">Contact Us</h2>
                    <p className="text-base text-font_two opacity-80">We're open for any suggestion or just to have a chat</p>
                    <div className="flex space-x-5">
                        <div className="flex-1">
                            <span className="text-base text-font_one font-medium">ADDRESS</span>
                            <p className="text-font_two text-sm leading-6 mt-2">Mahamaya Mandir lane, Raika, Narwal, Jammu 180006</p>
                        </div>
                        <div className="flex-1">
                            <span className="text-base text-font_one font-medium">EMAIL</span>
                            <p className="text-font_two text-sm leading-6 mt-2">sajjadqureshi326@gmail.com</p>
                        </div>
                        <div className="flex-1">
                            <span className="text-base text-font_one font-medium">PHONE</span>
                            <p className="text-font_two text-sm leading-6 mt-2">+91-7051144137</p>
                        </div>
                    </div>
                    <form className="flex flex-col space-y-3">
                        <input className="border-[1px] border-gray p-2 rounded-sm text-font_two hover:font-medium hover:border-primary focus:font-medium focus:border-primary" type="text" name="name" placeholder="Name" />
                        <input className="border-[1px] border-gray p-2 rounded-sm text-font_two hover:font-medium hover:border-primary focus:font-medium focus:border-primary" type="email" name="email" placeholder="Email" />
                        <input className="border-[1px] border-gray p-2 rounded-sm text-font_two hover:font-medium hover:border-primary focus:font-medium focus:border-primary" type="text" name="subject" placeholder="Subject" />
                        <textarea className="border-[1px] border-gray p-2 rounded-sm text-font_two hover:font-medium hover:border-primary focus:font-medium focus:border-primary" name="message" id="" cols="30" rows="5" placeholder="Write message here"></textarea>
                        <button className="text-white bg-primary self-start text-lg font-medium py-3 px-8 rounded mr-5 transition ease-in-out delay-150 hover:bg-[#19a095]">Send Message</button>
                    </form>
                    <div>
                        <h4 className="text-xl text-font_one font-medium mb-2">Follow us here</h4>
                        <div className="space-x-5 text-base font-medium text-primary">
                            <NavLink to="https://www.youtube.com/@TheChosenField">Youtube</NavLink>
                            <NavLink to="http://www.instagram.com/_silentplay">Instagram</NavLink>
                            <NavLink to="https://twitter.com/qureshisajjad21">Twitter</NavLink>
                            <NavLink to="http://www.quora.com/profile/Sajjad-Qureshi-13?ch=2&oid=246599219&srid=hJROR&target_type=user">Quora</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;