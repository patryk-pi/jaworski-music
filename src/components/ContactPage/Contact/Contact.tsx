import { text } from "stream/consumers";
import ContactOption from "../ContactOption/ContactOption";
import Envelope from "../Icons/Envelope";
import Phone from "../Icons/Phone";
import Instagram from "../Icons/Instagram";

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__container">
                <ContactOption
                    icon={<Phone className="contactoption__icon" />}
                    text="+48 730 722 030"
                    link={"tel:+48740722030"}
                />
                <ContactOption
                    icon={<Envelope className="contactoption__icon" />}
                    text="djaworskimusic@gmail.com"
                    link={"mailto:djawroskimusic@gmail.com"}
                />

                <ContactOption
                    icon={<Instagram className="contactoption__icon" />}
                    text="jaworskimusic"
                    link={"https://instagram.com/jaworskimusic"}
                />
            </div>
        </section>
    );
};
export default Contact;
