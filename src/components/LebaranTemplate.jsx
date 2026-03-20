import templateImg from "../assets/lebaran-template.png"

export default function LebaranTemplate({ images = [] }) {
    return (
        <div className="flex justify-center items-start p-4 bg-gray-100 min-h-200">
            {/* 📱 Wrapper responsive */}
            <div className="w-full max-w-[400px] relative overflow-hidden border border-gray-300">
                <div
                    id="print-area"
                    className="relative w-[1200px] h-[1800px] bg-black overflow-hidden scale-[0.33] origin-top-left"
                >
                    {/* 📸 FOTO (DI BAWAH) */}
                    <div className="absolute inset-0 z-10">
                        {images[0] && (
                            <img
                                alt="photo-1"
                                src={images[0]}
                                className="absolute top-[45px] left-[20px] w-[1150px] h-[1700px] object-cover"
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
            </div>
        </div>
    )
}