
import { vars } from '@/styles/globalTheme.css';
import { style,  } from '@vanilla-extract/css';



export const Container = style({
     width: '100%',
     background: vars.colors.gray[700],
     padding: '1rem',
     borderRadius: vars.radii.md,
     marginBottom: '1.5rem'
 });



export const UserImage = style({
    borderRadius: vars.radii.full,
    objectFit: 'contain',
    border: `2px solid ${vars.colors.purple[200]}`,
    
}) 

export const AuthorInfo = style({
    display: 'flex',
    flexDirection: 'column',
   
    gap: '5rem'
        
}) 

export const ContentBook = style({
    display: 'flex',
    flexDirection: 'column',
})

export const DescriptionBook = style({
    display: 'flex',
    gap: vars.space[8]
})

export const H3 = style({
   fontSize: vars.fontSizes.lg,
   display: 'flex',
   flexDirection: 'column',
})

export const Span = style({
    fontSize: vars.fontSizes.sm,
    color: vars.colors.gray[400]
 })


 export const SpanTime = style({
    fontSize: vars.fontSizes.sm,
    color: vars.colors.gray[400],
    display: 'flex',
    justifyContent: 'end',
    marginTop: '-0.5rem'
 })
 
 

 export const Paragraph  = style({
    fontSize: vars.fontSizes.sm,
    color: vars.colors.gray[300],
    marginTop: '2rem'
 })
 



  
