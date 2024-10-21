import { vars } from "@/styles/globalTheme.css";
import { style } from "@vanilla-extract/css";

export const LoginModalContainer = style({
    background: vars.colors.gray[700],
    zIndex: 2,
    borderRadius: 12,
    position: 'fixed',
    top: '25%',
    left: '33%',
    width: '90vw',
    maxWidth: '450px',
    maxHeight: '85vh',
    padding: '3.5rem 4.5rem',
})

export const DialogOverlay = style({
    backgroundColor: 'rgba(0, 0, 0, 0.60)',
    position: 'fixed',
    inset: 0, 
    zIndex: 2,
})

export const LoginButton = style({
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    cursor: 'pointer',

    width: '100%',
    padding: '1.2rem',
    borderRadius: vars.radii.md,

    background: vars.colors.gray[600],
    border: '0',
    color: vars.colors.white,

    marginBottom: '1rem',

    ':hover': {
      transform: 'scale(1.05)', 
    },

    ':focus': {
        border: `1px solid ${vars.colors.purple[100]}`
    }
})

export const Title = style({
    fontSize: vars.fontSizes.md,
    color: vars.colors.gray[100],
    textAlign: 'center',

    marginBottom: '2.5rem'
})

export const Button = style({
    background: 'none',
   
    color: vars.colors.purple[100],
    border: "none",

    ':hover': {
      color: vars.colors.white,
      
    },
})

export const dialogClose = style({
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 4,
    padding: '8px',
    color: '#A1A1AA',
    position: 'absolute',
    top: '2px',
    right: '1rem',
    cursor: 'pointer',
  
    ':hover': {
      color: '#8B5CF6',
      transition: 'color 0.3s',
    },
  });