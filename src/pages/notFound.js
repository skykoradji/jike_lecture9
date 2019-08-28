import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import withLayout from '../lib/withLayout';

const styles = {
  container: {
    textAlign: 'center',
    margin: '0 auto'
  },
  pageTitle: {
    marginTop: 50
  }
};

const NotFound = ({ classes }) => (
  <Fragment>
    <div className={classes.container}>
      <Typography variant="h3" color="primary" className={classes.pageTitle}>
        404
      </Typography>
      <br />
      <Typography variant="h5" color="primary">
        Oops! That page can’t be found.
      </Typography>
      <br />
      <br />

      <Typography variant="h5" color="textPrimary">
        <a href="/">Return to Home Page</a>
      </Typography>
    </div>
  </Fragment>
);

export default withLayout(withStyles(styles)(NotFound));
