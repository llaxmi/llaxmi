import { Award, Calendar } from "lucide-react";

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
  return (
    <div className="flex flex-col items-start w-full">
      <div className="overflow-hidden flex justify-center">
        <img
          src={imageUrl}
          alt={title}
          className="w-min h-min object-contain p-8"
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
    </div>
  );
}
