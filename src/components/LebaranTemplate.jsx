import { BaseUrl } from "../core/appConstants";

export default function LebaranTemplate({ images = [] }) {

    const today = new Date().toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const year = new Date().getFullYear();

    const hijriDate = new Intl.DateTimeFormat("id-TN-u-ca-islamic", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date());

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#064e3b] via-[#065f46] to-[#022c22] p-4 text-white">

            <div
                id="print-area"
                className="w-full max-w-lg sm:max-w-3xl bg-gradient-to-br from-[#14532d] to-[#022c22] p-6 sm:p-10 rounded-2xl sm:rounded-[30px] border-4 border-yellow-400 shadow-[0_0_50px_rgba(255,215,0,0.25)] flex flex-col items-center"
                style={{
                    aspectRatio: "4 / 5", // menjaga proporsional tidak lonjong
                }}
            >

                {/* HEADER */}
                <div className="text-center mb-4 sm:mb-6">

                    {/* FONT CUSTOM */}
                    <h1
                        className="text-2xl sm:text-5xl text-yellow-300"
                        style={{ fontFamily: "BerkahRaya" }}
                    >
                        Eid Mubarak {year}
                    </h1>

                    <p className="mt-1 sm:mt-2 text-xs sm:text-lg text-green-100">
                        Selamat Hari Raya Idul Fitri
                    </p>

                    {/* DATE */}
                    <div className="mt-2 sm:mt-3 text-xs sm:text-sm opacity-80">
                        <p>{today}</p>
                        <p className="text-yellow-200">{hijriDate}</p>
                    </div>
                </div>

                {/* IMAGE */}
                <div className="w-full flex-1 border-[3px] border-white/80 rounded-2xl overflow-hidden shadow-xl">
                    <img src={images[0]} alt="result" className="w-full h-full object-cover" />
                </div>

                {/* TEXT */}
                <div className="mt-4 sm:mt-6 text-center">
                    <p className="italic text-yellow-200">
                        "Mohon maaf lahir dan batin 🙏"
                    </p>
                </div>

                {/* FOOTER */}
                <div className="mt-4 sm:mt-6 text-center text-xs opacity-70 flex flex-col items-center">
                    IYUZ PHOTOBOOTH ✨
                    <a href={BaseUrl} className="underline"> {BaseUrl ?? "Iyuz-Photobooth"}</a>
                </div>

            </div>
        </div>
    );
}