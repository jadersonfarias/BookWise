//import { vars } from '@/styles/globalTheme.css';
import { vars } from '@/styles/globalTheme.css';
import { style, globalStyle } from '@vanilla-extract/css';


export const Container = style({
     width: '38rem',
     height: '100%',
     fontSize: vars.fontSizes.md,

    
     overflowY: 'auto',
     scrollbarWidth: 'none',   
     '::-webkit-scrollbar': {   
       display: 'none'
     }
    // border: '1px solid white'
 });

 export const TextDiv = style({
   display: "flex",
   justifyContent: 'space-between',
   paddingTop: '2.5rem'
  });


export const Span = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.2rem',

  fontSize: '2rem'
})

export const FormError = style({
  color: '#f75a68',
})



 globalStyle(`${TextDiv} button`, {
      display:'flex',
      alignItems: 'center',
      gap: '0.3rem',

      paddingBottom: '1.25rem',
      border: '0',
      background: 'none',
      color: vars.colors.purple[100],
      fontSize: vars.fontSizes.md,
})

globalStyle(`${TextDiv} strong`, {
     fontSize: vars.fontSizes.md,
     fontWeight: 'normal'
   })