import Caption from "./primitives/Caption";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule py-10">
      <div className="mx-auto flex max-w-shell flex-col gap-3 px-gutter md:flex-row md:items-center md:justify-between">
        <Caption as="p">Made in Pokhara.</Caption>
        <Caption as="p">© {year} Laxmi Lamichhane</Caption>
      </div>
    </footer>
  );
};

export default Footer;
