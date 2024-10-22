
import { vars } from '@/styles/globalTheme.css';
import { style, globalStyle, } from '@vanilla-extract/css';




export const Container = style({
     width: '100%',
     background: vars.colors.gray[600],
     padding: '1rem',
     borderRadius: vars.radii.md,
     marginBottom: '1.5rem'
 });



export const ContentBook = style({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
   marginBottom: '1.5rem'
})

export const InfoBook = style({
   
})

export const DivFlex= style({
    display: 'flex',
    justifyContent: 'space-between',
   
 })
 


 export const H3 = style({
    fontSize: vars.fontSizes.lg,
    display: 'flex',
    flexDirection: 'column',
 })

  
globalStyle(`${ContentBook} span`, {
    fontSize: vars.fontSizes.xs,
    color: vars.colors.gray[400]
});

globalStyle(`${ContentBook} p`, {
    fontSize: vars.fontSizes.sm,
    color: vars.colors.gray[400],
    marginTop: '1.5rem'
});

