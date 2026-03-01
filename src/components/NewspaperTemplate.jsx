export default function NewspaperTemplate({ image }) {

    const today = new Date().toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                padding: "40px",
                background: "#cfc4ad",
                fontFamily: "Playfair Display, serif"
            }}
        >

            <div
                id="print-area"
                style={{
                    width: "1000px",
                    background: "#e8dcc7",
                    padding: "60px",
                    border: "6px solid black",
                    boxSizing: "border-box"
                }}
            >

                {/* HEADER */}
                <div style={{ borderBottom: "4px solid black", paddingBottom: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>

                        <div style={{
                            border: "2px solid black",
                            padding: "10px",
                            width: "220px",
                            fontSize: "14px"
                        }}>
                            💌 Kisah Cinta Kita
                            <br />
                            Sebuah cerita yang tak pernah usai.
                        </div>

                        <h1 style={{
                            fontSize: "48px",
                            fontWeight: "900",
                            letterSpacing: "6px",
                            margin: 0
                        }}>
                            LOVE TIMES
                        </h1>

                        <div style={{
                            width: "220px",
                            textAlign: "right",
                            fontSize: "14px"
                        }}>
                            Edisi Spesial Romantis
                            <br />
                            Untuk seseorang yang berarti
                        </div>

                    </div>
                </div>

                {/* DATE */}
                <div style={{
                    textAlign: "center",
                    borderBottom: "2px solid black",
                    padding: "10px 0",
                    marginBottom: "40px"
                }}>
                    {today}
                </div>

                {/* HEADLINE */}
                <div style={{ textAlign: "center", marginBottom: "30px" }}>
                    <h2 style={{
                        fontSize: "64px",
                        fontWeight: "900",
                        margin: 0
                    }}>
                        Cinta yang Abadi
                    </h2>

                    <div style={{
                        width: "400px",
                        height: "4px",
                        background: "black",
                        margin: "20px auto"
                    }}></div>

                    <p style={{
                        fontSize: "20px",
                        fontStyle: "italic"
                    }}>
                        “Bersamamu, setiap hari terasa seperti puisi yang hidup.”
                    </p>
                </div>

                {/* MAIN CONTENT FLEX */}
                <div style={{ display: "flex", gap: "40px" }}>

                    {/* LEFT */}
                    <div style={{ flex: 2 }}>

                        <img
                            src={image}
                            alt="Captured"
                            style={{
                                width: "100%",
                                border: "4px solid black"
                            }}
                        />

                        <p style={{
                            marginTop: "20px",
                            lineHeight: "1.8",
                            textAlign: "justify"
                        }}>
                            Dalam setiap tatapan dan senyuman, tersimpan cerita tentang
                            dua hati yang dipertemukan oleh takdir. Momen ini bukan hanya
                            sekadar gambar, melainkan kenangan yang akan selalu kita simpan
                            dalam halaman-halaman kehidupan.
                        </p>

                    </div>

                    {/* RIGHT */}
                    <div style={{
                        flex: 1,
                        paddingLeft: "30px",
                        borderLeft: "4px solid black"
                    }}>

                        <h3 style={{
                            fontSize: "24px",
                            fontWeight: "700",
                            marginBottom: "15px"
                        }}>
                            Janji Setia
                        </h3>

                        <div style={{
                            height: "2px",
                            background: "black",
                            width: "100%",
                            marginBottom: "20px"
                        }}></div>

                        <p style={{
                            marginTop: "15px",
                            lineHeight: "1.8",
                            textAlign: "justify"
                        }}>
                            Kita mungkin tidak tahu apa yang akan terjadi esok hari,
                            tetapi selama kita bersama, setiap langkah terasa ringan.
                            Cinta ini tumbuh bukan karena kesempurnaan, tetapi karena
                            saling menerima dalam ketidaksempurnaan.
                        </p>

                        <div
                            style={{
                                marginTop: "35px",
                                border: "2px solid black",
                                padding: "20px 30px",
                                fontStyle: "italic",
                                textAlign: "center",
                                width: "85%",
                                marginLeft: "auto",
                                marginRight: "auto",
                                lineHeight: "1.6",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <span style={{ maxWidth: "300px" }}>
                                “Aku memilihmu, hari ini, esok, dan selamanya.”
                            </span>
                        </div>
                    </div>

                </div>

                {/* BOTTOM SECTION */}
                <div style={{
                    marginTop: "50px",
                    borderTop: "4px solid black",
                    paddingTop: "30px",
                    display: "flex",
                    gap: "40px"
                }}>

                    <div style={{ flex: 1 }}>
                        <h3 style={{
                            fontSize: "22px",
                            fontWeight: "700",
                            marginBottom: "10px"
                        }}>
                            Pertemuan Pertama
                        </h3>

                        <div style={{
                            height: "2px",
                            background: "black",
                            width: "90%",
                            marginBottom: "20px"
                        }}></div>

                        <p style={{ lineHeight: "1.8", marginTop: "10px" }}>
                            Dari pertemuan sederhana itu, tak pernah terbayang bahwa
                            percakapan kecil akan berubah menjadi kisah panjang penuh warna.
                        </p>
                    </div>

                    <div style={{ flex: 1 }}>
                        <h3 style={{
                            fontSize: "22px",
                            fontWeight: "700",
                            marginBottom: "10px"
                        }}>
                            Masa Depan Bersama
                        </h3>
                        <div style={{
                            height: "2px",
                            background: "black",
                            width: "90%",
                            marginBottom: "20px"
                        }}></div>

                        <p style={{ lineHeight: "1.8", marginTop: "10px" }}>
                            Bersamamu, aku belajar arti sabar, arti memahami,
                            dan arti mencintai dengan tulus.
                        </p>
                    </div>

                </div>

                {/* FOOTER */}
                <div style={{
                    marginTop: "40px",
                    borderTop: "4px solid black",
                    paddingTop: "20px",
                    textAlign: "center",
                    letterSpacing: "4px"
                }}>
                    LOVE • MEMORY • FOREVER
                </div>

            </div>
        </div>
    );
}