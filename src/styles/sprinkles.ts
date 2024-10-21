// sprinkles.ts
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';


const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    width: {
      mobile: ['100%', '90%', '80%'], // Múltiplos valores para mobile
      tablet: ['100%', '75%'],
      desktop: ['300px', '400px'],
    },
    // Outras propriedades...
  },
});

// Criação dos sprinkles
export const sprinkles = createSprinkles(responsiveProperties);
