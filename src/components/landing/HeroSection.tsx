import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full h-[90vh] flex flex-col items-center justify-center gap-3 border border-input border-b-0 py-3 px-[4%]'>
      <h1 className='font-extrabold text-center text-2xl'>
        Say anything. Share anywhere. Unlock only with SafeWords.
      </h1>

      <p className='font-semibold text-center'>
        With SafeWords, encrypt any text using a password only you know. Get a
        secure base64 string you can share anywhere — decrypt it only with the
        right password. No servers. No tracking. No leaks. Just total control
        over your words.
      </p>

      <Button
        className='border-double border-[.2rem] mt-4'
        onClick={() => navigate("/home")}
      >
        Get Started
      </Button>
    </div>
  );
};

export default HeroSection;
