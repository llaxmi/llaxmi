export default function Name({ text }: { text: string }) {
  const animation =
    "group-hover:-translate-y-4 ease-slow transition-all duration-500";
  const content = (
    <div className="inline-block text-3xl font-light uppercase leading-none">
      {text}
    </div>
  );

  return (
    <div className="group  relative w-full justify-end overflow-hidden p-4">
      <div className={`h-[10px] overflow-hidden delay-200 ${animation}`}>
        {content}
      </div>

      <div
        className={`font-poppins h-[10px] overflow-hidden delay-75 ${animation}`}
      >
        {content}
      </div>
      <div className={animation}>{content}</div>
    </div>
  );
}
