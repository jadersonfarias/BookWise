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
   alignItems: 'center',
   paddingTop: '2.5rem',
   marginBottom: '1rem'
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


export const ButtonAll = style({
  display: 'flex',
  alignItems: 'center',
  background: 'none',
  color: vars.colors.purple[100],
  border: '0',

  ":hover" : {
    color: 'white'
  } 
})

export const Title = style({
  textShadow: '2px 2px 1px rgba(0, 0, 0, 0.5)',
  color: vars.colors.purple[100]
})

export const Box = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    background: vars.colors.gray[600],
    height: '7rem',
   marginBottom: '1rem',

   borderRadius: vars.radii.md
})




globalStyle(`${TextDiv} strong`, {
     fontSize: vars.fontSizes.md,
     fontWeight: 'normal'
   })