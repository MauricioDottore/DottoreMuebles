import AppNavbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppBtn from "./WhatsAppBtn";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-200 font-sans selection:bg-accent selection:text-black transition-colors duration-300">
            <AppNavbar />
            <main className="flex-grow w-full">
                {children}
            </main>
            <WhatsAppBtn />
            <Footer />
        </div>
    );
}
