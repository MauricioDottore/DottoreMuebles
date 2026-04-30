import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Servicios() {
    return (
        <div className="w-full min-h-screen pt-32 pb-24 transition-colors duration-300">
            <Helmet>
                <title>Servicios Integrales | Dottore Muebles</title>
                <meta name="description" content="Servicios de diseño 3D, fabricación a medida e instalación artesanal." />
            </Helmet>

            <div className="container mx-auto px-6 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-32">
                    <h2 className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6">Expertise</h2>
                    <h1 className="text-4xl md:text-6xl font-serif text-gray-900 dark:text-white mb-6 font-light">
                        El arte del <span className="italic">servicio completo</span>
                    </h1>
                    <div className="h-px bg-gray-300 dark:bg-gray-800 w-24 mx-auto mb-8"></div>
                    <p className="text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto text-lg leading-relaxed">
                        Desde la concepción arquitectónica hasta el último tornillo. Ofrecemos una experiencia "llave en mano" garantizando un control de calidad absoluto en cada fase.
                    </p>
                </div>

                {/* Services Timeline / Steps */}
                <div className="space-y-32">

                    {/* Step 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div className="order-2 md:order-1 relative h-[500px] group overflow-hidden">
                            <img src="/assets/En Obra/IMG_0239_Original.jpg" className="w-full h-full object-cover grayscale-0 dark:grayscale-[30%] image-hover-zoom" alt="Mediciones y Planos" />
                            <div className="absolute top-6 left-6 text-accent font-serif text-6xl opacity-40 select-none">01</div>
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 dark:text-white tracking-wide">Asesoría & Anteproyecto</h3>
                            <p className="text-gray-600 dark:text-gray-400 font-light leading-loose">
                                Nuestro equipo se traslada a su obra o residencia para realizar mediciones láser milimétricas. Escuchamos sus requerimientos de estilo de vida, curamos referencias visuales y desarrollamos los primeros bocetos funcionales.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 dark:text-white tracking-wide">Ingeniería & Renders 3D</h3>
                            <p className="text-gray-600 dark:text-gray-400 font-light leading-loose">
                                Cada centímetro del mobiliario se modela virtualmente. Presentamos visualizaciones fotorrealistas para asegurar que la volumetría, iluminación y texturas superen sus expectativas antes de cortar la primera madera.
                            </p>
                        </div>
                        <div className="relative h-[500px] group overflow-hidden">
                            <img src="/assets/Equipamiento/IMG_1941_Original.jpg" className="w-full h-full object-cover grayscale-0 dark:grayscale-[30%] image-hover-zoom" alt="Render 3D de cocina" />
                            <div className="absolute top-6 right-6 text-accent font-serif text-6xl opacity-40 select-none">02</div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div className="order-2 md:order-1 relative h-[500px] group overflow-hidden">
                            <img src="/assets/Obras realizadas/Departamento Rosario Centro/20230811_132021.jpg" className="w-full h-full object-cover grayscale-0 dark:grayscale-[30%] image-hover-zoom" alt="Fabricación en taller" />
                            <div className="absolute top-6 left-6 text-accent font-serif text-6xl opacity-40 select-none">03</div>
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 dark:text-white tracking-wide">Fabricación Artesanal</h3>
                            <p className="text-gray-600 dark:text-gray-400 font-light leading-loose">
                                En nuestra planta en Rosario, fusionamos el corte por control numérico (CNC) de precisión europea con el pulso humano de ebanistas expertos. Trabajamos con placas premium, lacas poliuretánicas y maderas sólidas seleccionadas a mano.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 dark:text-white tracking-wide">Logística & Montaje</h3>
                            <p className="text-gray-600 dark:text-gray-400 font-light leading-loose">
                                La instalación es una fase crítica. Nuestro equipo logístico propio embala y transporta cada módulo. Los instaladores de Dottore velan por montajes inmaculados, con ajustes en obra que garantizan terminaciones sutiles y perfectas.
                            </p>
                        </div>
                        <div className="relative h-[500px] group overflow-hidden">
                            <img src="/assets/En Obra/IMG_5535_Original.jpg" className="w-full h-full object-cover grayscale-0 dark:grayscale-[30%] image-hover-zoom" alt="Instalación en obra" />
                            <div className="absolute top-6 right-6 text-accent font-serif text-6xl opacity-40 select-none">04</div>
                        </div>
                    </div>

                </div>

                {/* Final Banner */}
                <div className="mt-40 border border-gray-200 dark:border-gray-900 bg-white dark:bg-[#0a0a0a] shadow-sm dark:shadow-none p-12 lg:p-20 text-center transition-colors">
                    <h3 className="text-3xl font-serif font-light text-gray-900 dark:text-white mb-6">Confíe su espacio a los especialistas</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-light mb-10 max-w-lg mx-auto">Atendemos proyectos residenciales completos y desarrollos corporativos selectos.</p>
                    <Link to="/contacto" className="inline-block bg-black dark:bg-white text-white dark:text-black px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-accent dark:hover:bg-accent hover:text-white dark:hover:text-white transition-all duration-300">
                        INICIAR CONVERSACIÓN
                    </Link>
                </div>
            </div>
        </div>
    );
}
