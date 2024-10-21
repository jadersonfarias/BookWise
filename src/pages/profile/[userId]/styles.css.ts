//import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';


export const Container = style({
  display: 'flex',              
  flexWrap: 'nowrap',  
  alignItems: 'end',          
  height: '100vh',              
  width: '100vh',
  gap:"3rem",
  

 });


 export const Content = style({
  height: '85%',
  display: "flex",
  alignItems: 'center',
  gap: '3rem',
  flexWrap: 'nowrap',

//   '@media': {
//     'screen and (min-width: 768px)': {
         
//     },
//     'screen and (min-width: 1024px)': {
//       gap: '3rem',
//     }, 
//  }
})