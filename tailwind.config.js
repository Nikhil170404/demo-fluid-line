/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom colors for Fluidline branding
      colors: {
        'fluidline': {
          'blue': {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#1e40af', // Primary blue
            700: '#1d4ed8',
            800: '#1e3a8a',
            900: '#1e3a8a',
            950: '#172554',
          },
          'red': {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626', // Primary red
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
            950: '#450a0a',
          }
        }
      },
      
      // Custom font families
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'display': ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'monospace'],
      },
      
      // Custom spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      
      // Custom animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-in-out',
        'slide-in-right': 'slideInRight 0.5s ease-in-out',
        'slide-in-left': 'slideInLeft 0.5s ease-in-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      
      // Custom keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      
      // Custom gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      },
      
      // Custom box shadows
      boxShadow: {
        'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 25px 0 rgba(0, 0, 0, 0.1)',
        'hard': '0 10px 40px 0 rgba(0, 0, 0, 0.15)',
        'colored': '0 4px 25px 0 rgba(59, 130, 246, 0.15)',
        'colored-red': '0 4px 25px 0 rgba(220, 38, 38, 0.15)',
      },
      
      // Custom border radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      
      // Custom line heights
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      
      // Custom letter spacing
      letterSpacing: {
        'extra-wide': '0.2em',
      },
      
      // Custom max widths
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      
      // Custom aspect ratios
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '16/10': '16 / 10',
      },
      
      // Custom z-index
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      
      // Custom backdrop blur
      backdropBlur: {
        'xs': '2px',
      },
      
      // Custom transforms
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
      
      // Custom transition timing
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      
      // Custom screens for responsive design
      screens: {
        'xs': '475px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
    },
  },
  plugins: [
    // Add useful plugins
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0,0,0,0.10)',
        },
        '.text-shadow-md': {
          textShadow: '0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)',
        },
        '.text-shadow-lg': {
          textShadow: '0 15px 35px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.07)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scrollbar-default': {
          '-ms-overflow-style': 'auto',
          'scrollbar-width': 'auto',
          '&::-webkit-scrollbar': {
            display: 'block',
          },
        },
        '.glass': {
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(10px)',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        },
        '.glass-dark': {
          background: 'rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(10px)',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
  
  // Ensure proper CSS generation
  corePlugins: {
    preflight: true,
  },
  
  // Dark mode configuration
  darkMode: 'class',
  
  // Safelist important dynamic classes that might be purged
  safelist: [
    // Theme colors that are dynamically generated
    'text-blue-600',
    'text-red-600',
    'bg-blue-600',
    'bg-red-600',
    'border-blue-600',
    'border-red-600',
    'from-blue-600',
    'to-red-600',
    'hover:from-blue-700',
    'hover:to-red-700',
    // Add more dynamic classes as needed
    {
      pattern: /bg-(blue|red)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /text-(blue|red)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /border-(blue|red)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /from-(blue|red)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /to-(blue|red)-(50|100|200|300|400|500|600|700|800|900)/,
    },
  ],
}