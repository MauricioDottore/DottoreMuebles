import { Helmet } from 'react-helmet-async';

export default function Empresa() {
    return (
        <div className="w-full min-h-screen transition-colors duration-300">
            <Helmet>
                <title>El Estudio | Dottore Muebles</title>
                <meta name="description" content="Conoce la historia, visión y metodología artesanal del estudio Dottore Muebles." />
            </Helmet>

            {/* Header / Intro */}
            <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
                <h2 className="text-accent uppercase tracking-[0.4em] text-xs font-semibold mb-6">El Estudio</h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-gray-900 dark:text-white mb-10 font-light leading-tight">
                    Una herencia de <br /><span className="italic">precisión y pasión</span>
                </h1>
                <p className="text-gray-600 dark:text-gray-400 font-light text-lg md:text-xl leading-relaxed mx-auto max-w-3xl">
                    Fundado bajo la convicción de que el espacio que habitamos define nuestra existencia.
                    Combinamos la disciplina clásica de la ebanistería con una visión modernista para
                    crear proyectos atemporales.
                </p>
            </section>

            {/* Visual Story */}
            <section className="w-full h-[60vh] md:h-[80vh] relative">
                <img
                    src="/assets/PRESENTACION/presentacion madera 1.jpg"
                    className="w-full h-full object-cover grayscale-0 dark:grayscale-[30%]"
                    alt="Interior del taller Dottore"
                />
            </section>

            {/* Text Grid */}
            <section className="py-32 px-6 lg:px-12 bg-white dark:bg-[#050505] transition-colors duration-300">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div>
                        <h3 className="text-gray-900 dark:text-white font-serif tracking-widest uppercase text-sm mb-6 border-l-2 border-accent pl-4">La Misión</h3>
                        <p className="text-gray-600 dark:text-gray-400 font-light text-sm md:text-base leading-loose">
                            Crear entornos residenciales y corporativos que trasciendan la utilidad.
                            Cada veta de madera, cada herraje y cada encastre se selecciona con un propósito
                            estético y funcional para mejorar la calidad de vida de nuestros clientes.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-gray-900 dark:text-white font-serif tracking-widest uppercase text-sm mb-6 border-l-2 border-accent pl-4">El Proceso</h3>
                        <p className="text-gray-600 dark:text-gray-400 font-light text-sm md:text-base leading-loose">
                            Todo comienza con un trazo. Nuestro proceso de diseño integrado asegura que el cliente
                            participe en cada etapa, desde los esquemas técnicos 3D hasta la selección de chapas
                            importadas en nuestro showroom privado.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-gray-900 dark:text-white font-serif tracking-widest uppercase text-sm mb-6 border-l-2 border-accent pl-4">El Legado</h3>
                        <p className="text-gray-600 dark:text-gray-400 font-light text-sm md:text-base leading-loose">
                            Con décadas de experiencia combinada, nuestros artesanos heredan métodos clásicos de
                            construcción fusionados con maquinaria de precisión CNC, logrando encuentros perfectos
                            y acabados de nivel mundial.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
