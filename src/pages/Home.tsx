import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
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
            <div>Home Page</div>
          </h1>
        </div>
      </header>

      {/* <div style={{
  backgroundColor: '#929da1',
  backgroundImage: 'url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png")',
  width: '100%', // Ensure the div takes up the full width
  height: '100vh', // Set a height for the div (e.g., full viewport height)
}}>
  
</div> */}



      <Footer />
    </div>
  );
};

export default Home;
