import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#d6d1c4] text-black font-newspaper">

            <div className="bg-[#f5f1e6] p-12 border-[8px] border-black shadow-2xl text-center max-w-2xl">

                <h1 className="text-6xl font-black tracking-widest">
                    TOENDJOENGAN
                </h1>

                <h2 className="text-xl tracking-[0.5em] mt-2">
                    TEMPOE DOELOE
                </h2>

                <p className="mt-6 text-lg">
                    Rasakan pengalaman Photobooth dengan nuansa koran klasik tahun 1940-an.
                </p>

                <button
                    onClick={() => navigate("/photobooth")}
                    className="mt-10 bg-black text-white px-10 py-4 text-xl font-bold hover:bg-gray-800 transition"
                >
                    📸 MULAI PHOTOBOOTH
                </button>

            </div>
        </div>
    );
}