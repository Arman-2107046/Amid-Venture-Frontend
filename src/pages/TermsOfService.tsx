import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {motion} from 'framer-motion'

const TermsOfService = () => {
  return (
    <div>
      <Navbar/>
      <header className="relative h-[70vh] overflow-hidden text-stone-800 bg-slate-200 font-dmSerifText">
        <div className="absolute inset-0 bg-cover bg-center brightness-[0.4]" />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate/70 to-gray/90" />
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center font-dm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* <motion.img
            src="/aboutImages/image.webp"
            alt="Cotton World Sourcing Logo"
            className="object-contain w-32 mb-8 sm:w-40 lg:w-48"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          /> */}
          <motion.h1
            className="space-y-1 text-4xl sm:text-7xl lg:text-8xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div>TERMS OF SERVICE</div>
            {/* <div>WORLD</div> */}
          </motion.h1>
        </motion.div>
      </header>


      <main className="flex-grow max-w-4xl px-6 py-12 mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-stone-900">Terms of Service</h1>

        <p className="mb-6 text-stone-700">
          By accessing and using the AMID Venture website, you agree to the following
          terms and conditions. Please read them carefully.
        </p>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold text-stone-900">1. Use of Website</h2>
          <p className="text-stone-700">
            You agree to use this website for lawful purposes only. You must not engage
            in any activity that interferes with or disrupts the website or its services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold text-stone-900">2. Contact Form</h2>
          <p className="text-stone-700">
            If you submit information through our contact form, you agree to provide
            accurate details. We will use your information only to respond to your
            inquiry and will not share it without your consent, as outlined in our{" "}
            <a href="/privacy-policy" className="underline text-amber-600 hover:text-amber-700">
              Privacy Policy
            </a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold text-stone-900">3. Intellectual Property</h2>
          <p className="text-stone-700">
            All content on this website, including text, images, and branding, is the
            property of AMID Venture unless otherwise stated. You may not copy,
            reproduce, or distribute any content without our written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold text-stone-900">4. Limitation of Liability</h2>
          <p className="text-stone-700">
            AMID Venture is not responsible for any damages or losses resulting from
            your use of this website. We do not guarantee that the website will be
            error-free or available at all times.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold text-stone-900">5. Changes to Terms</h2>
          <p className="text-stone-700">
            We may update these Terms of Service at any time without notice. By
            continuing to use the website, you agree to the latest version of the terms.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-stone-900">6. Governing Law</h2>
          <p className="text-stone-700">
            These terms are governed by the laws of Bangladesh. Any disputes must be
            resolved in the courts of Dhaka.
          </p>

          <p className="mt-4 text-stone-700">
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:contact@amidventure.com" className="underline text-amber-600 hover:text-amber-700">
              contact@amidventure.com
            </a>.
          </p>
        </section>
      </main>


      <Footer/>
    </div>
  )
}

export default TermsOfService
