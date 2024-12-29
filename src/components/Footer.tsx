const Footer = () => {
  return (
    <footer className="p-2 sm:p-6 lg:p-8 flex justify-center lg:justify-between items-center">
      <div className="text-center">
        <p className="font-normal font-pixel text-base sm:text-lg lg:text-xl text-tertiary">
          © 2024 LYX. All Rights Reserved
        </p>
      </div>
      {/* Uncomment this button if you need a scroll-to-top functionality */}
      {/* <button className="text-tertiary mt-4 lg:mt-0 mx-auto lg:mx-0 text-sm font-light flex items-center">
        <FaArrowUp size={20} />
      </button> */}
    </footer>
  );
};

export default Footer;
