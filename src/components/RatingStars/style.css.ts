import { vars } from '@/styles/globalTheme.css';
import { recipe } from '@vanilla-extract/recipes';

export const RatingStarsContainer = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    color: vars.colors.purple[100]
  },
  variants: {
    size: {
      sm: {
        fontSize: '1rem', // Tamanho das estrelas pequenas
      },
      md: {
        fontSize: '1.5rem', // Tamanho das estrelas médias
      },
      lg: {
        fontSize: '2rem', // Tamanho das estrelas grandes
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});