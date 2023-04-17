import React from 'react';

import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

const LinkBehavior = React.forwardRef<any, RouterLinkProps>((props, ref) => {
  return <RouterLink ref={ref} {...props} />;
});

export default LinkBehavior;
