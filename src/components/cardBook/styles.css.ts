
import { vars } from '@/styles/globalTheme.css';
import { style, globalStyle, } from '@vanilla-extract/css';



export const Container = style({
     width: '100%',
     background: vars.colors.gray[700],
     padding: '1rem',
     borderRadius: vars.radii.md,
     marginBottom: '1.5rem'
 });

export const ProfileHeader = style({
    display: 'flex',
    alignItems: 'center',
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
 
})

export const ButtunText = style({
    border: '0',
    background: 'none',
    color: vars.colors.purple[100],

    ':hover' : {
        color: 'white',
        cursor: 's-resize'
    }
})

export const H3 = style({
   fontSize: vars.fontSizes.lg,
   display: 'flex',
   flexDirection: 'column',
   marginBottom: '0.3rem'
})

globalStyle(`${ProfileHeader} span`,{
    fontSize: vars.fontSizes.sm,
    margin: '0',
    color: vars.colors.gray[400]
})



  
globalStyle(`${InfoBook} span`, {
    fontSize: vars.fontSizes.xs,
    color: vars.colors.gray[300]
});

globalStyle(`${InfoBook} p`, {
    fontSize: vars.fontSizes.sm,
    color: vars.colors.gray[300]
});


