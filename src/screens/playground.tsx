import PageTitle from "../components/PageTitle";

export const Playground = () => {
  return (
    <div
      id="playground"
      className="flex flex-col items-center justify-center mt-2"
    >
      <PageTitle title="Playground" />
      <p className="text-gray-300 font-marcellus text-lg md:text-xl mb-4">
        Fun projects coming soon. <span className="animate-pulse">🚀</span>
      </p>
    </div>
  );
};
