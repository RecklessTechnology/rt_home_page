import React from "react";

// import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

// import { Link } from "react-router-dom";

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
      <h3 className="page-title">RecklessTech</h3>
      <h5 className="text-uppercase page-subtitle">Demos, Experiments, &amp; Projects by <a href="https://travisbennett.com" target="_blank" rel="noopener noreferrer">Travis Bennett</a></h5>
    </div>
  );
}
