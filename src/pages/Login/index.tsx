import type { FC } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  Link,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link as RouterLink } from 'react-router-dom';
import Copyright from '@components/Copyright';

import './index.scss';
import LinkBehavior from '@components/LinkBehavior';

interface LoginFormNames {
  username: string;
  password: string;
  remember: boolean;
}

const Login: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const methods = useForm<LoginFormNames>({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    defaultValues: {
      remember: true,
    },
  });

  const onSubmit = (v: any) => {
    console.log(v);
  };

  const hasUsernameError = !!methods.formState.errors.username;
  const hasPasswordError = !!methods.formState.errors.password;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, backgroundColor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <Box component="form" onSubmit={methods.handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <FormControl margin="normal" fullWidth sx={{ marginBottom: 1 }} error={hasUsernameError}>
            <InputLabel htmlFor="login-username">Email Address *</InputLabel>
            <OutlinedInput
              id="login-username"
              label="Email Address *"
              aria-describedby="login-username-helper-text"
              autoFocus
              autoComplete="email"
              {...methods.register('username', {
                required: { value: true, message: 'Email is Required!' },
                pattern: { value: /^\S+@\S+\.\S+$/, message: 'This is not email address!' },
              })}
            />
            <FormHelperText id="login-username-helper-text">
              {methods.formState.errors.username?.message}
            </FormHelperText>
          </FormControl>

          <FormControl margin="normal" variant="outlined" fullWidth error={hasPasswordError}>
            <InputLabel htmlFor="outlined-adornment-password">Password *</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((show) => !show)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password *"
              autoComplete="current-password"
              {...methods.register('password', {
                required: { value: true, message: 'Password is Required!' },
                minLength: {
                  value: 8,
                  message: 'Password length is incorrect!',
                },
              })}
            />
            <FormHelperText id="login-username-helper-text">
              {methods.formState.errors.password?.message}
            </FormHelperText>
          </FormControl>

          <FormControlLabel
            control={
              <Checkbox
                defaultChecked={methods.formState.defaultValues?.remember}
                inputProps={{ 'aria-label': 'Remember me' }}
                {...methods.register('remember')}
              />
            }
            label="Remember me"
          />

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>

          <Grid container>
            <Grid item xs>
              <Link component={LinkBehavior} to="/logout">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link component={LinkBehavior} to="/">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Copyright typographyProps={{ sx: { mt: 8, mb: 4 } }} />
    </Container>
  );
};

export default Login;
