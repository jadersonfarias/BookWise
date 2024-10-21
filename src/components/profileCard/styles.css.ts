import { vars } from '@/styles/globalTheme.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'


export const ProfileContainer = style({
    width: '21rem',
    //height: '100%',
    borderLeft: `1px solid ${vars.colors.gray[600]}`,

   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
  
})

export const ProfileImage = style({
  borderRadius: vars.radii.full,
  marginBottom: '1rem',
  marginLeft: '1rem',

  borderImage: `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%) 4`,
  border: '2px solid purple',
})

export const ProfileUser = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  
})


export const CardInfo = style({
  display: 'flex',
  alignItems: 'center',
  
  marginBottom: '1.5rem'
})


export const ProfileInfo = style({
   display: 'flex',
   flexDirection: 'column',
   paddingLeft: '3rem'
})


export const DivBorde = style({
  borderImage: `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%) 1`,
  borderBottom: '5px solid white',
  width: '2.5rem',
  margin: '2rem 0 2rem'
})


export const Span = recipe({
    base: {
      display: 'flex',
      alignItems: 'center',
      color: vars.colors.gray[400],
      paddingLeft: '1rem',
      
    },
    variants: {
      size: {
        sm: {
          fontSize: '1rem',
        },
        md: {
          fontSize: '1.2rem',
          color: 'white',
        },
        lg: {
          fontSize: '1.5rem', 
          color: 'white',
        },
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  });

