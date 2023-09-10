/** @type {import('tailwindcss').Config} */

const tailwind = {
  darkMode: ['class'],

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xs:'480px',
        sm:'720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1200px',
      },
      padding: '15px'
    },
    extend: {

      colors: {
       appPurple:{
        100:'#7868E6'
       },
       appRed:{
        100:'#FF4D4F'
       },
       blogText:{
        100:"rgb(222 226 227)"
       }
      },
      right:{
        12:"12rem"
      },
      animation: {
        loader: 'loader 0.6s infinite alternate'
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.1,
            transform: 'translate3d(0, -1rem, 0)'
          }
        }
      }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
export default tailwind
