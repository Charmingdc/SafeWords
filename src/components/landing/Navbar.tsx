import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <nav>
      <div className='w-screen flex items-center justify-between py-4 px-[3%] border-b border-input'>
        <h1 className='font-extrabold text-xl'> SafeWords </h1>

        <a
          href='https://github.com/Charmingdc/SafeWords'
          target='_blank'
          className='w-fit flex items-center gap-2 font-bold py-1 px-3 border border-input rounded-3xl'
        >
          <Github
            width='6'
            height='6'
            className='w-8 h-8 p-2 border border-input rounded-2xl -ml-1'
          />
          Open
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
