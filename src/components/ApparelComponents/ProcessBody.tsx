import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const steps = [
  {
    src: "/ApparelImages/ProcessImages/inquiry.webp",
    title: "Step 1: Inquiry",
    emoji: "📝",
    content:
      "Begin your journey with us by reaching out through our inquiry form or contacting us directly. Our dedicated team is ready to assist you with any questions and guide you through our premium product offerings.",
    button: true,
  },
  {
    src: "/ApparelImages/ProcessImages/sample.webp",

    title: "Step 2: Sample & Quotation",
    emoji: "📦",
    content:
      "Based on your requirements, we provide product samples and a detailed price quotation, including FOB/CNF terms. Our goal is to ensure you have all the information needed to make an informed decision.",
    button: false,
  },
  {
    src: "/ApparelImages/ProcessImages/confirmation.webp",

    title: "Step 3: Order Confirmation",
    emoji: "🤝",
    content:
      "Once you approve the samples and quotation, we finalize the purchase order and agree on payment terms. This step ensures clarity and mutual agreement before proceeding.",
    button: false,
  },
  {
    src: "/ApparelImages/ProcessImages/quality.webp",

    title: "Step 4: Sourcing & Quality Control",
    emoji: "🏭",
    content:
      "We source products from trusted mills and factories, ensuring that each item meets our stringent quality-control standards. Your satisfaction is our priority.",
    button: false,
  },
  {
    src: "/ApparelImages/ProcessImages/shipping.webp",

    title: "Step 5: Shipping & Delivery",
    emoji: "🚚",
    content:
      "We handle all necessary documentation and ship your order according to the agreed Incoterms. Our logistics team ensures timely and secure delivery.",
    button: false,
  },
  {
    src: "/ApparelImages/ProcessImages/support.webp",

    title: "Step 6: After-Sales Support",
    emoji: "📧",
    content:
      "Our relationship doesn't end at delivery. We stay in touch for feedback, reorders, or any support you may need. Your success is our success.",
    button: false,
  },
];

export default function ProcessBody() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {steps.map((step, i) => {
        const isEven = i % 2 === 0;
        const bgGradient = isEven
          ? "from-gray-50 to-stone-100"
          : "from-stone-100 to-gray-50";

        return (
          <section
            key={i}
            className={`flex items-center justify-between min-h-[60vh] bg-gradient-to-r ${bgGradient} px-6 py-[5rem]`}
          >
            <div className="flex flex-col items-center max-w-6xl mx-auto md:flex-row">
              {/* Text Side with Animation */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`w-full md:w-1/2 p-6 ${
                  isEven ? "md:order-1" : "md:order-2"
                }`}
              >
                <h2 className="mb-4 text-3xl font-light text-gray-800 font-dmSerifText">
                  {step.emoji} {step.title}
                </h2>
                <p className="mb-6 text-lg font-light text-gray-600">
                  {step.content}
                </p>
              </motion.div>

              {/* Image Side with Animation */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`w-full md:w-1/2 p-6 flex justify-center ${
                  isEven ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="flex items-center justify-center w-full bg-gray-200 rounded-lg h-96">
                  {/* <span className="text-gray-500">Image Placeholder</span> */}
                  <img
                    src={step.src}
                    alt="image"
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}
    </>
  );
}
