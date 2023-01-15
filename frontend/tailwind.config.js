module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./apps/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                sm: { min: "640px", max: "767px" },
                md: { min: "768px", max: "1023px" },
                lg: { min: "1024px", max: "1279px" },
                xl: { min: "1235px", max: "1535px" },
                "2xl": { min: "1536px" },
            },
            boxShadow: {
                product: "0 0 13px 0 #00000040",
            },
        },
    },
    plugins: [],
};
