import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Grid from '@mui/material/Grid';
import { BsBoxArrowInUp } from 'react-icons/bs';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://fotos.perfil.com/2019/08/28/trim/1280/720/ford-ecosport-769537.jpg',
  },
  {
    label: 'Bird',
    imgPath:
      'https://www.mdzol.com/u/fotografias/m/2021/11/6/f608x342-1132670_1162393_0.jpg',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://siempreauto.com/wp-content/uploads/sites/9/2021/07/16FiestaST_34FrntDrvr_spl.jpg?quality=60&strip=all&w=1200',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://siempreauto.com/wp-content/uploads/sites/9/2021/11/meritt-thomas-BwBxVVdlpYE-unsplash-1.jpg?quality=60&strip=all&w=1200',
  },
  {
    label: 'Sedan',
    imgPath:
      'https://www.elcarrocolombiano.com/wp-content/uploads/2020/10/20201110-Ford-011-S%C3%8D.jpg',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    
    <Grid order={{md : 1 , xs : 2}}>
        <Box sx={{ maxWidth: 780, flexGrow: 1 }}>
        <Paper
            square
            elevation={0}
            sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
            }}
        >
        </Paper>
    {      <AutoPlaySwipeableViews

              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
        >
            {images.map((step, index) => (
            <Box 
              
              key={step.label}
              //style={{height:"530px"}}
              height = {{
                xs : 330,
                md : 530
              }}
              >
                {Math.abs(activeStep - index) <= 2 ? (
                <Box
                    component="img"
                    sx={{
                    display: 'relative',
                    maxWidth: 1000,
                    overflow: 'hidden',
                    width: '100%',
                    }}
                    src={step.imgPath}
                    alt={step.label}
                />
                ) 
                : null}
            </Box>
            ))}
        </AutoPlaySwipeableViews>}

        <MobileStepper
            steps={maxSteps}
            position="relative"
            activeStep={activeStep}
            nextButton={
            <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
            >
                Next
                {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
                ) : (
                <KeyboardArrowRight />
                )}
            </Button>
            }
            backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
                ) : (
                <KeyboardArrowLeft />
                )}
                Back
            </Button>
            }
        />
        </Box>
    </Grid>
  );
}

export default SwipeableTextMobileStepper;
