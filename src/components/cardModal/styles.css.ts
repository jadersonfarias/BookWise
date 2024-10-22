
import { vars } from '@/styles/globalTheme.css';
import { style,  } from '@vanilla-extract/css';



export const Container = style({
     width: '100%',
     background: vars.colors.gray[700],
     padding: '1.3rem',
     borderRadius: vars.radii.md,
     marginBottom: '1.3rem'
 });

export const ProfileHeader = style({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    gap: '8px'
})

export const UserImage = style({
    borderRadius: vars.radii.full,
    objectFit: 'contain',
    border: `2px solid ${vars.colors.purple[200]}`,
    
}) 

export const UserInfo = style({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
        
}) 

export const ContentBook = style({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
   
})

export const InfoBook = style({
    textAlign: 'justify',
    color: vars.colors.gray[300],
    fontSize: vars.fontSizes.sm,
    lineHeight: vars.lineHeights.base
})

export const H3 = style({
   fontSize: vars.fontSizes.lg,
   display: 'flex',
   flexDirection: 'column',
   marginBottom: '0.3rem'
})

export const span = style({
    color: vars.colors.gray[300],
 })
 

