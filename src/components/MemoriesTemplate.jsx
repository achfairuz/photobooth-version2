import React from "react";
import templateImg from "../assets/memories-template.png";

export default function MemoriesTemplate({ images = [] }) {
    return (
        <div
            id="print-area"
            className="relative w-[700px] h-[1200px] bg-black overflow-auto"
        >

            {/* 📸 FOTO (DI BAWAH) */}
            <div className="absolute inset-0 z-10">

                {images[0] && (
                    <img
                        alt="photo-1"
                        src={images[0]}
                        className="absolute top-[45px] left-[275px] w-[400px] h-[365px] object-cover"
                    />
                )}

                {images[1] && (
                    <img
                        alt="photo-2"
                        src={images[1]}
                        className="absolute top-[420px]  left-[275px] w-[400px] h-[365px] object-cover"
                    />
                )}

                {images[2] && (
                    <img
                        alt="photo-3"
                        src={images[2]}
                        className="absolute top-[780px]  left-[275px] w-[400px] h-[365px] object-cover"
                    />
                )}



            </div>

            {/* 🟢 TEMPLATE (DI ATAS / FRAME) */}
            <img
                src={templateImg}
                alt="template"
                className="absolute inset-0 w-full h-full object-cover z-20 pointer-events-none"
            />

            {/* 💎 WATERMARK PALING ATAS */}
            <div className="absolute bottom-4 right-4 text-[10px] px-3 py-1 rounded-full 
            bg-white/10 backdrop-blur-md text-white border border-white/20 z-30">
                © IYUZ PHOTOBOOTH
            </div>

        </div>
    );
}