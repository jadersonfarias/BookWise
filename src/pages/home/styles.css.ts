//import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';


export const HomeContainer = style({
  display: 'flex',              
  flexWrap: 'nowrap',  
  alignItems: 'end',          
  height: '100vh',              
  width: '100vh',
  gap:"3rem",

 });


 export const HomeContent = style({
  height: '85%',
  display: "flex",
  alignItems: 'center',
  gap: '3rem',

})