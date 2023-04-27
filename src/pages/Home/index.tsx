import { FC, Fragment, useState } from 'react';

import { styled, Theme, CSSObject } from '@mui/material/styles';

import { Box, Toolbar, List, CssBaseline, Typography, Divider, IconButton } from '@mui/material';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Scrollbar } from '@components/Scrollbar';
import { neutral } from '@theme/color';

const drawerWidth = 280;

const openedMenubarMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflow: 'hidden',
});

const closedMenubarWidthMixin = (theme: Theme): CSSObject => ({
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const closedAppHeaderOffsetMixin = (theme: Theme): CSSObject => {
  const mixin = closedMenubarWidthMixin(theme);
  const breakpoint = theme.breakpoints.up('sm');
  return {
    width: `calc(100% - ${mixin.width})`,
    [breakpoint]: {
      width: `calc(100% - ${(mixin[breakpoint] as CSSObject).width})`,
    },
  };
};
const closedMenubarMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflow: 'hidden',
  ...closedMenubarWidthMixin(theme),
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backdropFilter: 'blur(6px)',
  backgroundColor: 'rgba(248, 249, 250, 0.8)',
  color: theme.palette.primary.main,
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && closedAppHeaderOffsetMixin(theme)),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '--nav-bg': '#1C2536',
  '--nav-color': '#fff',
  '--nav-border-color': 'transparent',
  '--nav-logo-border': '#2F3746',
  '--nav-section-title-color': '#9DA4AE',
  '--nav-item-color': '#9DA4AE',
  '--nav-item-hover-bg': 'rgba(255, 255, 255, 0.04)',
  '--nav-item-active-bg': 'rgba(255, 255, 255, 0.04)',
  '--nav-item-active-color': '#fff',
  '--nav-item-disabled-color': '#6C737F',
  '--nav-item-icon-color': '#9DA4AE',
  '--nav-item-icon-active-color': '#6366F1',
  '--nav-item-icon-disabled-color': '#6C737F',
  '--nav-item-chevron-color': '#4D5761',
  '--nav-scrollbar-color': '#9DA4AE',
  ...(open && {
    ...openedMenubarMixin(theme),
    '& .MuiDrawer-paper': openedMenubarMixin(theme),
  }),
  ...(!open && {
    ...closedMenubarMixin(theme),
    '& .MuiDrawer-paper': closedMenubarMixin(theme),
  }),
}));

const navbarMenus = [
  {
    title: '',
    menus: ['Overview', 'Analytics', 'E-Commerce', 'Crypto', 'Account'],
  },
  {
    title: '',
    menus: ['All mail', 'Trash', 'Spam', 'All mail 2', 'Trash 2', 'Spam 2', 'All mail 3', 'Trash 3', 'Spam 3'],
  },
];

const Home: FC = () => {
  const [open, setOpen] = useState(true);
  const [activeNav, setActiveNav] = useState(navbarMenus[0].menus[0]);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" open={open} elevation={16}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <Scrollbar
          sx={{
            maxHeight: '100%',
            '& .simplebar-scrollbar:before': {
              background: neutral[400],
            },
          }}
        >
          <Box
            sx={{
              overflow: 'hidden',
              minHeight: '100vh',
              backgroundColor: 'var(--nav-bg)',
              color: 'var(--nav-item-color)',
              px: '16px',
            }}
          >
            <DrawerHeader>
              <IconButton
                sx={{
                  color: 'var(--nav-item-icon-color)',
                }}
                onClick={handleDrawerToggle}
              >
                {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </DrawerHeader>

            {navbarMenus.map((menu, index) => {
              return (
                <Fragment key={index}>
                  <Divider light color="#2F3746" />
                  <List>
                    {menu.menus.map((nav, index) => (
                      <ListItem
                        key={nav}
                        disablePadding
                        sx={{
                          display: 'block',
                          '&:not(style) + :not(style)': {
                            pt: '4px',
                          },
                        }}
                      >
                        <ListItemButton
                          onClick={() => setActiveNav(nav)}
                          selected={activeNav === nav}
                          sx={{
                            justifyContent: open ? 'initial' : 'center',
                            px: '16px',
                            py: '6px',
                            borderRadius: '8px',
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                              color:
                                activeNav === nav ? 'var(--nav-item-icon-active-color)' : 'var(--nav-item-icon-color)',
                            }}
                          >
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                          </ListItemIcon>
                          <ListItemText primary={nav} sx={{ opacity: open ? 1 : 0, m: 0 }} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Fragment>
              );
            })}
          </Box>
        </Scrollbar>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur distinctio exercitationem libero nam
          nisi quas ut vero voluptas. A asperiores dolor earum esse in iure non provident quam sit. Debitis?
        </Typography>

        <div style={{ height: '200vh' }}>1</div>
      </Box>
    </Box>
  );
};

export default Home;
