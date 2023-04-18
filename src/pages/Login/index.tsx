import type { FC } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Typography,
  Link,
  TextField,
  InputAdornment,
  IconButton,
  styled,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material';
import Copyright from '@components/Copyright';
import LinkBehavior from '@components/LinkBehavior';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface LoginFormNames {
  username: string;
  password: string;
  remember: boolean;
}

const DivBGContainer = styled('div')(`
  background-color: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-position: center top;
  background-image: url('/assets/gradient-bg.svg');
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`);

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
    <DivBGContainer>
      <Container component="main" maxWidth="sm">
        <CssBaseline />

        <Card>
          <CardHeader
            title="Log in"
            subheader={
              <Typography>
                Don't have an account?{' '}
                <Link component={LinkBehavior} to="/">
                  Register
                </Link>
              </Typography>
            }
          />

          <CardContent>
            <Box component="form" onSubmit={methods.handleSubmit(onSubmit)} noValidate>
              <TextField
                fullWidth
                autoFocus
                label="Email Address *"
                autoComplete="email"
                sx={{ marginBottom: 1 }}
                error={hasUsernameError}
                helperText={methods.formState.errors.username?.message}
                {...methods.register('username', {
                  required: { value: true, message: 'Email is Required!' },
                  pattern: { value: /^\S+@\S+\.\S+$/, message: 'This is not email address!' },
                })}
              />

              <TextField
                margin="normal"
                fullWidth
                error={hasPasswordError}
                type={showPassword ? 'text' : 'password'}
                label="Password *"
                autoComplete="current-password"
                helperText={methods.formState.errors.password?.message}
                InputProps={{
                  endAdornment: (
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
                  ),
                }}
                {...methods.register('password', {
                  required: { value: true, message: 'Password is Required!' },
                  minLength: {
                    value: 8,
                    message: 'Password length is incorrect!',
                  },
                })}
              />

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

              <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }}>
                Sign In
              </Button>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Link component={LinkBehavior} to="/logout">
                  Forgot password?
                </Link>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Copyright typographyProps={{ sx: { mt: 8, mb: 4 } }} />
      </Container>
    </DivBGContainer>
  );
};

export default Login;
