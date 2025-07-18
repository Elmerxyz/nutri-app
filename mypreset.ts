//mypreset.ts
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#eefff5',
      100: '#d7ffeb',
      200: '#b2ffd8',
      300: '#76ffbb',
      400: '#33f596',
      500: '#09de76',
      600: '#00bf62',
      700: '#04914d',
      800: '#0a7140',
      900: '#0a5d37',
      950: '#00341d',
    },
  },
});

export default MyPreset;
