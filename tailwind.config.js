/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Mobile-first responsive breakpoints
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1600px',
        '4xl': '1920px',
        // Custom breakpoints for specific mobile sizes
        'mobile-xs': '320px',
        'mobile-sm': '375px',
        'mobile-md': '414px',
        'mobile-lg': '480px',
        'tablet-sm': '600px',
        'tablet-md': '768px',
        'tablet-lg': '1024px',
      },

      // Enhanced color palette for Fluidline branding
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
      
      // Mobile-optimized font families
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'display': ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'monospace'],
      },

      // Mobile-optimized font sizes
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        // Mobile-specific sizes
        'mobile-xs': ['0.625rem', { lineHeight: '0.875rem' }],
        'mobile-sm': ['0.75rem', { lineHeight: '1rem' }],
        'mobile-base': ['0.875rem', { lineHeight: '1.25rem' }],
        'mobile-lg': ['1rem', { lineHeight: '1.5rem' }],
        'mobile-xl': ['1.125rem', { lineHeight: '1.75rem' }],
        'mobile-2xl': ['1.25rem', { lineHeight: '1.75rem' }],
        'mobile-3xl': ['1.5rem', { lineHeight: '2rem' }],
        'mobile-4xl': ['1.875rem', { lineHeight: '2.25rem' }],
      },
      
      // Mobile-optimized spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
        // Fine-grained mobile spacing
        '0.5': '0.125rem',
        '1.5': '0.375rem',
        '2.5': '0.625rem',
        '3.5': '0.875rem',
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '7.5': '1.875rem',
        // Safe area spacing for mobile devices
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      
      // Enhanced animations for mobile
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-in-out',
        'fade-in-down': 'fadeInDown 0.5s ease-in-out',
        'slide-in-right': 'slideInRight 0.5s ease-in-out',
        'slide-in-left': 'slideInLeft 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-in-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'scale-in': 'scaleIn 0.3s ease-in-out',
        'scale-out': 'scaleOut 0.3s ease-in-out',
        // Mobile-specific animations
        'tap': 'tap 0.1s ease-in-out',
        'press': 'press 0.2s ease-in-out',
        'swipe-left': 'swipeLeft 0.3s ease-in-out',
        'swipe-right': 'swipeRight 0.3s ease-in-out',
      },
      
      // Enhanced keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
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
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.8)', opacity: '0' },
        },
        tap: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        press: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.95)' },
        },
        swipeLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        swipeRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      
      // Mobile-optimized gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
        'mobile-pattern': 'linear-gradient(45deg, rgba(0,0,0,0.05) 25%, transparent 25%), linear-gradient(-45deg, rgba(0,0,0,0.05) 25%, transparent 25%)',
      },
      
      // Mobile-optimized shadows
      boxShadow: {
        'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 25px 0 rgba(0, 0, 0, 0.1)',
        'hard': '0 10px 40px 0 rgba(0, 0, 0, 0.15)',
        'colored': '0 4px 25px 0 rgba(59, 130, 246, 0.15)',
        'colored-red': '0 4px 25px 0 rgba(220, 38, 38, 0.15)',
        // Mobile-specific shadows
        'mobile-sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'mobile-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'mobile-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'mobile-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      
      // Mobile-optimized border radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        // Mobile-specific radius
        'mobile-sm': '0.25rem',
        'mobile-md': '0.375rem',
        'mobile-lg': '0.5rem',
        'mobile-xl': '0.75rem',
        'mobile-2xl': '1rem',
      },
      
      // Mobile-optimized line heights
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
        // Mobile-specific line heights
        'mobile-tight': '1.1',
        'mobile-snug': '1.25',
        'mobile-normal': '1.4',
        'mobile-relaxed': '1.6',
        'mobile-loose': '1.8',
      },
      
      // Mobile-optimized letter spacing
      letterSpacing: {
        'extra-wide': '0.2em',
        // Mobile-specific letter spacing
        'mobile-tight': '-0.025em',
        'mobile-normal': '0em',
        'mobile-wide': '0.025em',
        'mobile-wider': '0.05em',
      },
      
      // Mobile-optimized max widths
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        // Mobile-specific max widths
        'mobile-xs': '20rem',
        'mobile-sm': '24rem',
        'mobile-md': '28rem',
        'mobile-lg': '32rem',
        'mobile-xl': '36rem',
      },
      
      // Mobile-optimized aspect ratios
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '16/10': '16 / 10',
        // Mobile-specific ratios
        'mobile-card': '5 / 4',
        'mobile-banner': '2 / 1',
        'mobile-hero': '4 / 5',
      },
      
      // Mobile-optimized z-index
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        // Mobile-specific z-index
        'mobile-header': '1000',
        'mobile-menu': '1100',
        'mobile-modal': '1200',
        'mobile-toast': '1300',
        'mobile-tooltip': '1400',
      },
      
      // Mobile-optimized backdrop blur
      backdropBlur: {
        'xs': '2px',
        // Mobile-specific blur
        'mobile-sm': '4px',
        'mobile-md': '8px',
        'mobile-lg': '12px',
      },
      
      // Mobile-optimized transforms
      scale: {
        '102': '1.02',
        '103': '1.03',
        // Mobile-specific scales
        '95': '0.95',
        '97': '0.97',
        '98': '0.98',
        '99': '0.99',
        '101': '1.01',
      },
      
      // Mobile-optimized transition timing
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
        // Mobile-specific durations
        '150': '150ms',
        '250': '250ms',
        '350': '350ms',
      },

      // Touch-friendly minimum sizes
      minHeight: {
        'touch': '44px',
        'touch-lg': '48px',
      },
      minWidth: {
        'touch': '44px',
        'touch-lg': '48px',
      },
    },
  },
  plugins: [
    // Enhanced utilities for mobile
    function({ addUtilities, addComponents }) {
      const newUtilities = {
        // Text shadow utilities
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

        // Scrollbar utilities
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
          '&::-webkit-scrollbar': {
            width: '4px',
            height: '4px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#c1c1c1',
            borderRadius: '2px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#a1a1a1',
          },
        },

        // Glass morphism utilities
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

        // Mobile-specific utilities
        '.touch-manipulation': {
          touchAction: 'manipulation',
        },
        '.touch-pan-x': {
          touchAction: 'pan-x',
        },
        '.touch-pan-y': {
          touchAction: 'pan-y',
        },
        '.touch-none': {
          touchAction: 'none',
        },

        // iOS Safari specific fixes
        '.ios-scroll-fix': {
          '-webkit-overflow-scrolling': 'touch',
        },
        '.ios-input-fix': {
          fontSize: '16px', // Prevents zoom on focus in iOS Safari
        },

        // Safe area utilities
        '.safe-top': {
          paddingTop: 'env(safe-area-inset-top)',
        },
        '.safe-bottom': {
          paddingBottom: 'env(safe-area-inset-bottom)',
        },
        '.safe-left': {
          paddingLeft: 'env(safe-area-inset-left)',
        },
        '.safe-right': {
          paddingRight: 'env(safe-area-inset-right)',
        },
        '.safe-x': {
          paddingLeft: 'env(safe-area-inset-left)',
          paddingRight: 'env(safe-area-inset-right)',
        },
        '.safe-y': {
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)',
        },
        '.safe-all': {
          padding: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
        },

        // Mobile button utilities
        '.btn-mobile': {
          minHeight: '44px',
          minWidth: '44px',
          touchAction: 'manipulation',
          userSelect: 'none',
        },
        '.btn-mobile-lg': {
          minHeight: '48px',
          minWidth: '48px',
          touchAction: 'manipulation',
          userSelect: 'none',
        },

        // Mobile card utilities
        '.mobile-card': {
          borderRadius: '0.75rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          backgroundColor: 'white',
          overflow: 'hidden',
        },

        // Performance optimizations
        '.gpu-accelerated': {
          transform: 'translateZ(0)',
          willChange: 'transform',
        },
        '.hardware-accelerated': {
          transform: 'translate3d(0, 0, 0)',
        },
      };

      const components = {
        // Mobile navigation component
        '.mobile-nav': {
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundColor: 'white',
          zIndex: '1000',
          padding: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
        },

        // Mobile modal component
        '.mobile-modal': {
          position: 'fixed',
          inset: '0',
          zIndex: '1200',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },

        // Mobile form component
        '.mobile-form': {
          '& input, & textarea, & select': {
            fontSize: '16px', // Prevents zoom on iOS
            minHeight: '44px',
            touchAction: 'manipulation',
          },
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover', 'focus']);
      addComponents(components);
    }
  ],
  
  // Ensure proper CSS generation
  corePlugins: {
    preflight: true,
  },
  
  // Dark mode configuration
  darkMode: 'class',
  
  // Extended safelist for dynamic mobile classes
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
    // Mobile-specific classes
    'touch-manipulation',
    'btn-mobile',
    'btn-mobile-lg',
    'mobile-card',
    'safe-top',
    'safe-bottom',
    'safe-left',
    'safe-right',
    'safe-x',
    'safe-y',
    'safe-all',
    // Responsive patterns
    {
      pattern: /^(xs|sm|md|lg|xl|2xl|mobile-.*|tablet-.*):(.*)/,
    },
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
    // Grid patterns
    {
      pattern: /^grid-cols-(1|2|3|4|5|6|12)$/,
    },
    {
      pattern: /^(xs|sm|md|lg|xl|2xl):grid-cols-(1|2|3|4|5|6|12)$/,
    },
    // Spacing patterns
    {
      pattern: /^(p|m|px|py|pt|pb|pl|pr|mx|my|mt|mb|ml|mr)-(0|1|2|3|4|5|6|8|10|12|16|20|24)$/,
    },
    {
      pattern: /^(xs|sm|md|lg|xl|2xl):(p|m|px|py|pt|pb|pl|pr|mx|my|mt|mb|ml|mr)-(0|1|2|3|4|5|6|8|10|12|16|20|24)$/,
    },
  ],
}