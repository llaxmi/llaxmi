import MonoLabel from "./primitives/MonoLabel";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule py-10">
      <div className="mx-auto flex max-w-shell flex-col gap-3 px-gutter md:flex-row md:items-center md:justify-between">
        <MonoLabel as="p">
          Built with Passion.
        </MonoLabel>
        <MonoLabel as="p">© {year} Laxmi Lamichhane</MonoLabel>
      </div>
    </footer>
  );
};

export default Footer;
