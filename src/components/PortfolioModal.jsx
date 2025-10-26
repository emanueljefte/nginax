import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination} from "swiper/modules";
import projects from "../repository/projectsData";
import { useEffect, useState} from "react";

export default function PortfolioModal({ isOpen, onClose}) {
  const [selectedSection, setSelectedSection] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
  } else {
      document.body.style.overflow = "auto";
  }
  
    // Limpeza ao desmontar
    return () => {
      document.body.style.overflow = "auto";
  };
  }, [isOpen]);
  
  if (!isOpen) return null;

  const sections = [...new Set(projects.map((p) => p.section))];

  // Imagens a exibir
  const imagesToShow = selectedSection
? projects
.filter((p) => p.section === selectedSection)
.flatMap((p) => p.images.map((img) => ({ img, title: p.title})))
: projects.flatMap((p) => p.images.map((img) => ({ img, title: p.title})));

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-full h-full p-4 overflow-y-auto">
        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center"
            onClick={() => setLightboxImage(null)}
>
            <img
              src={lightboxImage}
              alt="Imagem ampliada"
              className="max-w-full max-h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold cursor-pointer"
              onClick={() => setLightboxImage(null)}
>
              ✕
            </button>
          </div>
)}

        {/* Botões de filtro */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          <button
            onClick={() => setSelectedSection(null)}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
!selectedSection? "bg-white text-black": "bg-gray-700 text-white"
}`}
>
            Todos
          </button>
          {sections.map((sec, i) => (
            <button
              key={i}
              onClick={() => setSelectedSection(sec)}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                selectedSection === sec
? "bg-white text-black"
: "bg-gray-700 text-white"
}`}
>
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
))}
        </div>

        {/* Carrossel de imagens */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true}}
          spaceBetween={30}
          slidesPerView={1}
          className="w-full max-w-screen-lg h-[70vh]"
>
          {imagesToShow.map(({ img, title}, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center text-white">
                <img
                  src={img}
                  alt={`${title} ${index + 1}`}
                  className="w-full max-h-[70vh] object-contain rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => setLightboxImage(img)}
                />
              </div>
            </SwiperSlide>
))}
        </Swiper>

        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl font-bold cursor-pointer"
>
          ✕
        </button>
      </div>
      </div>
);
}