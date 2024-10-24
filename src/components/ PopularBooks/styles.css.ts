import { vars } from '@/styles/globalTheme.css';
import { style, globalStyle } from '@vanilla-extract/css';


export const Container = style({
     width: '26vw',
     height: '78%',

     overflowY: 'auto',
     scrollbarWidth: 'none',   
     '::-webkit-scrollbar': {   
       display: 'none'
     },
     '@media': {
       'screen and (min-width: 1028px)': {
         maxWidth: 350,
       },
        }
 });

 export const TextDiv = style({
    display: "flex",
    justifyContent: 'space-between',
    fontSize: vars.fontSizes.md,
   });


   export const ButtonAll = style({
     display:'flex',
     alignItems: 'center',
     gap: '0.3rem',
     fontSize: vars.fontSizes.md,
   
     paddingBottom: '1rem',
     border: '0',
     background: 'none',
     color: vars.colors.purple[100],
     
     ":hover": {
       color: 'white'
     }
   });



globalStyle(`${TextDiv} span`, {
      paddingBottom: '1rem'
   })