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
        "url('https://img.freepik.com/free-photo/surprised-asian-middleaged-woman-with-grey-hair-looking-at-money-and-holding-credit-card-earning-cas_1258-157015.jpg?w=1800&t=st=1693742470~exp=1693743070~hmac=c365f7a3777e4f7e1852a6ddc6f85354e3c9d7ac89c9701ea3c0fdf2b83ffbf9')",
    },
  },
};
export const plugins = [];
