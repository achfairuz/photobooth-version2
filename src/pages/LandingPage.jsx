import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4">

            <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-10 text-center">

                {/* TITLE */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-widest">
                    IYUZ
                </h1>

                <h2 className="text-lg sm:text-2xl tracking-[0.4em] mt-2 text-gray-300">
                    PHOTOBOOTH
                </h2>

                {/* DESC */}
                <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-200">
                    Abadikan momenmu dengan gaya modern photobooth yang simpel, cepat, dan aesthetic.
                </p>

                {/* BUTTON */}
                <button
                    onClick={() => navigate("/choose-template")}
                    className="mt-6 sm:mt-10 w-full sm:w-auto bg-white text-black px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-xl font-bold rounded-xl hover:bg-gray-200 transition duration-300"
                >
                    📸 MULAI FOTO
                </button>

            </div>
        </div>
    );
}