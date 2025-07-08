import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import Footer from "@/components/landing/Footer";

const LandingPage = () => {
  return (
    <div className='w-screen bg-custom bg-contain'>
      <header>
        <Navbar />
      </header>

      <main className='w-screen flex flex-col gap-4 pt-2 pb-8 px-[3%]'>
        <HeroSection />
        <FeaturesSection />

        <div className='w-full flex justify-center py-4 px-[5%] my-6'>
          <h2 className='text-center'>
            Client-Side Encryption. Nothing leaves your browser.
          </h2>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LandingPage;
