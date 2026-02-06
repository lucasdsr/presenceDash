/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#020F5B',
        accent: '#062EFE',
        'text-muted': '#46508A',
        divider: '#B8C6E5',
        'card-bg': '#F5F7FA',
        bg: '#FFFFFF',
        'neutral-100': '#F0F1FA',
        'partner-border': '#D8D9E7',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'section-label': '0.75rem',
        'stat-number': '60px',
        'stat-plus': '36px',
        'stat-title': '28px',
        'stat-desc': '14px',
        'proven-title': '52px',
        'proven-subtitle': '20px',
        'proven-body': '18px',
      },
      fontWeight: {
        'section-label': '500',
      },
      lineHeight: {
        'stat-number': '72px',
        'stat-plus': '48px',
        'stat-title': '36px',
        'stat-desc': '20px',
        'proven-title': '68px',
        'proven-subtitle': '28px',
        'proven-body': '28px',
      },
      borderRadius: {
        card: '10px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0, 0, 0, 0.06)',
      },
      width: {
        'section-underline': '72px',
        'our-impact': '408px',
        'impact-stats': '184px',
        'proven': '744px',
        'partner-card': '92px',
      },
      height: {
        'section-underline': '4px',
        'partner-card': '68px',
      },
      maxWidth: {
        'page': '1200px',
        'proven': '744px',
      },
      spacing: {
        'section-label-gap': '52px',
        'two-col-gap': '40px',
        'headline-to-stats': '98px',
        'stat-block-gap': '32px',
        'stat-inner-gap': '8px',
        'proven-gap': '24px',
        'block-gap': '2rem',
        'column-gap': '3rem',
        'page-x': '1.5rem',
        'grid-gap': '1rem',
        'card-padding': '1.25rem',
        'partner-gap-x': '18.5px',
        'partner-gap-y': '16px',
        'partner-section': '130px',
      },
    },
  },
  plugins: [],
}
