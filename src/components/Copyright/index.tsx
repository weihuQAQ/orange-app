import React, { FC } from 'react';
import { Typography, TypographyProps, Link } from '@mui/material';
import LinkBehavior from '@components/LinkBehavior';

export interface CopyrightProps {
  typographyProps?: TypographyProps;
}

const Copyright: FC<CopyrightProps> = ({ typographyProps = {} }) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...typographyProps}>
      {'Copyright © '}
      <Link color="inherit" to="/" component={LinkBehavior}>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
