import { useNavigate } from "react-router-dom";
import { templates } from "../core/data/Templates";

export default function ChooseTemplate() {
    const navigate = useNavigate();

    const selectTemplate = (type) => {
        localStorage.setItem("template", type);
        navigate("/photobooth");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-[#0f172a] to-black text-white flex flex-col items-center justify-center px-4">

            {/* HEADER */}
            <h1 className="text-3xl sm:text-5xl font-bold mb-10 text-center">
                Pilih Template
            </h1>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-6xl">

                {templates.map((item) => (
                    <div
                        key={item.key}
                        onClick={() => selectTemplate(item.key)}
                        className={`cursor-pointer rounded-3xl overflow-hidden transform hover:scale-105 transition duration-300 shadow-xl hover:shadow-2xl ${item.bg} ${item.text}`}
                    >

                        {/* PREVIEW IMAGE */}
                        {item.preview ? (
                            <img
                                src={item.preview}
                                alt={item.name}
                                className="w-full h-48 object-cover"
                            />
                        ) : (
                            <div className="w-full h-48 flex items-center justify-center text-6xl">
                                {item.emoji}
                            </div>
                        )}

                        {/* CONTENT */}
                        <div className="p-5">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                {item.emoji} {item.name}
                            </h2>

                            <p className="mt-2 text-sm opacity-80">
                                {item.description}
                            </p>
                        </div>

                        {/* GLOW EFFECT */}
                        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition pointer-events-none">
                            <div className="w-full h-full bg-white/10 backdrop-blur-sm"></div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}