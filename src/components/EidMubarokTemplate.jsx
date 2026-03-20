import React from "react";
import templateImg from "../assets/eid-mubarok.png";

export default function EidMubarokTemplate({ images = [] }) {
    return (
        <div
            id="print-area"
            className="relative w-[400px] h-[1200px] bg-black overflow-hidden"
        >

            {/* 📸 FOTO (DI BAWAH) */}
            <div className="absolute inset-0 z-10">

                {images[0] && (
                    <img
                        src={images[0]}
                        className="absolute top-[45px] left-[20px] w-[400px] h-[215px] object-cover"
                    />
                )}

                {images[1] && (
                    <img
                        src={images[1]}
                        className="absolute top-[283px] left-[20px] w-[400px] h-[215px] object-cover"
                    />
                )}

                {images[2] && (
                    <img
                        src={images[2]}
                        className="absolute top-[510px] left-[20px] w-[400px] h-[225px] object-cover"
                    />
                )}

                {images[3] && (
                    <img
                        src={images[3]}
                        className="absolute top-[755px] left-[20px] w-[400px] h-[220px] object-cover"
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