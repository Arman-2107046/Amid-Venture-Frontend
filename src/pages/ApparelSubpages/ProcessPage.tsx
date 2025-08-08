import { Helmet } from "react-helmet";
import ProcessBody from "../../components/ApparelComponents/ProcessBody";
import Footer from "../../components/Footer";
// import ApparelInquiry from "../../components/GlobalComponents/ApparelInquiry";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

const ProcessPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Our Apparel Sourcing Process | Premium Garment Production | Amid
          Venture
        </title>
        <meta
          name="description"
          content="Discover Amid Venture’s detailed apparel sourcing process—from design and fabric sourcing to ethical manufacturing, QC, and global delivery."
        />
        <link
          rel="canonical"
          href="https://www.amidventure.com/apparel/process"
        />
        <link rel="icon" type="image/webp" href="/amid-crop2.webp" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Our Apparel Sourcing Process | Premium Garment Production | Amid Venture"
        />
        <meta
          property="og:description"
          content="From design to delivery, Amid Venture ensures quality and transparency in every step of the apparel sourcing journey."
        />
        <meta
          property="og:url"
          content="https://www.amidventure.com/apparel/process"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.amidventure.com/ApparelImages/ProcessImages/phero1.webp"
        />

        {/* Twitter */}
        <meta
          name="twitter:title"
          content="Our Apparel Sourcing Process | Premium Garment Production | Amid Venture"
        />
        <meta
          name="twitter:description"
          content="Step into our process — from sourcing and ethical production to global delivery. Experience premium apparel manufacturing with Amid Venture."
        />
        <meta
          name="twitter:image"
          content="https://www.amidventure.com/ApparelImages/ProcessImages/phero1.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />

      <div className="absolute top-0 left-0 z-20 w-full h-24 pointer-events-none bg-gradient-to-b from-white/60 to-transparent" />

      <section className="relative h-[80vh] w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover blur-10"
          style={{
            backgroundImage: "url('/ApparelImages/ProcessImages/phero1.webp')",
          }}
        ></div>

        {/* Overlay */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 text-white bg-black/40">
          <h2 className="mb-4 text-3xl font-light md:text-5xl font-dmSerifText">
            Our Process
          </h2>
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
          <h2 className="mb-4 text-4xl font-light leading-tight tracking-tight md:text-5xl font-dmSerifText">
            Experience Our Premium Apparel Sourcing
          </h2>

          <p className="text-lg font-light leading-relaxed text-left md:text-xl text-slate-700">
            At <span className="font-semibold text-black">AMID APPAREL</span>,
            we specialize in delivering a seamless and premium apparel sourcing
            experience. From identifying high-quality fabrics to managing
            ethical manufacturing partners, we ensure every detail meets the
            highest standards. Our team navigates the complexities of global
            sourcing with precision — handling product development, compliance,
            and logistics with transparency and efficiency. Partner with us to
            gain a sourcing solution that prioritizes your brand’s quality,
            speed, and success.
          </p>
        </motion.div>
      </section>

      <section>
        <ProcessBody />
      </section>

      {/* 
      <section className="px-6 py-10 bg-white md:py-12">
      <div className="max-w-5xl mx-auto text-left">
        <h1 className="text-3xl font-light leading-snug text-gray-900 md:text-5xl md:leading-tight font-dmSerifText">
          Elevating Apparel Trade
          <br className="hidden md:block" /> with Craft, Culture, and Care
        </h1>
        <p className="mt-6 text-base font-light leading-relaxed text-gray-700 md:text-lg md:leading-loose">
          At <span className="font-medium text-gray-900">Amid Venture</span>, we
          specialize in premium <span className="text-gray-900">apparel solutions</span>,
          offering exquisite textiles, fashionwear, and home fabrics including{" "}
          <span className="text-gray-900">Curtains</span>,{" "}
          <span className="text-gray-900">Drapes</span>, and{" "}
          <span className="text-gray-900">custom garments</span>.
          <br />
          With a focus on style, sustainability, and global trends, our apparel
          trade integrates ethical sourcing and high-end production.
          <br />
          Whether you're a retailer, interior designer, or wholesaler, we are your{" "}
          <span className="font-medium text-gray-900">trusted partner</span> in
          curating collections that resonate globally.
        </p>
     
      </div>
    </section>

      <section className="px-6 py-24 text-center text-white bg-gray-500">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="mb-6 text-4xl font-light md:text-5xl font-dmSerifText">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="mb-8 text-lg font-light text-gray-100 md:text-xl">
            Our team is here to guide you through a seamless, high-quality
            sourcing experience. Reach out today and let’s build something
            extraordinary together.
          </p>
          <button className="px-8 py-4 font-semibold text-black transition duration-300 bg-white rounded-lg shadow-md hover:bg-gray-100">
            Inquire Now
          </button>
        </motion.div>
      </section> */}

      <Footer />
    </div>
  );
};

export default ProcessPage;
