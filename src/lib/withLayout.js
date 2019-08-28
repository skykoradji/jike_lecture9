import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple, green } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Notification from '../components/Notification';

import actions from './redux/actions';
import 'react-toastify/dist/ReactToastify.css';
// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700]
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  },
  typography: {
    useNextVariants: true
  }
});

const mapStateToProps = state => {
  return {
    user: state.user,
    authentication: state.authentication
  };
};

function withLayout(Component) {
  function App(props) {
    const { requireAuth } = props;
    if (requireAuth) {
      if (!props.authentication.isLoggedIn) {
        window.location.href = '/login';
        return null;
      }
    }
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header {...props} />
        <div
          style={{
            marginTop: 20,
            padding: 30,
            maxWidth: 1000,
            minHeight: '72vh',
            margin: '0 auto'
          }}
        >
          <Component {...props} />
        </div>
        <Notification />
        <Footer />
      </MuiThemeProvider>
    );
  }

  return connect(
    mapStateToProps,
    actions
  )(App);
}

export default withLayout;
