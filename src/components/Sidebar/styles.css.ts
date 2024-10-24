import { vars } from '@/styles/globalTheme.css';
import { style, globalStyle } from '@vanilla-extract/css';


export const Container = style({
     width: '14rem',
     height: '100%',
     background: `linear-gradient(180deg, #181C2A 0%, #252D4A 100%)`,
     borderRadius: vars.radii.lg,
     margin: '1.25rem 0rem 1rem 1.25rem',
     padding: '2.5rem 2rem 0 2.5rem',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'space-between',
     alignItems: 'center'

     
 });

 export const LinkContainer = style({
      display: 'flex',
      flexDirection: 'column',
     alignItems: 'center'
 })



export const ButtonNav = style({
  width:'100%',
  background: 'none',
  border: 'none',

  cursor: 'pointer',

  color:vars.colors.gray[400],
  display: "flex",
  alignItems: 'center',
  padding: '0.4rem 1rem',
  gap: '1.8rem',
  fontSize: vars.fontSizes.lg,
  position: 'relative',

    selectors: {
  
   '&:focus:before': {
    content: '',
    width: '5px',
    height: '39px',

    background: vars.colors['gradient-horizontal'],
    borderRadius: vars.radii.full,

    position: 'absolute',
    marginLeft: '-1rem',
  },

   
  '&:active:before': {
    content: '""', // Mostra o pseudo-elemento quando o botão é clicado
    width: '5px',
    height: '39px',
    background: vars.colors['gradient-horizontal'],
    borderRadius: vars.radii.full,
    position: 'absolute',
    marginLeft: '-1rem',
  },
   
  },

       ':hover': {
         color:vars.colors.white
         
  },
})

export const FooterSidebar = style({  
  width: '12rem',
  display: 'flex',
  justifyContent: 'center',
    selectors: {
      '&:focus': {
        borderImage: `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%) 1`,
        borderLeft: '3px solid white',
        borderImageSlice: 1,
      },
      '&:hover': {
        color: vars.colors.white, // Certifique-se de que vars.colors.white está definida no seu tema
      },
    },
    
   
    marginBottom: '1.6rem'
})


export const ButtonSidebar = style({
  display: 'flex',
  alignItems: 'center',
  background: '0',
  border: '0',
  gap: '0.5rem',
  
// WebkitBackgroundClip: 'text',

  fontSize: vars.fontSizes.lg,
  color: vars.colors.gray[200],


  selectors: {
'&:active:before': {
    content: '""', 
    width: '5px',
    height: '39px',
    background: vars.colors['gradient-horizontal'],
    borderRadius: vars.radii.full,
    position: 'absolute',
    marginLeft: '-1rem',
  },
  
  },
  
  ':hover': {
   color: 'white'
  },

})



globalStyle(`${FooterSidebar} img`, {
    width: '2.6rem', 
    height: '2.6rem',
    borderRadius: vars.radii.full,
    objectFit: 'contain',
   
    borderImage: `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%) 1`,
    border: '2px solid purple',
 });

 


 globalStyle(`${LinkContainer} img`, {
    width: '8rem',          
    height: 'auto',           
    objectFit: 'contain',
    marginBottom: '3rem'
   });



