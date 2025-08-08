import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {motion} from 'framer-motion'

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen text-stone-800">

<Helmet>
  <title>Privacy Policy | Amid Venture</title>
  <meta
    name="description"
    content="Read Amid Venture’s Privacy Policy to learn how we collect, use, and protect your personal information with transparency and care."
  />
  <link rel="canonical" href="https://www.amidventure.com/privacy-policy" />
  <link rel="icon" type="image/webp" href="/amid-crop2.webp" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Privacy Policy | Amid Venture" />
  <meta
    property="og:description"
    content="Learn about Amid Venture’s commitment to protecting your privacy and personal data."
  />
  <meta property="og:url" content="https://www.amidventure.com/privacy-policy" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.amidventure.com/amid-crop2.webp" />

  {/* Twitter */}
  <meta name="twitter:title" content="Privacy Policy | Amid Venture" />
  <meta
    name="twitter:description"
    content="Read how Amid Venture protects your personal data and respects your privacy."
  />
  <meta name="twitter:image" content="https://www.amidventure.com/amid-crop2.webp" />
  <meta name="twitter:card" content="summary_large_image" />
</Helmet>

      
      {/* Navbar */}
      <Navbar />

  {/* HERO SECTION */}
  <header className="relative h-[70vh] overflow-hidden text-stone-800 bg-slate-200 font-dmSerifText">
        <div className="absolute inset-0 bg-cover bg-center brightness-[0.4]" />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate/70 to-gray/90" />
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center font-dm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >

          <motion.h1
            className="space-y-1 text-4xl sm:text-7xl lg:text-8xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div>PRIVACY POLICY</div>
            {/* <div>WORLD</div> */}
          </motion.h1>
        </motion.div>
      </header>




      {/* Main Content */}
      <main className="flex-grow max-w-4xl px-6 py-12 mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-stone-900">Privacy Policy</h1>

        <p className="mb-6 text-stone-700">
          At AMID Venture, we are committed to safeguarding your privacy. This
          Privacy Policy explains how we collect, use, and protect your personal
          information when you visit our website or interact with our services.
        </p>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold text-stone-900">
            1. Information We Collect
          </h2>
          <ul className="space-y-2 list-disc list-inside text-stone-700">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, or any information you provide when contacting us or
              subscribing to our newsletter.
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, device
              information, and cookies.
            </li>
            <li>
              <strong>Usage Data:</strong> Pages visited, time spent, clicks, and
              referring sources.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold text-stone-900">
            2. How We Use Your Information
          </h2>
          <ul className="space-y-2 list-disc list-inside text-stone-700">
            <li>To operate and improve our website and services.</li>
            <li>
              To send you updates, newsletters, or respond to your inquiries.
            </li>
            <li>
              To ensure the security and integrity of our digital environment.
            </li>
            <li>
              For analytical purposes to better understand visitor behavior.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold text-stone-900">
            3. Sharing of Information
          </h2>
          <p className="text-stone-700">
            We do not sell or rent your personal data. We may share your
            information with trusted service providers who help us operate our
            website (such as email delivery, analytics, or hosting services), all
            under strict confidentiality agreements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold text-stone-900">
            4. Cookies & Tracking Technologies
          </h2>
          <p className="text-stone-700">
            We use cookies to personalize content, analyze traffic, and improve
            user experience. You can modify your browser settings to disable
            cookies if you prefer.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold text-stone-900">
            5. Data Security
          </h2>
          <p className="text-stone-700">
            We implement industry-standard security measures to protect your
            information. However, no method of transmission over the internet is
            100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold text-stone-900">
            6. Your Rights
          </h2>
          <p className="text-stone-700">
            Depending on your location, you may have the right to access,
            correct, or delete your personal data. To request changes or removal
            of your data, please contact us at:{" "}
            <a
              href="mailto:contact@amidventure.com"
              className="underline text-amber-600 hover:text-amber-700"
            >
              contact@amidventure.com
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold text-stone-900">
            7. Policy Updates
          </h2>
          <p className="text-stone-700">
            We may update this policy occasionally. Any changes will be posted on
            this page with a revised date. We encourage you to review it
            regularly.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-stone-900">
            8. Contact Us
          </h2>
          <p className="text-stone-700">
            For any questions regarding this policy or your data, please email us
            at{" "}
            <a
              href="mailto:contact@amidventure.com"
              className="underline text-amber-600 hover:text-amber-700"
            >
              contact@amidventure.com
            </a>{" "}
            or call us at +880 1711-790505.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
