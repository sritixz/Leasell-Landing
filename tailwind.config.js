/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./leasell.html", "./leasell-landing_final.html"],
  theme: {
    extend: {
      colors: {
        background: 'oklch(99.5% .003 240)',
        foreground: 'oklch(18% .04 260)',
        primary: {
          DEFAULT: 'oklch(38% .19 265)',
          foreground: 'oklch(99% 0 0)',
          glow: 'oklch(55% .22 265)'
        },
        secondary: {
          DEFAULT: 'oklch(97% .01 260)',
          foreground: 'oklch(20% .04 260)'
        },
        muted: {
          DEFAULT: 'oklch(96% .01 260)',
          foreground: 'oklch(48% .03 260)'
        },
        accent: {
          DEFAULT: 'oklch(94% .02 260)',
          foreground: 'oklch(20% .04 260)'
        },
        card: {
          DEFAULT: 'oklch(100% 0 0)',
          foreground: 'oklch(18% .04 260)'
        },
        border: 'oklch(92% .01 260)',
        input: 'oklch(92% .01 260)',
        ring: 'oklch(55% .22 265)',
        teal: 'oklch(72% .14 200)',
        emerald: 'oklch(58% .14 152)',
        'slate-brand': 'oklch(20% .04 260)',
        destructive: {
          DEFAULT: 'oklch(60% .22 25)',
          foreground: 'oklch(99% 0 0)'
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        elegant: '0 20px 60px -20px oklch(38% .19 265 / .35)',
        glass: '0 8px 32px oklch(20% .04 260 / .08)',
        phone: '0 40px 80px -20px oklch(20% .04 260 / .35), 0 0 0 12px oklch(15% .03 260), 0 0 0 13px oklch(25% .03 260)',
      },
      backgroundImage: {
        'gradient-hero': 'radial-gradient(ellipse at top left, oklch(55% .22 265 / .15), transparent 60%), radial-gradient(ellipse at bottom right, oklch(72% .14 200 / .15), transparent 60%)',
        'gradient-primary': 'linear-gradient(135deg, oklch(38% .19 265), oklch(50% .2 260))',
        'gradient-teal': 'linear-gradient(135deg, oklch(72% .14 200), oklch(65% .15 220))',
      },
      keyframes: {
        'marquee-x': {
          from: {
            transform: 'translateX(0)'
          },
          to: {
            transform: 'translateX(-50%)'
          }
        },
      },
      animation: {
        marquee: '40s linear infinite marquee-x',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
