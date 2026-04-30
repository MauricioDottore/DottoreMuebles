import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTimes } from 'react-icons/fa';

export default function Catalogo() {
    const [selectedImage, setSelectedImage] = useState(null);

    const categories = [
        {
            title: "Casa Hostal del Sol",
            description: "Proyecto residencial con diseño y mobiliario a medida.",
            images: [
                { src: "/assets/Obras realizadas/Casa nose/ESTUDIO DOTT I (CALIDAD WEB)-124.jpg", alt: "Casa Hostal del Sol - Imagen 1" },
                { src: "/assets/Obras realizadas/Casa nose/ESTUDIO DOTT I (CALIDAD WEB)-007.jpg", alt: "Casa Hostal del Sol - Imagen 2" },
                { src: "/assets/Obras realizadas/Casa nose/ESTUDIO DOTT I (CALIDAD WEB)-076.jpg", alt: "Casa Hostal del Sol - Imagen 3" },
                { src: "/assets/Obras realizadas/Casa nose/ESTUDIO DOTT I (CALIDAD WEB)-075.jpg", alt: "Casa Hostal del Sol - Imagen 4" }
            ]
        },
        {
            title: "Casa Country Aldea Del Lago",
            description: "Equipamiento completo para una residencia moderna y funcional.",
            images: [
                { src: "/assets/Obras realizadas/Casa Country Aldea del lago/20220426_114325.jpg", alt: "Casa Country Aldea Del Lago - Imagen 1" },
                { src: "/assets/Obras realizadas/Casa Country Aldea del lago/20220426_114911.jpg", alt: "Casa Country Aldea Del Lago - Imagen 2" },
                { src: "/assets/Obras realizadas/Casa Country Aldea del lago/20220426_115108.jpg", alt: "Casa Country Aldea Del Lago - Imagen 3" },
                { src: "/assets/Obras realizadas/Casa Country Aldea del lago/20220426_115210.jpg", alt: "Casa Country Aldea Del Lago - Imagen 4" },
                { src: "/assets/Obras realizadas/Casa Country Aldea del lago/20220426_115148.jpg", alt: "Casa Country Aldea Del Lago - Imagen 5" }
            ]
        },
        {
            title: "Departamento Rosario Centro",
            description: "Aprovechamiento del espacio con mobiliario elegante y contemporáneo.",
            images: [
                { src: "/assets/Obras realizadas/Departamento Rosario Centro/WhatsApp Image 2024-02-05 at 14.44.05 (2).jpeg", alt: "Departamento Rosario Centro - Imagen 1" },
                { src: "/assets/Obras realizadas/Departamento Rosario Centro/WhatsApp Image 2024-02-05 at 14.44.05.jpeg", alt: "Departamento Rosario Centro - Imagen 2" },
                { src: "/assets/Obras realizadas/Departamento Rosario Centro/20230830_140306.jpg", alt: "Departamento Rosario Centro - Imagen 3" },
                { src: "/assets/Obras realizadas/Departamento Rosario Centro/20230830_135937.jpg", alt: "Departamento Rosario Centro - Imagen 4" },
                { src: "/assets/Obras realizadas/Departamento Rosario Centro/20230811_132041.jpg", alt: "Departamento Rosario Centro - Imagen 5" }
            ]
        },
        {
            title: "Puerto España Salon de eventos",
            description: "Instalaciones de alto tránsito con acabados premium.",
            images: [
                { src: "/assets/Obras realizadas/Puerto España Eventos/20230808_125418.jpg", alt: "Puerto España Salon de eventos - Imagen 1" },
                { src: "/assets/Obras realizadas/Puerto España Eventos/20230808_125245.jpg", alt: "Puerto España Salon de eventos - Imagen 2" },
                { src: "/assets/Obras realizadas/Puerto España Eventos/20230808_125139.jpg", alt: "Puerto España Salon de eventos - Imagen 3" },
                { src: "/assets/Obras realizadas/Puerto España Eventos/20230808_125241.jpg", alt: "Puerto España Salon de eventos - Imagen 4" }
            ]
        },
        {
            title: "Quincho KCC",
            description: "Espacios sociales cálidos con la nobleza de la madera.",
            images: [
                { src: "/assets/Obras realizadas/Quincho KCC/PH QUINCHO CASA VIEW -4.jpg", alt: "Quincho KCC - Imagen 1" },
                { src: "/assets/Obras realizadas/Quincho KCC/PH QUINCHO CASA VIEW -5.jpg", alt: "Quincho KCC - Imagen 2" },
                { src: "/assets/Obras realizadas/Quincho KCC/PH QUINCHO CASA VIEW -7.jpg", alt: "Quincho KCC - Imagen 3" },
                { src: "/assets/Obras realizadas/Quincho KCC/PH QUINCHO CASA VIEW -12.jpg", alt: "Quincho KCC - Imagen 4" },
                { src: "/assets/Obras realizadas/Quincho KCC/PH QUINCHO CASA VIEW -18.jpg", alt: "Quincho KCC - Imagen 5" }
            ]
        }
    ];

    return (
        <div className="w-full pt-32 pb-24 transition-colors duration-300">
            <Helmet>
                <title>Colecciones | Dottore Muebles</title>
                <meta name="description" content="Explora nuestras colecciones exclusivas de muebles a medida, cocinas, vestidores y aberturas arquitectónicas." />
            </Helmet>

            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-24">
                    <h2 className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6">Obras Realizadas</h2>
                    <h1 className="text-4xl md:text-6xl font-serif text-gray-900 dark:text-white mb-6 font-light">
                        Colecciones <span className="italic">Privadas</span>
                    </h1>
                    <div className="h-px bg-gray-300 dark:bg-gray-800 w-24 mx-auto mb-8"></div>
                    <p className="text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto text-lg leading-relaxed">
                        Un recorrido visual por nuestros encargos más destacados, donde cada pieza refleja un compromiso inquebrantable con la excelencia.
                    </p>
                </div>

                {/* Categories */}
                {categories.map((category, idx) => (
                    <div key={idx} className="mb-32">
                        <div className="mb-12 md:mb-16 md:flex justify-between items-end border-b border-gray-200 dark:border-gray-900 pb-8 transition-colors">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl lg:text-4xl text-gray-900 dark:text-white font-serif tracking-wide mb-4">{category.title}</h2>
                                <p className="text-gray-600 dark:text-gray-400 font-light text-lg">{category.description}</p>
                            </div>
                            <div className="hidden md:block text-accent uppercase tracking-widest text-xs font-bold">
                                0{idx + 1}
                            </div>
                        </div>

                        {/* Modern Masonry/Grid Gallery */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {category.images.map((img, imgIdx) => (
                                <div
                                    key={imgIdx}
                                    className={`relative overflow-hidden group cursor-pointer ${imgIdx === 0 ? 'md:col-span-2 md:row-span-2 h-[400px] md:h-full' : 'h-[300px]'}`}
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover grayscale-0 dark:grayscale-[20%] group-hover:grayscale-0 image-hover-zoom transition-all duration-700"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/5 dark:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <span className="text-white text-xs uppercase tracking-widest border border-white/30 px-6 py-2 backdrop-blur-sm shadow-lg">Ampliar</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-[100] bg-white/95 dark:bg-black/95 backdrop-blur-md flex items-center justify-center p-4 lg:p-12 animate-in fade-in duration-300">
                    <button
                        className="absolute top-6 right-6 lg:top-12 lg:right-12 text-gray-800 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors p-4 z-10"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Cerrar imagen"
                    >
                        <FaTimes size={32} />
                    </button>
                    <div className="relative w-full h-full max-w-6xl flex flex-col items-center justify-center">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-h-[85vh] max-w-full object-contain shadow-2xl"
                        />
                        <p className="text-gray-800 dark:text-gray-400 mt-6 font-serif italic text-lg tracking-wide">{selectedImage.alt}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
