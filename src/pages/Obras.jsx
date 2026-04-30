import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Modal } from 'flowbite-react';

const obrasData = [
    {
        title: "Casa Hostal del Sol",
        path: "Casa nose",
        images: [
            "ESTUDIO DOTT I (CALIDAD WEB)-124.jpg", "ESTUDIO DOTT I (CALIDAD WEB)-007.jpg",
            "ESTUDIO DOTT I (CALIDAD WEB)-076.jpg", "ESTUDIO DOTT I (CALIDAD WEB)-075.jpg"
        ]
    },
    {
        title: "Casa Country Aldea Del Lago",
        path: "Casa Country Aldea del lago",
        images: [
            "20220426_114325.jpg", "20220426_114911.jpg", "20220426_115108.jpg",
            "20220426_115210.jpg", "20220426_115148.jpg"
        ]
    },
    {
        title: "Departamento Rosario Centro",
        path: "Departamento Rosario Centro",
        images: [
            "WhatsApp Image 2024-02-05 at 14.44.05 (2).jpeg", "WhatsApp Image 2024-02-05 at 14.44.05.jpeg",
            "20230830_140306.jpg", "20230830_135937.jpg", "20230811_132041.jpg"
        ]
    },
    {
        title: "Puerto España Salon de eventos",
        path: "Puerto España Eventos",
        images: [
            "20230808_125418.jpg", "20230808_125245.jpg", "20230808_125139.jpg", "20230808_125241.jpg"
        ]
    },
    {
        title: "Quincho KCC",
        path: "Quincho KCC",
        images: [
            "PH QUINCHO CASA VIEW -4.jpg", "PH QUINCHO CASA VIEW -5.jpg", "PH QUINCHO CASA VIEW -7.jpg",
            "PH QUINCHO CASA VIEW -12.jpg", "PH QUINCHO CASA VIEW -18.jpg"
        ]
    }
];

export default function Obras() {
    const [openModal, setOpenModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAlt, setSelectedAlt] = useState("");

    const handleImageClick = (src, alt) => {
        setSelectedImage(src);
        setSelectedAlt(alt);
        setOpenModal(true);
    };

    return (
        <div className="container mx-auto px-6 py-12">
            <Helmet>
                <title>Obras Realizadas y Proyectos | Dottore Muebles</title>
                <meta name="description" content="Descubre nuestros proyectos y obras realizadas: casas en countries, departamentos en Rosario Centro, salones de eventos y mucho más." />
            </Helmet>

            <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900">Obras Realizadas</h1>

            {obrasData.map((obra, index) => (
                <div key={index} className="mb-14">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-blue-500 pl-4">{obra.title}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {obra.images.map((img, idx) => {
                            const src = `/assets/Obras realizadas/${obra.path}/${img}`;
                            const alt = `Proyecto ${obra.title} - Foto ${idx + 1}`;
                            return (
                                <div
                                    key={idx}
                                    className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
                                    onClick={() => handleImageClick(src, alt)}
                                >
                                    <img
                                        src={src}
                                        alt={alt}
                                        className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                                        loading="lazy"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}

            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} size="5xl">
                <Modal.Body className="p-0 bg-transparent flex justify-center items-center">
                    {selectedImage && <img src={selectedImage} alt={selectedAlt} className="max-h-[90vh] object-contain rounded-lg" />}
                </Modal.Body>
            </Modal>
        </div>
    );
}
