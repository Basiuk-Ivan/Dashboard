export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const darkMode = 'class';
export const theme = {
  fontFamily: {
    display: ['Open Sans', 'sans-serif'],
    body: ['Open Sans', 'sans-serif'],
  },
  extend: {
    fontSize: {
      14: '14px',
    },
    backgroundColor: {
      'main-bg': '#FAFBFB',
      'main-dark-bg': '#20232A',
      'secondary-dark-bg': '#33373E',
      'light-gray': '#F7F7F7',
      'half-transparent': 'rgba(0, 0, 0, 0.5)',
    },
    borderWidth: {
      1: '1px',
    },
    borderColor: {
      color: 'rgba(0, 0, 0, 0.1)',
    },
    width: {
      400: '400px',
      760: '760px',
      780: '780px',
      800: '800px',
      1000: '1000px',
      1200: '1200px',
      1400: '1400px',
    },
    height: {
      80: '80px',
    },
    minHeight: {
      590: '590px',
    },
    backgroundImage: {
      'hero-pattern':
        "url('https://img.freepik.com/free-vector/female-customer-service-worker-sitting-at-laptop-call-center-operator-in-headphones-flat-vector-illustration-customer-support-communication-concept-for-banner-website-design-or-landing-web-page_74855-21837.jpg?w=1380&t=st=1693659810~exp=1693660410~hmac=6f4a0f20929c3e3e347f7bf41e915dc7a6f1b0d065018ce836fa5b0baefe4727')",
    },
  },
};
export const plugins = [];
