const Footer = () => {
  return (
    <div className='w-screen flex flex-col items-center justify-center my-4'>
      <p>
        Built by
        <a
          href='https://twitter.com/Charmingdc01'
          target='_blank'
          className='text-border underline mx-2'
        >
          @Charmingdc01
        </a>
      </p>

      <p> {new Date().getFullYear()} SafeWords </p>
    </div>
  );
};

export default Footer;
