import { Award, Calendar } from "lucide-react";
import { useRef, useState } from "react";

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
  const [previewOpen, setPreviewOpen] = useState(false);

  // Reference to modal container
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Close modal if clicked outside the modal
  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setPreviewOpen(false);
    }
  };

  return (
    <div className="group perspective flex flex-col items-start w-full">
      <div className="relative w-full transition-all duration-300 [transform-style:preserve-3d]">
        {/* Image container */}
        <div className="overflow-hidden flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="w-min h-min object-contain p-8 cursor-pointer"
            onClick={() => setPreviewOpen(true)} // Open image preview on click
          />
        </div>
      </div>

      {/* Certificate details */}
      <div className="w-full flex flex-col items-start mb-8 px-8 -mt-4">
        <h3 className="text-2xl font-bold text-pri font-marcellus">{title}</h3>
        <div className="flex items-center mt-1">
          <Award className="w-4 h-4 mr-2 text-pri" />
          <p className="text-sm text-pri">{issuer}</p>
        </div>
        <div className="flex items-center mt-1">
          <Calendar className="w-4 h-4 mr-2 text-pri" />
          <p className="text-sm text-pri">{date}</p>
        </div>
      </div>

      {/* Image Preview Modal */}
      {previewOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleClickOutside} // Close when clicking outside the modal
        >
          <div
            ref={modalRef}
            className="bg-white p-4 rounded-lg relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button
              onClick={() => setPreviewOpen(false)}
              className="absolute top-2 right-2 text-black text-2xl font-bold"
            >
              ×
            </button>
            <img
              src={imageUrl}
              alt={title}
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
