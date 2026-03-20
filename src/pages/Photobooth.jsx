import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";

// IMPORT TEMPLATE
import EidMubarokTemplate from "../components/EidMubarokTemplate";
import LebaranTemplate from "../components/LebaranTemplate";
import NewspaperTemplate from "../components/NewspaperTemplate";
import MemoriesTemplate from "../components/MemoriesTemplate";

// MAX FOTO PER TEMPLATE
function getMaxPhotos(template) {
    switch (template) {
        case "lebaran":
        case "newspaper":
            return 1;
        case "eidmubarok":
            return 4;
        case "memories":
            return 3;
        default:
            return 1;
    }
}

export default function Photobooth() {
    const webcamRef = useRef(null);
    const navigate = useNavigate();
    const template = localStorage.getItem("template");

    const [loading, setLoading] = useState(true);
    const [preview, setPreview] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [orientation, setOrientation] = useState("portrait");

    const maxPhotos = getMaxPhotos(template);

    // 📸 CAPTURE
    const capture = () => {
        setTimeout(() => {
            const imageSrc = webcamRef.current.getScreenshot();
            if (imageSrc) setPreview(imageSrc);
        }, 300);
    };

    // 🔁 ULANG
    const retake = () => setPreview(null);

    // ✅ LANJUT
    const confirm = () => {
        const newPhotos = [...photos, preview];
        setPhotos(newPhotos);
        setPreview(null);

        if (newPhotos.length === maxPhotos) {
            localStorage.setItem("photos", JSON.stringify(newPhotos));
            navigate("/result");
        }
    };

    // 🎯 RENDER TEMPLATE PREVIEW
    const renderTemplatePreview = () => {
        const allImages = [...photos, preview];

        switch (template) {
            case "eidmubarok":
                return <EidMubarokTemplate images={allImages} />;

            case "lebaran":
                return <LebaranTemplate images={allImages} />;

            case "newspaper":
                return <NewspaperTemplate images={allImages} />;

            case "memories":
                return <MemoriesTemplate images={allImages} />
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-[#0f172a] to-black text-white px-4">

            {/* HEADER */}
            <div className="text-center mb-6">
                <h1 className="text-3xl sm:text-5xl font-bold text-yellow-400">
                    {template === "lebaran" && "Eid Photo Experience"}
                    {template === "eidmubarok" && "Eid Mubarak Booth"}
                    {template === "newspaper" && "Vintage Photo Experience"}
                </h1>

                <p className="mt-2 text-gray-300">
                    Foto {photos.length + 1} dari {maxPhotos}
                </p>
            </div>

            {/* CAMERA / TEMPLATE PREVIEW */}
            <div className="relative w-full max-w-[720px] flex justify-center">

                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-3xl z-10">
                        <div className="animate-spin h-10 w-10 border-4 border-yellow-400 border-t-transparent rounded-full"></div>
                    </div>
                )}

                {!preview ? (
                    <div className="rounded-3xl overflow-hidden border-4 border-yellow-400 shadow-xl w-full">
                        <Webcam
                            ref={webcamRef}
                            audio={false}
                            screenshotFormat="image/jpeg"
                            mirrored={true}
                            videoConstraints={{
                                facingMode: "user",
                                width: orientation === "portrait" ? 720 : 1280,
                                height: orientation === "portrait" ? 1280 : 720
                            }}
                            onUserMedia={() => setLoading(false)}
                            className="w-full"
                        />
                    </div>
                ) : (
                    <div className="flex justify-center">
                        {renderTemplatePreview()}
                    </div>
                )}
            </div>

            {/* BUTTON AREA */}
            <div className="mt-6 flex flex-col items-center gap-4">
                <div className="flex gap-3 mb-2">
                    <div className="flex gap-3 mb-2">
                        <button
                            onClick={() => setOrientation("portrait")}
                            className={`px-4 py-2 rounded-full text-sm ${orientation === "portrait"
                                ? "bg-yellow-400 text-black"
                                : "bg-gray-700"
                                }`}
                        >
                            💻 Landscape
                        </button>

                        <button
                            onClick={() => setOrientation("landscape")}
                            className={`px-4 py-2 rounded-full text-sm ${orientation === "landscape"
                                ? "bg-yellow-400 text-black"
                                : "bg-gray-700"
                                }`}
                        >
                            📱 Portrait
                        </button>
                    </div>
                </div>
                {!preview ? (

                    <button
                        onClick={capture}
                        className="bg-yellow-500 px-10 py-4 rounded-full text-black font-bold text-xl hover:scale-105 transition"
                    >
                        📸 Ambil Foto
                    </button>
                ) : (
                    <div className="flex gap-4">
                        <button
                            onClick={retake}
                            className="bg-gray-600 px-6 py-3 rounded-full"
                        >
                            🔁 Ulang
                        </button>

                        <button
                            onClick={confirm}
                            className="bg-green-500 px-6 py-3 rounded-full text-black font-bold"
                        >
                            ✅ Lanjut
                        </button>
                    </div>
                )}

                <button
                    onClick={() => navigate("/")}
                    className="text-gray-400 text-sm"
                >
                    Kembali
                </button>
            </div>

            {/* FOOTER */}
            <div className="mt-8 text-xs text-gray-500">
                IYUZ PHOTOBOOTH EXPERIENCE
            </div>
        </div>
    );
}