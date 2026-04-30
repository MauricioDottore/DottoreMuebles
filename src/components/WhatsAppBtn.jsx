import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppBtn() {
    return (
        <a
            href="https://api.whatsapp.com/send?phone=5493415814691"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50 flex items-center justify-center"
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp size={32} />
        </a>
    );
}
