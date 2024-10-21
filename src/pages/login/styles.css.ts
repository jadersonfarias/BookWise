import { vars } from '@/styles/globalTheme.css';
import { style, globalStyle } from '@vanilla-extract/css';


export const Container = style({
   display:'flex',
   width: '100vw',
  
});


export const  H3 = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.gray[300],
  
  marginTop: '1rem'
});


globalStyle(`${Container} h1`, {
  fontSize: "2rem",
  fontWeight: 'bold'
});

export const TextContainer = style({
  
})

export const ImageContainer = style({
  height:'100vh',
  width:"50%",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: 'url("/assets/Image.png")',  
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const LoginContainer = style({
  height:'100vh',
  width:"50%",


  display: 'flex',
  flexDirection: 'column',
  alignItems:'center',
  justifyContent: 'center'

});

export const Button = style({
    all: "unset",
    width: '100%',

    display:'flex',
    alignItems:'center',
    justifyContent: 'flex-start',
    padding: '1.25rem 2rem',
    borderRadius: vars.radii.md,
    gap: '1rem' ,

    background: vars.colors.gray[600],
    fontSize: vars.fontSizes.md,
   
    ':hover': {
      transform: 'scale(1.05)', // Opcional: adiciona um leve efeito de crescimento
    },
    
});

export const ButtonContainer = style({
     maxWidth: "23rem",
     marginTop: '2.5rem',
     display:"flex",
     flexDirection: 'column',
     gap: vars.space[5]
})