import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import { renderTemplate } from "../core/helpers/RenderTemplate";
import { getFileName } from "../core/helpers/FileName";
import FancyButton from "../core/helpers/FancyButton";

export default function Result() {
    const navigate = useNavigate();

    const template = localStorage.getItem("template");
    const photos = JSON.parse(localStorage.getItem("photos") || "[]");

    const [effect, setEffect] = useState(template === "newspaper" ? "vintage" : "normal");
    const [processedPhotos, setProcessedPhotos] = useState([]);

    // 🎨 PROCESS IMAGE
    const processImage = (src, effect) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = src;

            img.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");

                canvas.width = img.width;
                canvas.height = img.height;

                switch (effect) {
                    case "blackwhite":
                        ctx.filter = "grayscale(100%) contrast(120%)";
                        break;
                    case "romantic":
                        ctx.filter = "sepia(60%) brightness(110%)";
                        break;
                    case "dramatic":
                        ctx.filter = "contrast(150%) brightness(90%)";
                        break;
                    case "vintage":
                        ctx.filter = "sepia(80%) contrast(110%)";
                        break;
                    default:
                        ctx.filter = "none";
                }

                ctx.drawImage(img, 0, 0);
                resolve(canvas.toDataURL("image/jpeg", 1.0));
            };
        });
    };

    useEffect(() => {
        const applyEffect = async () => {
            const results = await Promise.all(
                photos.map((p) => processImage(p, effect))
            );
            setProcessedPhotos(results);
        };

        applyEffect();
    }, [effect, photos]);

    // 💾 DOWNLOAD
    const handleDownload = async () => {
        const element = document.getElementById("print-area");

        const canvas = await html2canvas(element, {
            scale: 3, // 🔥 lebih tajam
            useCORS: true,
            backgroundColor: null
        });

        const link = document.createElement("a");
        link.download = getFileName();
        link.href = canvas.toDataURL("image/jpeg", 1.0);
        link.click();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-[#0f172a] to-black text-white flex flex-col items-center justify-center px-4 py-8">

            {/* HEADER */}
            <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-center">
                Hasil Foto Kamu ✨
            </h1>

            {/* TEMPLATE CONTAINER */}
            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/10">

                <div className="scale-90 sm:scale-100 transition">
                    {renderTemplate(template, processedPhotos)}
                </div>

            </div>

            {/* CONTROL PANEL */}
            <div className="
  fixed bottom-6 right-6 flex flex-col gap-3
  backdrop-blur-md bg-white/10 border border-white/20
  p-4 rounded-2xl shadow-xl
">

                <select
                    value={effect}
                    onChange={(e) => setEffect(e.target.value)}
                    className="
    px-4 py-2 rounded-xl
    bg-white/20 text-white
    backdrop-blur-md border border-white/20
  "
                >
                    <option value="normal">Normal</option>
                    <option value="vintage">Vintage</option>
                    <option value="blackwhite">B&W</option>
                    <option value="romantic">Romantic</option>
                    <option value="dramatic">Dramatic</option>
                </select>

                <button
                    onClick={handleDownload}
                    className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold shadow-lg transition"
                >
                    💾 Download
                </button>

                <button
                    onClick={() => window.print()}
                    className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg transition"
                >
                    🖨 Print
                </button>

                <button
                    onClick={() => navigate("/photobooth")}
                    className="bg-gray-700 hover:bg-gray-800 px-6 py-3 rounded-full font-semibold shadow-lg transition"
                >
                    🔄 Ulangi
                </button>
                <FancyButton />
            </div>

            {/* FOOTER */}
            <div className="
  absolute bottom-4 right-4 text-[10px]
  px-3 py-1 rounded-full
  bg-white/10 backdrop-blur-md
  border border-white/20 text-white
">
                <p className="mt-6  text-xs text-gray-500">
                    © IYUZ PHOTOBOOTH EXPERIENCE
                </p>
            </div>
        </div>
    );
}