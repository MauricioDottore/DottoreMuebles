import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-black text-gray-500 dark:text-gray-400 py-16 border-t border-gray-200 dark:border-gray-900 mt-20 transition-colors duration-300">
            <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Branding */}
                <div className="flex flex-col items-center md:items-start space-y-6">
                    <img src="/assets/Logos Dottore Muebles/240240 blanco.png" className="hidden dark:block h-16 opacity-70" alt="Dottore Muebles Logo" />
                    <img src="/assets/Logos Dottore Muebles/240240 negro.png" className="block dark:hidden h-16 opacity-70" alt="Dottore Muebles Logo" />
                    <p className="font-serif italic text-gray-600 dark:text-gray-500 text-center md:text-left">
                        Artesanía fina y diseño atemporal para ambientes que inspiran.
                    </p>
                </div>

                {/* Navigation */}
                <div className="flex flex-col items-center md:items-center space-y-4">
                    <h3 className="text-gray-900 dark:text-white font-serif tracking-widest uppercase text-sm mb-2">Explorar</h3>
                    <Link to="/catalogo" className="hover:text-accent dark:hover:text-accent transition-colors duration-300 font-light text-sm tracking-wider">Colecciones</Link>
                    <Link to="/empresa" className="hover:text-accent dark:hover:text-accent transition-colors duration-300 font-light text-sm tracking-wider">El Estudio</Link>
                    <Link to="/contacto" className="hover:text-accent dark:hover:text-accent transition-colors duration-300 font-light text-sm tracking-wider">Contacto</Link>
                </div>

                {/* Contact & Socials */}
                <div className="flex flex-col items-center md:items-end space-y-4">
                    <h3 className="text-gray-900 dark:text-white font-serif tracking-widest uppercase text-sm mb-2">Conectar</h3>
                    <p className="font-light text-sm tracking-wider">Cerrito 3275, Rosario, Argentina</p>
                    <a href="mailto:dottoremuebles@gmail.com" className="hover:text-accent transition-colors duration-300 font-light text-sm flex items-center gap-2">
                        <FaEnvelope /> dottoremuebles@gmail.com
                    </a>
                    <div className="flex space-x-6 mt-4">
                        <a href="https://instagram.com/dottore.muebles" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-accent dark:text-gray-500 dark:hover:text-accent transition-colors duration-300">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://facebook.com/dottoremuebles" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-accent dark:text-gray-500 dark:hover:text-accent transition-colors duration-300">
                            <FaFacebookF size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-16 pt-8 border-t border-gray-200 dark:border-gray-900 text-center md:text-left flex flex-col md:flex-row justify-between text-xs tracking-widest text-gray-500 dark:text-gray-600">
                <p>&copy; {new Date().getFullYear()} Dottore Muebles. Todos los derechos reservados.</p>
                <div className="space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Términos</a>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacidad</a>
                </div>
            </div>
        </footer>
    );
}
