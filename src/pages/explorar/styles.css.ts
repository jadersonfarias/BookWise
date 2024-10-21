//import { vars } from '@/styles/globalTheme.css';
import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';


export const Container = style({
  display: 'flex',               
  alignItems: 'end',          
  height: '100vh',              
  width: '100vw',
  gap:"5rem",
 

 });


 export const Content = style({
  height: '90vh',
  width: '100vw',
  //paddingLeft: '0.2rem',
  gap: '3rem',

 

  overflowY: 'auto',
  scrollbarWidth: 'none',   
  '::-webkit-scrollbar': {   
    display: 'none'
  }
 


//   '@media': {
//     'screen and (min-width: 768px)': {
         
//     },
//     'screen and (min-width: 1024px)': {
//       gap: '3rem',
//     }, 
//  }
})


export const ExplorarCategories = style({
  width: '80vw',
  display: 'flex',
  overflowX: 'auto',
  gap: 'clamp(0.5rem, 2vw, 1rem)', // Gap dinâmico que se ajusta com a largura da tela
  padding: '1rem',
  

  '::-webkit-scrollbar': {
    width: '1px', // Largura da barra de rolagem
    height: '5px', // Altura da barra de rolagem horizontal
},
'::-webkit-scrollbar-track': {
    background: 'transparent', // Fundo da trilha da barra de rolagem
},
'::-webkit-scrollbar-thumb': {
    background: vars.colors.purple[100], // Cor da barra de rolagem
    borderRadius: '4px', // Bordas arredondadas para a barra
},


 });

 export const ButtonCategories = style({
  background: 'none',
  padding:'0.6rem',
  border: '1px solid #8381D9',
  fontSize: '1rem',
  borderRadius: vars.radii.md,
  color: vars.colors.purple[100],

  selectors: {
    '&:focus': {
      background: vars.colors.purple[100],
      color: 'white'
    },
 
  
  },
  
  ':hover': {
   color: 'white',
   border: '1px solid #fff',
   background: vars.colors.purple[100],
  },

});

export const  GridContainer = style({
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap', 
        gap: '1rem',
        marginBottom: '1.2rem'
    
      // width: '100%',
      // display: 'grid',
      // gap: "1rem", 
      // gridTemplateColumns: 'repeat(3, 1fr)',
    

      // '@media': {
      //   '(max-width: 728px)': {
      //     gridTemplateColumns: 'repeat(2, 1fr)',
      //   },
      //   '(max-width: 480px)': {
      //     gridTemplateColumns: '1fr', // Exemplo para telas menores
      //   },
      // },
})

export const H2Eplorer = style({
    display: '-webkit-box', // Necessário para o comportamento de clamp
    WebkitBoxOrient: 'vertical',
   fontSize: vars.fontSizes.md,
   overflow: 'hidden', // Esconde o texto extra
   textOverflow: 'ellipsis', // Exibe "..." no final do conteúdo cortado
   lineClamp: 2, // Número máximo de linhas (somente para navegadores com suporte)
   WebkitLineClamp: 2, // Suport

})

export const  BookContainer = style({
  width: '18rem',
  //height: '11.5rem',
  display: 'flex' ,
  alignItems: 'start',
  
  gap: '1.5rem',
  position: 'relative',

  padding: '0.9rem',
  borderRadius: vars.radii.sm,
  background: vars.colors.gray[600],

  //marginTop: '2rem'
});

export const  BookImage = style({
     objectFit: 'contain',
    // height: '100%'
});

export const  BookContent = style({
     fontSize: vars.fontSizes.xs,
     display: 'flex',
     gap: '1.2rem',
    
     flexDirection: 'column'
});

/////




export const ExplorarBooksContainer = style({
    width: '100%',
    
 });


export const DivFlex = style({
  display: "flex",
 justifyContent: 'space-between',
 marginRight: '2rem'
 });

export const BoxInput = style({
  width: '27rem',
  marginBottom: '2rem'
})




export const SpanExplorar = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.2rem',

  fontSize: '2rem'
 });

export const SpanComment = style({
   padding: '0 0.5rem 0 ',
   background: vars.colors.green[300],
   color: vars.colors.green[100],
   position: "absolute",
   top: '125px',
   right: '0'
})