import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Contacto() {
    return (
        <div className="w-full min-h-screen pt-32 pb-24 transition-colors duration-300">
            <Helmet>
                <title>Contacto | Dottore Muebles</title>
                <meta name="description" content="Inicia tu proyecto de diseño personalizado hoy mismo contáctándonos en Rosario, Argentina." />
            </Helmet>

            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6">Concierge</h2>
                    <h1 className="text-4xl md:text-6xl font-serif text-gray-900 dark:text-white mb-6 font-light">
                        Hagamos realidad tu <span className="italic">visión</span>
                    </h1>
                    <div className="h-px bg-gray-300 dark:bg-gray-800 w-24 mx-auto mb-8 transition-colors"></div>
                    <p className="text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto text-lg leading-relaxed">
                        Nuestro equipo de diseñadores y artesanos está listo para escuchar tus ideas y transformarlas en mobiliario de excelencia.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Information panel */}
                    <div className="space-y-12">
                        <div className="flex items-start space-x-6 group">
                            <div className="w-12 h-12 border border-gray-300 dark:border-gray-800 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className="text-gray-900 dark:text-white font-serif tracking-widest uppercase text-sm mb-2">Nuestro Taller</h3>
                                <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-loose">Cerrito 3275<br />Rosario, Santa Fe<br />Argentina</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6 group">
                            <div className="w-12 h-12 border border-gray-300 dark:border-gray-800 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <h3 className="text-gray-900 dark:text-white font-serif tracking-widest uppercase text-sm mb-2">Contacto Directo</h3>
                                <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-loose">+54 9 341 581 4691<br />Disponible de Lun a Vie, de 9 a 17hs</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6 group">
                            <div className="w-12 h-12 border border-gray-300 dark:border-gray-800 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className="text-gray-900 dark:text-white font-serif tracking-widest uppercase text-sm mb-2">Consultas</h3>
                                <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-loose">dottoremuebles@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Elegant Form Placeholder */}
                    <div className="bg-white dark:bg-[#0a0a0a] p-10 md:p-14 border border-gray-200 dark:border-gray-900 shadow-xl dark:shadow-2xl transition-colors duration-300">
                        <h3 className="text-2xl font-serif text-gray-900 dark:text-white mb-8">Solicitud de Asesoría</h3>
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Nombre Completo"
                                    className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white focus:ring-0 focus:border-accent font-light px-0 py-3 text-sm transition-colors"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <input
                                    type="email"
                                    placeholder="Correo Electrónico"
                                    className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white focus:ring-0 focus:border-accent font-light px-0 py-3 text-sm transition-colors"
                                />
                                <input
                                    type="tel"
                                    placeholder="Teléfono"
                                    className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white focus:ring-0 focus:border-accent font-light px-0 py-3 text-sm transition-colors"
                                />
                            </div>
                            <div>
                                <textarea
                                    rows="4"
                                    placeholder="Cuéntenos brevemente sobre su proyecto..."
                                    className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white focus:ring-0 focus:border-accent font-light px-0 py-3 text-sm transition-colors resize-none"
                                ></textarea>
                            </div>
                            <button className="w-full bg-black dark:bg-white text-white dark:text-black py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all duration-300">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
