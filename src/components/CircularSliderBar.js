import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CircularSliderBar = () => {  
  const [progress, setProgress] = useState(0);

  const handleSliderChange = (event, newValue) => {
    setProgress(newValue);
  };

  const CustomBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

  const CustomSlider = styled(Slider)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? '#0a84ff' : '#007bff',
    height: 10,
    padding: '15px 0',
    '& .MuiSlider-thumb': {
      height: 15,
      width: 15,
      border: '3px solid #ffffff',
      backgroundColor: '#42e3f5',
      boxShadow: '0 0 2px 0px rgba(0, 0, 0, 0.1)',
      '&:focus, &:hover, &.Mui-active': {
        boxShadow: '0px 0px 3px 1px rgba(0, 0, 0, 0.1)',
        '@media (hover: none)': {
          boxShadow: CustomBoxShadow,
        },
      },
      '&:before': {
        boxShadow:
          '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)',
      },
    },
    '& .MuiSlider-valueLabel': {
      fontSize: 12,
      fontWeight: 'normal',
      top: -6,
      backgroundColor: 'unset',
      color: theme.palette.text.primary,
      '&::before': {
        display: 'none',
      },
      '& *': {
        background: 'transparent',
        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
      },
    },
    '& .MuiSlider-track': {
      border: 'none',
      height: 10,
      backgroundColor: '#42e3f5'
    },
    '& .MuiSlider-rail': {
      opacity: 1,
      boxShadow: 'inset 0px 0px 4px -2px #000',
      backgroundColor: '#ffffff',
    },
  }));

  function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" value={progress*10} thickness={1} size={130} sx={{
              color: (theme) => (theme.palette.mode === 'light' ? '#ffffff' : '#308fe8')
            }} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        > 
          <div style={{position: 'relative', top: '2px', left: '0px'}}>
            <img src='/Waves4.png' alt='Music Waves'></img>
          </div>
          <div style={{position: 'absolute', top: '45px', left: progress > 9 ? '50px' : '58px' }}>
            <Typography sx={{color: 'white', fontSize: '25px'}} variant="caption" component="div">
              {`${Math.round(progress)}`}
            </Typography>
          </div>
        </Box>
      </Box>
    );
  }
  return (
    <>
      <div className='circle container'>
        <div className='outer-circle'>
          <div className='circular-progress inner-circle'>
            <CircularProgressWithLabel />
          </div>
        </div>
      </div>
      <div className='slider-bar'>
        <CustomSlider
          size="medium"
          value={progress}
          onChange={handleSliderChange}
          min={0}
          max={10}
        />
      </div>
    </>  
  )
}
export default CircularSliderBar;