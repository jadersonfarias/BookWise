import { vars } from '@/styles/globalTheme.css';
import { style, globalStyle } from '@vanilla-extract/css';


export const Container = style({
    display:"flex",
    alignItems: 'flex-start',
    background: vars.colors.gray[700],
    borderRadius: vars.radii.md,
    gap: '1rem',
    padding: '1.25rem',

    marginBottom: '1rem'
 });


 globalStyle(`${Container} h1`,{
    fontSize: vars.fontSizes.md,
    margin: '0'
    
})


globalStyle(`${Container} span`,{
    fontSize: vars.fontSizes.xs,
    margin: '0'
})

