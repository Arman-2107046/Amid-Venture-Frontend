import ContactForm from "../components/ContactComponents/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Navbar />

      <header className="relative h-[70vh] overflow-hidden bg-white text-slate-900">
        <div className="absolute top-0 left-0 z-20 w-full h-24 pointer-events-none bg-gradient-to-b from-white/60 to-transparent" />

        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.4]"
          style={{ backgroundImage: "url('/ContactImages/contact-hero.jpg')" }}
          aria-label="Bangladesh textile production"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate/70 to-gray/90" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-start justify-end h-full p-2 text-left text-stone-200 sm:p-10 lg:p-20"
        >
          <h1 className="mb-4 text-3xl font-extralight sm:text-4xl lg:text-5xl font-dmSerifText">
            Get In Touch With <br />{" "}
            <span className="uppercase">amid venture</span>
          </h1>
          <p className="max-w-lg text-base font-light leading-relaxed sm:max-w-xl sm:text-lg lg:max-w-2xl lg:text-xl">
            Whether you have a question, proposal, or just want to connect, send
            us a message and we’ll get back to you shortly.
          </p>
        </motion.div>
      </header>

      <section className="bg-stone-50">
        <div className="max-w-3xl px-4 py-10 mx-auto text-center sm:px-8 md:px-16 lg:px-24 xl:px-32 md:pt-[4rem]">
          <h2 className="text-3xl font-light text-stone-800 sm:text-4xl md:text-5xl font-dmSerifText">
            Partner With Us
          </h2>
          <p className="mt-4 text-base text-stone-800 sm:text-lg">
            Whether it’s fashion, food, real estate, or digital solutions. We
            are always open to new possibilities.
          </p>
        </div>
      </section>

      <section>
        <ContactForm />
      </section>

      {/* location  */}
      <section className="px-6 py-20 border-t border-gray-200 bg-stone-100">
        <div className="grid items-center grid-cols-1 gap-12 mx-auto max-w-7xl md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-light text-stone-800 md:text-4xl font-dmSerifText">
              Get In Touch{" "}
            </h3>
            <p className="text-lg leading-relaxed text-stone-600">
              At Amid Venture, we’re committed to building strategic
              partnerships. Reach out to explore how we can create lasting value
              together.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-slate-900" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-medium text-gray-800">
                    contact@amidventure.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-slate-900" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-lg font-medium text-gray-800">
                    +880 1611-999999, +880 1309-888888
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-slate-900" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <address className="text-lg not-italic font-medium text-gray-800">
                    <div className="space-y-10 text-sm text-gray-800">
                      <div>
                        <h3 className="mb-1 font-semibold uppercase">
                          Bangladesh
                        </h3>
                        <p>Road 9, Sector 4, Uttara, Dhaka, Bangladesh.</p>
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold uppercase">Spain</h3>
                        <p>Calle de la Luna, 10, 28004 Madrid, Spain</p>
                      </div>
                    </div>
                  </address>
                </div>
              </div>
            </div>

            {/* <div className="mt-6 text-left">
              <p className="text-sm text-gray-500">Address</p>
              <address className="text-lg not-italic font-medium text-gray-800">
                Uttara sector 13, Road- 17
                <br />
                Dhaka, Bangladesh
              </address>
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full h-[350px] rounded-xl overflow-hidden shadow-lg border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6299.7789810820705!2d90.39812068957374!3d23.863337376070422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c428a8551d1d%3A0xd999099c31b9b1e!2sSector%204%2C%20Dhaka%201230!5e1!3m2!1sen!2sbd!4v1754333661814!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of our Office"
              className="w-full h-full"
            ></iframe>

            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6299.364249616243!2d90.38324473957482!3d23.87186252540126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c41746c7628b%3A0x909d6a0f5cebfe8f!2sSector-13%2C%20Dhaka%201230!5e1!3m2!1sen!2sbd!4v1753015638921!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of our Office"
              className="w-full h-full"
            ></iframe> */}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
