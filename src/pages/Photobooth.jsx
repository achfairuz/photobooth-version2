import React, { useRef } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";

export default function Photobooth() {
    const webcamRef = useRef(null);
    const navigate = useNavigate();

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
            localStorage.setItem("photo", imageSrc);
            navigate("/result");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">

            <h1 className="text-4xl font-bold mb-6">Photobooth Camera</h1>

            <div className="rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    className="w-[700px]"
                />
            </div>

            <button
                onClick={capture}
                className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-12 py-4 text-2xl rounded-full transition"
            >
                📸 Capture
            </button>

            <button
                onClick={() => navigate("/")}
                className="mt-4 text-gray-400 hover:text-white"
            >
                ⬅ Kembali
            </button>

        </div>
    );
}