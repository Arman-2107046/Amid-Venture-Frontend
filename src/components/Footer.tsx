// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="px-8 py-16 bg-stone-50 text-stone-800 lg:px-24">
//       <div className="flex flex-col justify-between gap-12 mx-auto max-w-7xl lg:flex-row">
//         {/* Logo & Description */}
//         <div className="flex flex-col max-w-sm space-y-4">
//           <img
//             src="/amid-crop2.png"
//             alt="AMID Logo"
//             className="w-36 filter brightness-95"
//           />
//           <p className="leading-relaxed text-stone-600">
//             AMID is a pioneer in sustainable business solutions, delivering
//             excellence with integrity and innovation.
//           </p>

//           {/* Social Icons */}
//           <div className="flex mt-4 space-x-6">
//             {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
//               <a
//                 key={idx}
//                 href="#"
//                 aria-label="Social Link"
//                 className="transition-colors duration-300 text-stone-500 hover:text-amber-500"
//               >
//                 <Icon size={24} />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="flex flex-col gap-12 text-sm font-semibold sm:flex-row sm:gap-24">
//           <div>
//             <h3 className="mb-4 text-lg text-stone-900">Company</h3>
//             <ul className="space-y-3 text-stone-600">
//               {["Home", "About Us", "Business", "Sustainability"].map((l) => (
//                 <li key={l}>
//                   <a href={`/${l.toLowerCase().replace(" ", "")}`} className="transition hover:text-amber-500">
//                     {l}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="mb-4 text-lg text-stone-900">Legal</h3>
//             <ul className="space-y-3 text-stone-600">
//               {["Privacy Policy", "Terms of Service", "Contact"].map((l) => (
//                 <li key={l}>
//                   <a href={`/${l.toLowerCase().replace(" ", "")}`} className="transition hover:text-amber-500">
//                     {l}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </nav>

//         {/* Newsletter Subscription */}
//         <div className="flex flex-col max-w-sm space-y-4">
//           <h3 className="text-lg font-semibold text-stone-900">Subscribe</h3>
//           <p className="text-sm text-stone-600">
//             Get the latest news and updates right in your inbox.
//           </p>
//           <form className="flex">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="flex-grow px-4 py-3 bg-white border border-stone-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500"
//               required
//             />
//             <button
//               type="submit"
//               className="px-6 font-semibold text-white transition-colors duration-300 bg-amber-500 rounded-r-md hover:bg-amber-600"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Bottom copyright */}
//       <div className="pt-6 mt-12 text-xs text-center border-t select-none text-stone-500 border-stone-200">
//         &copy; {new Date().getFullYear()} AMID. All rights reserved.
//       </div>
//     </footer>
//   );
// }

import { Facebook, Linkedin, Youtube, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-50 text-stone-800"
>
      <div className=""
      
        style={{backgroundColor: '#fafaf9',
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/light-wool.png")',}}
      >
        <div className="grid grid-cols-1 gap-12 px-6 py-16 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-4">
          {/* Mission Section */}
          <div className="col-span-2 space-y-6">
            <h2 className="text-2xl font-bold uppercase">
              Crafting Legacies for Generations
            </h2>
            <p className="text-stone-700">
              Together, we challenge convention and create opportunities that
              shape a brighter, more sustainable world.
            </p>

            <div className="flex gap-8 text-sm font-medium">
              <div>
                <h4 className="mb-1 text-xs font-bold tracking-wider uppercase text-stone-500">
                  General Contact
                </h4>
                <div className="flex items-center gap-2 font-semibold">
                  <Phone size={14} />
                  +88 09612 677 677
                </div>
              </div>

              <div>
                <h4 className="mb-1 text-xs font-bold tracking-wider uppercase text-stone-500">
                  Send a message
                </h4>
                <div className="flex items-center gap-2">
                  <Mail size={14} />
                  <a
                    href="mailto:hello@amid.com"
                    className="font-semibold hover:text-amber-500"
                  >
                    contact@amidventure.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="font-bold tracking-wide uppercase text-stone-700">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-stone-600">
              {["News", "Career", "Businesses", "Sustainability"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="transition-colors hover:text-amber-500"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h3 className="font-bold tracking-wide uppercase text-stone-700">
              Useful Links
            </h3>
            <ul className="space-y-3 text-sm text-stone-600">
              {["Media", "Sponsorship", "Contact", "Sitemap"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition-colors hover:text-amber-500"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-stone-200">
        <div className="flex flex-col items-center justify-between gap-6 px-6 py-8 mx-auto max-w-7xl md:flex-row">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center gap-4 text-sm md:flex-row text-stone-500">
            <img
              src="/amid-crop2.png"
              alt="AMID Logo"
              className="w-28 grayscale"
            />
            <p className="text-xs">
              &copy; {new Date().getFullYear()} AMID. All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-stone-500">
            {[Facebook, Linkedin, Youtube].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                aria-label="Social"
                className="transition hover:text-amber-500"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
