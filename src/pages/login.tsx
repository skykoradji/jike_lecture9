import React, { Component, Fragment } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { AxiosResponse } from 'axios';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';
import withLayout from '../lib/withLayout';
import restClient from '../lib/restClient';
import errorHandler from '../lib/errorHandler';

const styles = (theme: Theme) => createStyles({
  loginContainer: {
    width: 500,
    margin: '0 auto',
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 500
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  loginButton: {
    float: 'right',
    marginTop: 40
  },
  loginForm: {
    marginTop: 40
  },
  clear: {
    clear: 'both'
  },
  headline: {
    marginTop: 30,
    textAlign: 'center'
  },
  signupSection: {
    textAlign: 'center',
    marginTop: 10
  },
  signupInLogin: {
    marginLeft: 10
  },
  hr: {
    border: 0,
    borderTop: '1px solid #f5f5f5'
  }
});

interface Props {
  name: string;
  history: any;
  classes: any;
  updateUser: (payload: any) => void;
  authenticate: (payload: any) => void;
}

interface State {
  username: string;
  password: string;
  submitted: boolean;
}

class LoginPage extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      password: '',
      submitted: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit() {
    const { username, password } = this.state;

    this.setState({ submitted: true });
    try {
      const response: AxiosResponse<any> = await restClient().post('signin', { userName: username, password });

      const { token, role, uniqueId } = response.data;
      
      const { authenticate, updateUser, history } = this.props;
      localStorage.setItem('token', token);
      localStorage.setItem('uniqueId', uniqueId);
      authenticate(response.data);
      const profile: AxiosResponse<any> = await restClient().get(`userprofile/${uniqueId}`);

      updateUser({ ...profile.data, role });

      history.push('/');
    } catch (err) {
      errorHandler(err);
      this.setState({ submitted: false });
    }
  }

  signup = () => {
    const { history } = this.props;
    history.push('/signup');
  };

  handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.target.value });
  }

  render() {
    const { classes } = this.props;
    const { submitted, username, password } = this.state;
    return (
      <Fragment>
        <div className={classes.loginContainer}>
          <Typography className={classes.headline} variant="h4" component="h4">
            Login
          </Typography>

          <Grid container justify="center">
            <Grid item xs={12}>
              <ValidatorForm className={classes.loginForm} onSubmit={this.handleSubmit}>
                <TextValidator
                  required
                  fullWidth
                  margin="normal"
                  label="Username"
                  onChange={this.handleNameChange}
                  name="userName"
                  disabled={submitted}
                  value={username}
                  validators={['required', 'minStringLength:5']}
                  errorMessages={[
                    'This field is required!',
                    'Username cannot be shorter than 5 characters!'
                  ]}
                />

                <TextValidator
                  required
                  fullWidth
                  margin="normal"
                  label="Password"
                  onChange={this.handlePasswordChange}
                  name="password"
                  type="password"
                  validators={['required', 'minStringLength:5']}
                  errorMessages={[
                    'This field is required',
                    'Password cannot be shorter than 8 characters!'
                  ]}
                  value={password}
                />

                <Button
                  className={classes.loginButton}
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={submitted}
                >
                  Login
                </Button>
                <div className={classes.clear} />
                <hr className={classes.hr} />
              </ValidatorForm>
            </Grid>
          </Grid>
        </div>
        <div className={classes.signupSection}>
          Don’t have an account?
          <Button
            className={classes.signupInLogin}
            variant="text"
            color="primary"
            size="small"
            onClick={this.signup}
          >
            Sign up
          </Button>
        </div>
      </Fragment>
    );
  }
}

export const Login = withStyles(styles)(LoginPage);
export default withLayout(Login);
