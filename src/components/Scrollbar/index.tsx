import SimpleBar from 'simplebar-react';
import { styled } from '@mui/material/styles';

export const Scrollbar = styled(SimpleBar)({
  '&': {
    '&:focus-visible': {
      outline: 0,
    },
    '.simplebar-wrapper:focus-visible': {
      outline: 0,
    },
    '.simplebar-track:focus-visible': {
      outline: 0,
    },
  },
});
