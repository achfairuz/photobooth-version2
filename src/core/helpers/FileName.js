export const getFileName = () => {
    const now = new Date();

    const template = localStorage.getItem('template')

    const date = now.toISOString().split("T")[0]; // 2026-03-20
    const time = now.toTimeString().split(" ")[0].replace(/:/g, "-"); // 14-30-21

    return `iyuz-photobooth-${template}-${date}_${time}.jpg`;
};