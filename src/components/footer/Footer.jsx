import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import {BsFacebook , BsInstagram} from "react-icons/bs";
import Grid from '@mui/material/Grid';

const images = [
  {
    url: 'https://www.brenson.com.ar/0kmbrc/images/florida.jpg',
    title: 'FLORIDA -- Av. Mitre 1602 Florida GBA',
    width: '33.33%',
  },
  {
    url: 'https://www.brenson.com.ar/tdranger/images/bariloche.png',
    title: 'BARILOCHE -- Cmte. Luis Piedrabuena 6038 San Carlos de Bariloche',
    width: '33.33%',
  },
  
  {
    url: 'https://www.brenson.com.ar/wp-content/uploads/2021/10/caballito_baja.jpg',
    title: 'CASA CENTRAL -- Av. Rivadavia 6111 C.A.B.A.',
    width: '33.33%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
  return (
    <div className='sticky bottom-0'>

      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        minWidth: 400, 
        width: '100%',
      }}>
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})`}} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
      <div >
        <BsFacebook 
          fill='#2E86C1'
          size={20}
          style={{
            margin: 10
          }}
        />
        <BsInstagram
          fill='#2E86C1'
          size={20}
          style={{
            margin: 10
          }}
        />
      </div>
    </div>
  );
}