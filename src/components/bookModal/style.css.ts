import { vars } from '@/styles/globalTheme.css';
import { style, styleVariants } from '@vanilla-extract/css';

// Container principal do modal
export const bookCardModalContainer = style({
  width: '100%',
  
});

// Overlay do modal
export const dialogOverlay = style({
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  position: 'fixed',
  inset: 0,
});

// Caixa de diálogo (conteúdo)
export const dialogBox = style({
  background: vars.colors.gray[800],
  height: '100vh',
  width: '40%',
  padding: '4rem 2rem',
  position: 'fixed',
  zIndex: 2,
  top: 0,
  right: 0,
  overflow: 'auto',

  selectors: {
    '&::-webkit-scrollbar': {
      width: 6,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '50%',
      background: '#3A3A3C',
    },
  },
});

// Botão de fechar
export const dialogClose = style({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 4,
  padding: '8px',
  color: '#A1A1AA',
  position: 'absolute',
  top: '24px',
  right: '2rem',
  cursor: 'pointer',

  ':hover': {
    color: '#8B5CF6',
    transition: 'color 0.3s',
  },
});

// Informações do livro
export const dialogBookInfos = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  padding: '1.6rem 1.2rem 1rem',
  background: vars.colors.gray[700],
  borderRadius: '8px',
});

// Caixa de comentários
export const commentsBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '2rem',


  
});

// Variantes de botões de review
export const reviewButton = styleVariants({
  green: {
    background: 'none',
    color: vars.colors.green[200],
    border: "none",

    ':hover': {
      color: vars.colors.white,
  
    },
  },
  purple: {
    background: 'none',
    color: vars.colors.purple[100],
    border: "none",
    fontSize: vars.fontSizes.md,

    ':hover': {
      color: vars.colors.white,
    },
  },
});


export const moreInfo = style({
    display: 'flex',
    alignItems: 'center',
    padding: '24px 0',
    gap: '3.5rem',
    borderTop: '1px solid #3F3F3F',
  });

  export const BoxBooks = style({
         display: 'flex',
         gap: '3rem',
         fontSize: vars.fontSizes.sm
  });


  export const InfoBook = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
});


export const H2Book = style({
   fontSize: vars.fontSizes.md,
   fontWeight: 'bold',
  // marginBottom: '1rem'
});

export const Span = style({
  color: vars.colors.gray[300]
});



export const Flex = style({
   display: 'flex',
   alignItems: 'center',
   justifyContent:  'space-between',
   gap: '1rem'
});

export const FlexColumn = style({
  display: 'flex',
  flexDirection:'column',
 
  
});


export const CommentContainer = style({
   width: '100%',
   marginTop: '3em'
  
})

export const AvailableInfo= style({
  width: '100%',
  display:  'flex',
  justifyContent: 'space-between',
  marginBottom: '1rem'
})

/// textarea

export const  AvailableBoxProfile = style({
  display: 'flex',
  justifyContent:'space-between',
  alignItems: 'center',
  width: '100%',

})


export const  Textearea = style({
  width: '100%',
  height: '10rem',
  padding: '0.5rem',
  borderRadius: vars.radii.md,
  background: vars.colors.gray[800],
  color: vars.colors.gray[400],
  border: `1px solid ${vars.colors.gray[500]}`,
  marginTop: '1rem',

  ':focus': {
    border: `1px solid ${vars.colors.purple[100]}`,
    outline: "none"
  },
})


export const ContainerTextArea = style({
  background: vars.colors.gray[700],
  borderRadius: vars.radii.md,
  padding: '1.3rem',
  marginBottom: '1rem',
  
}) 

export const UserImage = style({
  borderRadius: vars.radii.full,
  objectFit: 'contain',
  border: `2px solid ${vars.colors.purple[200]}`,
  
}) 