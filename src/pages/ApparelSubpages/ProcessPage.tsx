import ProcessBody from "../../components/ApparelComponents/ProcessBody";
import Footer from "../../components/Footer";
import ApparelInquiry from "../../components/GlobalComponents/ApparelInquiry";
import Navbar from "../../components/Navbar";
import {motion} from 'framer-motion'

const ProcessPage = () => {



  
  return (
    <div>
      <Navbar />

      <div className="absolute top-0 left-0 z-20 w-full h-24 pointer-events-none bg-gradient-to-b from-white/60 to-transparent" />

      <section className="relative h-[80vh] w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover blur-10"
          style={{
            backgroundImage: "url('/ApparelImages/ProcessImages/phero1.jpg')",
          }}
        ></div>

        {/* Overlay */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 text-white bg-black/40">
          <h2 className="mb-4 text-3xl md:text-5xl">Our Process</h2>
          <p className="max-w-2xl mb-6 font-light text-md md:text-lg">
            From design development and fabric sourcing to production, quality
            control, and global shipping our process ensures that every garment
            meets the highest standards of craftsmanship, sustainability, and
            efficiency.{" "}
          </p>
        </div>
      </section>

      <section className="px-6 py-24 bg-white text-slate-900 mt-[4rem]">
  <motion.div
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="max-w-4xl mx-auto text-left"
  >
    <h2 className="mb-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl font-dmSerifText">
      Experience Our Premium Apparel Sourcing
    </h2>

    <p className="text-lg font-light leading-relaxed text-left md:text-xl text-slate-700">
      At <span className="font-semibold text-black">AMID APPAREL</span>, we specialize in delivering a seamless and premium apparel sourcing experience. 
      From identifying high-quality fabrics to managing ethical manufacturing partners, we ensure every detail meets the highest standards. 
      Our team navigates the complexities of global sourcing with precision — handling product development, compliance, and logistics with transparency and efficiency. 
      Partner with us to gain a sourcing solution that prioritizes your brand’s quality, speed, and success.
    </p>
  </motion.div>
</section>




<section>
    <ProcessBody/>
</section>

<section className="px-6 py-24 text-center text-white bg-gray-500">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="mb-6 text-4xl font-semibold md:text-5xl font-roboto">
          Ready to Start Your Sourcing Journey?
        </h2>
        <p className="mb-8 text-lg font-light text-gray-100 md:text-xl">
          Our team is here to guide you through a seamless, high-quality sourcing experience. Reach out today and let’s build something extraordinary together.
        </p>
        <button className="px-8 py-4 font-semibold text-black transition duration-300 bg-white rounded-lg shadow-md hover:bg-gray-100">
          Inquire Now
        </button>
      </motion.div>
    </section>


    <section>
      <ApparelInquiry/>
    </section>
      <Footer />
    </div>
  );
};

export default ProcessPage;
