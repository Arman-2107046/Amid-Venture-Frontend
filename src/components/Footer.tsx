

import { Facebook, Linkedin, Youtube, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-50 text-stone-800">
      {/* Upper Section with background texture */}
      <div
        style={{
          backgroundColor: "#fafaf9",
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/light-wool.png")',
        }}
      >
        <div className="grid grid-cols-1 gap-12 px-6 py-16 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-4">
          {/* Mission Section */}
          <div className="col-span-1 space-y-6 md:col-span-2 max-w-[30rem]">
            <h2 className="text-2xl font-bold leading-tight uppercase">
              Crafting Legacies for Generations
            </h2>
            <p className="text-sm text-stone-700 md:text-base">
              Together, we challenge convention, and craft
              innovative solutions that redefine the textile industry. With a
              deep commitment to quality, sustainability, and ethical practices,
              we shape a brighter world.
            </p>

            <div className="flex flex-col gap-6 text-sm font-medium sm:flex-row sm:gap-12">
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
                    href="mailto:contact@amidventure.com"
                    className="font-semibold break-all hover:text-amber-500"
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
              {["Home","About Us", "Business", "Sustainability", "Contact"].map(
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
              {["Terms Of Service", "Privacy Policy","Sitemap"].map((item) => (
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

      {/* Bottom Bar */}
      <div className="border-t border-stone-200 bg-stone-100">
        <div className="flex flex-col items-center justify-between gap-6 px-6 py-8 mx-auto text-sm max-w-7xl md:flex-row">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left text-stone-500">
            <img
              src="/amid-crop2.png"
              alt="AMID Logo"
              className="w-24 grayscale"
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
