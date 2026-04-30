import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

export default function AppNavbar() {
    const path = useLocation().pathname;
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Theme toggle state
    const [isDark, setIsDark] = useState(true);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        // Enforce default dark theme
        if (!document.documentElement.classList.contains('dark') && !localStorage.getItem('theme')) {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        } else if (localStorage.getItem('theme') === 'light') {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        }

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    const navLinks = [
        { name: "COLECCIONES", path: "/catalogo" },
        { name: "SERVICIOS", path: "/servicios" },
        { name: "EL ESTUDIO", path: "/empresa" },
        { name: "CONTACTO", path: "/contacto" },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (isDark ? 'glass-nav-dark py-3' : 'glass-nav-light py-3') : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">

                {/* Brand Logo */}
                <Link to="/" className="flex items-center group">
                    <img
                        src={isDark ? "/assets/Logos Dottore Muebles/240240 blanco.png" : "/assets/Logos Dottore Muebles/240240 negro.png"}
                        className={`transition-all duration-500 ${scrolled ? 'h-10 opacity-90' : 'h-14 opacity-100'} group-hover:opacity-75`}
                        alt="Dottore Muebles"
                    />
                </Link>

                {/* Mobile Menu Button */}
                <div className="flex items-center space-x-4 md:hidden">
                    <button onClick={toggleTheme} className="text-gray-800 dark:text-gray-200">
                        {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
                    </button>
                    <button
                        onClick={toggleMenu}
                        className="text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-accent rounded p-2"
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-10 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm tracking-widest font-light transition-all duration-300 hover:text-accent ${path === link.path ? "text-accent" : "text-gray-800 dark:text-gray-300"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <button onClick={toggleTheme} className="text-gray-800 dark:text-gray-300 hover:text-accent transition-colors ml-4" aria-label="Toggle Theme">
                        {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
                    </button>

                    <Link to="/contacto" className="border border-accent text-accent px-6 py-2 uppercase text-xs tracking-widest hover:bg-accent hover:text-white transition-colors duration-300">
                        Agendar Visita
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className={`md:hidden absolute top-full left-0 w-full shadow-2xl border-t flex flex-col space-y-0 text-center ${isDark ? 'glass-nav-dark border-gray-800' : 'glass-nav-light border-gray-200'}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block py-6 border-b tracking-widest uppercase text-sm transition-colors hover:text-accent ${isDark ? 'border-gray-800 hover:bg-black/20' : 'border-gray-200 hover:bg-white/20'
                                } ${path === link.path ? "text-accent" : "text-gray-800 dark:text-gray-300"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
