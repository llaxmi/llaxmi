import { Award, Calendar, X } from "lucide-react";
import { useState } from "react";

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

  return (
    <div className="flex flex-col items-start w-full">
      <div className="overflow-hidden flex justify-center">
        <img
          src={imageUrl}
          alt={title}
          className="w-min h-min object-contain p-8 cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <div className="w-full px-8 -mt-4">
        <h3 className="text-xl font-bold text-pri font-marcellus">{title}</h3>
        <div className="flex items-center mt-1">
          <Award className="w-4 h-4 mr-2 text-pri" />
          <p className="text-sm text-pri">{issuer}</p>
        </div>
        <div className="flex items-center mt-1">
          <Calendar className="w-4 h-4 mr-2 text-pri" />
          <p className="text-sm text-pri">{date}</p>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-white rounded-lg shadow-lg max-w-3xl">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
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
