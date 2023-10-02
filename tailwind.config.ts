import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-lineca)']
      },
      colors: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'black': 'var(--black)',
        'white': 'var(--white)',
        'border-primary': 'var(--border-primary)',
        'bg-card': 'var(--bg-card)',

        'bg-primary': 'var(--bg-primary)',
        'bg-card-hover': 'var(--bg-card-hover)',
        'bg-form': 'var(--bg-form)',
        'bg-input': 'var(--bg-input)',
        'btn-primary': 'var(--btn-primary)',
        'btn-primary-active': 'var(--btn-primary-active)',
        'btn-secondary': 'var(--btn-secondary)',
        'btn-secondary-active': 'var(--btn-secondary-active)',
        'progress': 'var(--progress)',
        'progress-active': 'var(--progress-active)',
        'txt-primary': 'var(--txt-primary)',
        'txt-hover': 'var(--txt-hover)',
        'txt-inverted': 'var(--txt-inverted)',
        'highlight': 'var(--highlight)',
        'info': 'var(--info)',
        'error': 'var(--error)',
        'warning': 'var(--warning)',
        'success': 'var(--success)'
      },
    },
  },
  plugins: [],
}
export default config
