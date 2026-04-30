import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="w-full">
            <Helmet>
                <title>Dottore | Diseño y Ebanistería de Vanguardia</title>
                <meta name="description" content="Muebles de diseño italiano, artesanía premium y proyectos a medida para transformar tus espacios." />
            </Helmet>

            {/* HERO SECTION */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-10 pointer-events-none"></div>
                <img
                    src="/assets/Equipamiento/IMG_1941_Original.jpg"
                    alt="Cocina de alta gama con isla negra"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 dark:opacity-80"
                />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
                    <h2 className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6">Artesanía sin tiempo</h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
                        Redefiniendo el<br />
                        <span className="italic font-light">Lujo Interior</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 dark:text-gray-300 font-light max-w-2xl mx-auto mb-12 drop-shadow-md">
                        Creamos atmósferas envolventes combinando maderas nobles, herrajes de vanguardia y un diseño meticuloso.
                    </p>
                    <Link to="/catalogo" className="inline-block border border-white text-white px-10 py-4 uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-all duration-500">
                        Explorar Colecciones
                    </Link>
                </div>
            </section>

            {/* MANIFESTO / INTRODUCTION */}
            <section className="py-32 px-6 bg-gradient-to-b gap-8 from-gray-50 to-white dark:from-black dark:to-[#0a0a0a] transition-colors duration-300">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 pr-0 lg:pr-12">
                        <h2 className="text-3xl md:text-5xl font-serif text-gray-900 dark:text-white font-light leading-snug">
                            Una filosofía de <span className="italic text-accent">diseño absoluto</span>
                        </h2>
                        <div className="h-px bg-gray-300 dark:bg-gray-800 w-24"></div>
                        <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-lg">
                            Dottore es un estudio dedicado a la excelencia en ebanistería. Creemos que cada espacio cuenta una historia y que el mobiliario debe ser el protagonista silencioso.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-lg">
                            Desde el bosquejo inicial hasta la instalación final meticulosa, nuestro equipo de artesanos plasma la perfección en equipamientos de cocinas, vestidores y revestimientos arquitectónicos.
                        </p>
                        <Link to="/empresa" className="inline-flex items-center text-accent uppercase tracking-widest text-sm hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group mt-8">
                            Conocer nuestro Taller
                            <svg className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </div>
                    <div className="relative h-[600px] overflow-hidden group">
                        <img
                            src="/assets/En Obra/IMG_0239_Original.jpg"
                            alt="Detalle de enchapado en madera"
                            className="w-full h-full object-cover image-hover-zoom grayscale-0 dark:grayscale-[20%]"
                        />
                        <div className="absolute inset-0 bg-black/5 dark:bg-black/10 group-hover:bg-transparent transition-all duration-700"></div>
                    </div>
                </div>
            </section>

            {/* FEATURED SPACES */}
            <section className="py-32 bg-gray-100 dark:bg-[#050505] transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24 relative">
                        <span className="text-[120px] md:text-[200px] font-serif text-black/5 dark:text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">ESPACIOS</span>
                        <h2 className="relative text-3xl md:text-5xl font-serif font-light text-gray-900 dark:text-white">Colecciones<br />Destacadas</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <Link to="/catalogo" className="group block relative h-[500px] overflow-hidden">
                            <img src="/assets/Equipamiento/IMG_7347_Original.jpg" className="w-full h-full object-cover image-hover-zoom" alt="Cocinas" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent dark:from-black/90 flex flex-col justify-end p-8">
                                <h3 className="font-serif text-2xl text-white mb-2">Cocinas Culinarias</h3>
                                <p className="text-sm font-light text-gray-200 dark:text-gray-400 tracking-wider">Ergonomía e innovación</p>
                            </div>
                        </Link>
                        {/* Card 2 */}
                        <Link to="/catalogo" className="group block relative h-[500px] overflow-hidden">
                            <img src="/assets/Obras realizadas/Casa Country Aldea del lago/20220426_114325.jpg" className="w-full h-full object-cover object-top image-hover-zoom" alt="Vestidores" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent dark:from-black/90 flex flex-col justify-end p-8">
                                <h3 className="font-serif text-2xl text-white mb-2">Vestidores Boutique</h3>
                                <p className="text-sm font-light text-gray-200 dark:text-gray-400 tracking-wider">Organización de alta costura</p>
                            </div>
                        </Link>
                        {/* Card 3 */}
                        <Link to="/catalogo" className="group block relative h-[500px] overflow-hidden lg:col-span-1 md:col-span-2">
                            <img src="/assets/Puertas exteriores/IMG_0621_Original.jpg" className="w-full h-full object-cover object-center image-hover-zoom" alt="Aberturas" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent dark:from-black/90 flex flex-col justify-end p-8">
                                <h3 className="font-serif text-2xl text-white mb-2">Aberturas Pivotantes</h3>
                                <p className="text-sm font-light text-gray-200 dark:text-gray-400 tracking-wider">Maderas macizas artesanales</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FINAL CALL TO ACTION */}
            <section className="py-40 px-6 relative overflow-hidden flex items-center justify-center bg-gray-900 border-t border-gray-800 dark:border-none">
                <img src="/assets/Equipamiento/IMG_1945_Original.jpg" className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-20 blend-overlay" alt="Detalle" />
                <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-serif text-white font-light italic mb-8 drop-shadow-md">
                        "Diseñar tu espacio es diseñar tu forma de vivir."
                    </h2>
                    <h3 className="text-gray-300 dark:text-gray-400 tracking-widest text-sm uppercase mb-12">- Dottore</h3>

                    <Link to="/contacto" className="inline-block bg-white text-black px-12 py-5 uppercase tracking-[0.2em] text-sm font-semibold hover:bg-accent hover:text-white transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                        Hablemos de tu Proyecto
                    </Link>
                </div>
            </section>
        </div>
    );
}
