import { Linkedin, Facebook, Youtube } from "lucide-react";

export default function ContactBody() {
  return (
    <section className="relative max-w-full py-16 bg-white md:flex md:items-center md:gap-16 p-[10rem]"
    

    style={{

        backgroundColor: '#fff8f8',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png")',
        backgroundRepeat: 'repeat',
        // minHeight: '100vh',
        width: '100%',
        // padding: '2rem',

    }}
    >
      {/* Left Side */}
      <div className="max-w-lg md:flex-1">
        <h2 className="mb-10 text-4xl font-bold leading-tight">
          Get in Touch <br /> with Amid Venture
        </h2>

        <div className="space-y-10 text-sm text-gray-800">
          <div>
            <h3 className="mb-1 font-semibold uppercase">Bangladesh</h3>
            <p>
       Road 9, Sector 4, Uttara, Dhaka, Bangladesh.
            </p>
          </div>

          <div>
            <h3 className="mb-1 font-semibold uppercase">Spain</h3>
            <p>
            Calle de la Luna, 10, 28004 Madrid, Spain


            </p>
          </div>

          {/* <div>
            <h3 className="mb-1 font-semibold uppercase">Singapore</h3>
            <p>
              Robina Resources (Pte) Ltd. <br />
              Singapore Land Tower, 50 Raffles Place, Level 19, Room 08 <br />
              Singapore 048623
            </p>
          </div> */}
        </div>
      </div>

      {/* Right Side */}
      <div
        className="relative max-w-md p-8 mx-auto mt-16 bg-white md:mt-0 md:flex-1 bg-opacity-70 backdrop-blur-md rounded-xl"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/architect.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h3 className="mb-6 text-xl font-semibold">Quick Contacts</h3>
        <p className="mb-2">
          <span className="font-semibold">Hotline:</span> +09090 0909 09
        </p>
        <p className="mb-6">
          <span className="font-semibold">Email:</span> contact@amidventure.com
        </p>

        <div className="flex gap-4 mb-6">
          <button className="flex items-center gap-2 px-4 py-2 text-white transition bg-gray-700 rounded-lg hover:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"
              />
            </svg>
            Contact Us 
          </button>
          {/* <button className="flex items-center gap-2 px-4 py-2 text-white transition bg-gray-700 rounded-lg hover:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 12v1a5 5 0 0010 0v-1a5 5 0 00-10 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v2m0 4v2" />
            </svg>
            Media Contact
          </button> */}
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 text-gray-800">
          <a
            href="#"
            aria-label="LinkedIn"
            className="p-2 transition bg-gray-300 rounded hover:bg-amber-500 hover:text-white"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="p-2 transition bg-gray-300 rounded hover:bg-amber-500 hover:text-white"
          >
            <Facebook size={18} />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="p-2 transition bg-gray-300 rounded hover:bg-amber-500 hover:text-white"
          >
            <Youtube size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
