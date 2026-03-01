import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NewspaperTemplate from "../components/NewspaperTemplate";
import html2canvas from "html2canvas";

export default function Result() {
    const navigate = useNavigate();
    const originalPhoto = localStorage.getItem("photo");

    const [effect, setEffect] = useState("vintage");
    const [processedPhoto, setProcessedPhoto] = useState(originalPhoto);

    // 🔥 Process image using real canvas filter
    const processImage = (src, effect) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = "anonymous";
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
                        ctx.filter = "sepia(60%) brightness(110%) contrast(105%)";
                        break;
                    case "dramatic":
                        ctx.filter = "contrast(150%) brightness(90%)";
                        break;
                    case "vintage":
                        ctx.filter = "sepia(80%) contrast(110%) brightness(105%)";
                        break;
                    default:
                        ctx.filter = "none";
                }

                ctx.drawImage(img, 0, 0);
                resolve(canvas.toDataURL("image/jpeg", 1.0));
            };
        });
    };

    // 🔥 Apply effect every time effect changes
    useEffect(() => {
        const applyEffect = async () => {
            if (!originalPhoto) return;

            const newImage = await processImage(originalPhoto, effect);
            setProcessedPhoto(newImage);
        };

        applyEffect();
    }, [effect, originalPhoto]);

    // 🔥 Download full newspaper as JPG
    const handleDownload = async () => {
        const element = document.getElementById("print-area");

        const canvas = await html2canvas(element, {
            scale: 2,
            width: element.offsetWidth,
            height: element.offsetHeight,
            backgroundColor: "#e8dcc7"
        });

        const link = document.createElement("a");
        link.download = "photobooth-love-times.jpg";
        link.href = canvas.toDataURL("image/jpeg", 1.0);
        link.click();
    };

    return (
        <div>
            {/* Kirim processed image ke template */}
            <NewspaperTemplate image={processedPhoto} />

            <div className="fixed bottom-6 right-6 flex flex-col gap-3 no-print">

                <select
                    value={effect}
                    onChange={(e) => setEffect(e.target.value)}
                    className="px-4 py-2 border bg-white"
                >
                    <option value="normal">Normal</option>
                    <option value="vintage">Vintage</option>
                    <option value="blackwhite">Black & White</option>
                    <option value="romantic">Romantic Soft</option>
                    <option value="dramatic">Dramatic</option>
                </select>

                <button
                    onClick={handleDownload}
                    className="bg-green-600 text-white px-6 py-3"
                >
                    💾 Save ke Gallery
                </button>

                <button
                    onClick={() => window.print()}
                    className="bg-blue-600 text-white px-6 py-3"
                >
                    🖨 Cetak
                </button>

                <button
                    onClick={() => navigate("/photobooth")}
                    className="bg-black text-white px-6 py-3"
                >
                    🔄 Ulangi
                </button>

            </div>
        </div>
    );
}