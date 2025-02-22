/** @type {import('tailwindcss').Config} */
export default{
    content: ['./src/**/*.{js,jsx,ts,tsx}'
        , './/index.html'],
    theme: {
        extend: {
            colors:{
                gray:{
                    100: "#eeeeef",
                    200: "#e6e9ed",
                    600: "#95989c"
                },
                purple:{
                    300: "#e0e7fe",
                    500: "#3e38a7",
                    600: "5046e4",
                }
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideIn: {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            },
            animation: {
                fadeIn: 'fadeIn 0.3s ease-out',
                slideIn: 'slideIn 0.3s ease-out',
            },
        },
    },
    plugins: [],
}