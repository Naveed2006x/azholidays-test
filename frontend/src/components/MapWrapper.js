import React from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import GoogleMap from './GoogleMap';
import { Box, Typography, CircularProgress } from '@mui/material';

const render = (status) => {
  if (status === Status.LOADING) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="400px">
        <CircularProgress />
      </Box>
    );
  }
  
  if (status === Status.FAILURE) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="400px">
        <Typography color="error">
          Error loading map. Please try again later.
        </Typography>
      </Box>
    );
  }
  
  return null;
};

const MapWrapper = ({ apiKey, center, zoom, style }) => {
  return (
    <Wrapper apiKey={apiKey} render={render}>
      <GoogleMap center={center} zoom={zoom} style={style} />
    </Wrapper>
  );
};

export default MapWrapper;