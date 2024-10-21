import { vars } from "@/styles/globalTheme.css";
import { style } from "@vanilla-extract/css";


export const SearchContainer = style({
    position: 'relative', // Torna a div pai referência para posicionamentos absolutos
    width: '100%', // Garante que o container tenha a largura máxima do pai
    display: 'flex',
    alignItems: 'center', 
    
})

export const Svg = style({
    position: 'absolute',
    right: '0.8rem',
    bottom: '0.7rem',
    color: vars.colors.gray[500]
})

export const Input = style({
    width: '100%',
    background: 'transparent',
    padding: vars.space[3],
    border: '1px solid #303F73',
    borderRadius: vars.radii.sm,
    color: vars.colors.white,
    marginTop: '2.3rem',
    caretColor: vars.colors.green[100],
    position: 'relative',

    selectors: {
    '&:focus': {
          outline: 'none',
         border: `1px solid ${vars.colors.green[200]}`, 
      },
     },
})