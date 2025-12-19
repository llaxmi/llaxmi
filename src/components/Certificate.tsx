import { Award, Calendar, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface CertificateProps {
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
}

export function Certificate({
  title,
  issuer,
  date,
  imageUrl,
}: CertificateProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleClose]);

  return (
    <div className="flex flex-col items-start w-full">
      <div className="overflow-hidden flex justify-center">
        <img
          src={imageUrl}
          alt={title}
          className="w-min h-min object-contain p-8 cursor-pointer"
          onClick={handleOpen}
        />
      </div>
      <div className="w-full px-8 -mt-4">
        <h3 className="text-xl font-bold text-white font-marcellus">{title}</h3>
        <div className="flex items-center mt-1">
          <Award className="w-4 h-4 mr-2 text-white" />
          <p className="text-sm text-white">{issuer}</p>
        </div>
        <div className="flex items-center mt-1">
          <Calendar className="w-4 h-4 mr-2 text-white" />
          <p className="text-sm text-white">{date}</p>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={handleClose}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 z-10"
              onClick={handleClose}
              aria-label="Close certificate view"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
}
