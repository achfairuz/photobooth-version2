import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function FancyButton() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);

        // 🎉 CONFETTI BURST
        const duration = 800;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 6,
                angle: 60,
                spread: 70,
                origin: { x: 0 },
            });
            confetti({
                particleCount: 6,
                angle: 120,
                spread: 70,
                origin: { x: 1 },
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };

        frame();

        // ⏳ DELAY BIAR FEELS
        setTimeout(() => {
            navigate("/choose-template");
        }, 700);
    };

    return (
        <button
            onClick={handleClick}
            disabled={loading}
            className={`
                relative px-8 py-3 rounded-full font-semibold text-white
                bg-gradient-to-r from-gray-700 via-gray-800 to-black
                shadow-lg
                transition-all duration-300
                hover:scale-105 hover:shadow-2xl
                active:scale-95
                overflow-hidden
            `}
        >
            {/* ✨ SHINE EFFECT */}
            <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition duration-300 blur-xl"></span>

            {/* TEXT */}
            <span className="relative z-10 flex items-center gap-2">
                {loading ? "Loading..." : "✨ Pilih Template"}
            </span>
        </button>
    );
}