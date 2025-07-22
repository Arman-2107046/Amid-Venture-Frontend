import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const About = () => {
  return (
    <div>
    <Navbar />

    <header className="relative h-[90vh] overflow-hidden bg-white font-dmSerifText text-slate-900">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.4]"
        style={{ backgroundImage: "url('/bg-images/hero-img1.jpg')" }}
        aria-label="Bangladesh textile production"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate/70 to-gray/90" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="space-y-1 text-4xl sm:text-6xl lg:text-7xl">
          <div>About Page</div>

        </h1>

      </div>
    </header>

    <Footer/>
  </div>
  )
}

export default About
