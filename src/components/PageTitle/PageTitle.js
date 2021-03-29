import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

export default function PageTitle(props) {
  const useStyles = makeStyles((theme) => ({
    pageTitleContainer: {
      width: '100%',
      color: '#000'
    }
  }));
  var classes = useStyles();

  return (
    <div className={classes.pageTitleContainer}>
      <Typography variant="h6">Demos, Projects, &amp; Experiments by <a href="https://travisbennett.com" target="_blank" rel="noopener noreferrer">Travis Bennett</a></Typography>
    </div>
  );
}
