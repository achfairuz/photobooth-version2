import templateEidImg from "../../assets/eid-mubarok.png"
import templateMemories from "../../assets/memories-template.png"

export const templates = [
    {
        key: "newspaper",
        name: "Koran Vintage",
        emoji: "📰",
        bg: "bg-[#e8dcc7]",
        text: "text-black",
        description: "Nuansa jadul klasik seperti koran tempo dulu",
        preview: null,
    },
    {
        key: "lebaran",
        name: "Lebaran",
        emoji: "🌙",
        bg: "bg-green-600",
        text: "text-white",
        description: "Tema Islami elegan untuk momen spesial",
        preview: null,
    },
    {
        key: "eidmubarok",
        name: "Eid Mubarak – 4 Captured Moments",
        emoji: "✨",
        bg: "bg-gradient-to-br from-[#0f3d2e] to-[#1f7a5c]",
        text: "text-white",
        description: "Template premium dengan nuansa Islami modern",
        preview: templateEidImg,
    },
    {
        key: "memories",
        name: "Memories – 3 Captured Moments",
        emoji: "✨",
        bg: "bg-gradient-to-br from-[#0f3d2e] to-[#1f7a5c]",
        text: "text-white",
        description: "Template elegan dan clean",
        preview: templateMemories,
    },
];